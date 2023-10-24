import { useEffect, useState } from 'react'

import { CalculateButton } from '../styles/ButtonStyles'

function BMICalculator() {
	const [height, setHeight] = useState(0)
	const [weight, setWeight] = useState(0)
	const [bmi, setBMI] = useState(0)

	useEffect(() => {
		const storedBMI = localStorage.getItem('bmi')
		if (storedBMI) {
			setBMI(parseFloat(storedBMI))
		}
	}, [])

	useEffect(() => {
		if (height > 0 && weight > 0) {
			const heightInMeters = height / 100
			const calculatedBMI = weight / (heightInMeters * heightInMeters)
			setBMI(calculatedBMI)

			localStorage.setItem('bmi', calculatedBMI)
		}
	}, [height, weight])

	const handleHeightChange = (e) => {
		setHeight(e.target.value)
	}

	const handleWeightChange = (e) => {
		setWeight(e.target.value)
	}

	const clearBMI = () => {
		// BMI sonucunu ve localStorage verilerini temizle
		setHeight(0)
		setWeight(0)
		setBMI(0)
		localStorage.removeItem('bmi')
	}

	return (
		<div>
			<h1>BMI Calculator</h1>
			<div>
				<label>Height (cm):</label>
				<input type="number" value={height} onChange={handleHeightChange} />
			</div>
			<div>
				<label>Weight (kg):</label>
				<input type="number" value={weight} onChange={handleWeightChange} />
			</div>
			{bmi > 0 && (
				<div>
					<h2>Your BMI:</h2>
					<p>{bmi.toFixed(2)}</p>
				</div>
			)}
			<CalculateButton>Calculate BMI</CalculateButton>
			{bmi > 0 && <button onClick={clearBMI}>Clear BMI</button>}
		</div>
	)
}

export default BMICalculator
