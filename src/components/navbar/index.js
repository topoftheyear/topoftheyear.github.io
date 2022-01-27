import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
} from './NavbarElements';

class Navbar extends React.Component {
	render() {
		return (
			<>
				<Nav>
				<Bars />
			
				<NavMenu>
					<NavLink to='/' activeStyle>
						Home
					</NavLink>
					<NavLink to='/projects' activeStyle>
						Projects
					</NavLink>
					<NavLink to='/games' activeStyle>
						Games
					</NavLink>
				</NavMenu>
				</Nav>
			</>
		);
	}
}
	
export default Navbar;