import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BMICalculator from './components/BMICalculator'
import DietList from './components/DietList'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<BMICalculator />} />
				<Route path="/diet" element={<DietList />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
