import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<nav>
				<BrowserRouter>
					<Navbar />
				</BrowserRouter>
			</nav>
			<header className='App-header'>
				Hi :)
			</header>
			<footer className='App-footer'>
				Copyright © Riley Conlin 2022
			</footer>
		</div>
	);
}

export default App;
