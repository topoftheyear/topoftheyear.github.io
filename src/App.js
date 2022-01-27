import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Projects from './pages/projects'
import Games from './pages/games'

function App() {
	return (
		<div className='App'>
			<div className='content'>
				<BrowserRouter>
					<Navbar />
					<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/games' element={<Games />} />
				</Routes>
				</BrowserRouter>
			</div>
			<footer className='App-footer'>
				<div className='links'>
				</div>
				Copyright © Riley Conlin 2022
			</footer>
		</div>
	);
}

export default App;
