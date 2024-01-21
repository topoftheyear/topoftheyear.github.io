import React from 'react';
import { SocialIcon } from 'react-social-icons';

import './App.css';
import Home from './pages/home'
import Projects from './pages/projects'
import Games from './pages/games'
import Button from './components/Button'


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			page: 'Home',
		};
	}

	changePage(text){
		this.setState({
			page: text,
		});
	}
	
	render() {
		var display = <Home />

		if (this.state.page === 'Home') {
			display = <Home />
		} else if (this.state.page === 'Projects') {
			display = <Projects />
		} else if (this.state.page === 'Games') {
			display = <Games />
		}

		var user = '345rconlin543';
		var domain = '@gmail.com';

		document.title = 'RC Portfolio'

		return (
			<div className='App'>
				<header>
					<div className='nav' onClick={() => this.changePage('Home')} style={{cursor: 'pointer'}}>
						<Button text='Home' active={this.state.page}/>
					</div>
					<div className='nav' onClick={() => this.changePage('Projects')} style={{cursor: 'pointer'}}>
						<Button text='Projects' active={this.state.page}/>
					</div>
					<div className='nav' onClick={() => this.changePage('Games')} style={{cursor: 'pointer'}}>
						<Button text='Games' active={this.state.page}/>
					</div>
				</header>
				<div className='content'>
					{display}
				</div>
				<footer className='App-footer'>
					<div className='socials'>
						<SocialIcon url='https://github.com/topoftheyear' />
						<SocialIcon url='https://www.linkedin.com/in/riley-conlin-17959b194/' />
						<SocialIcon url={'mailto:' + user + domain} />
					</div>
					<p>
						Copyright © Riley Conlin 2024
					</p>
				</footer>
			</div>
		);
	}
}

export default App;
