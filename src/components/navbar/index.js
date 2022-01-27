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
			<Nav>
				<Bars />
		
				<NavMenu>
					<NavLink to='/'>
						Home
					</NavLink>
					<NavLink to='/projects'>
						Projects
					</NavLink>
					<NavLink to='/games'>
						Games
					</NavLink>
				</NavMenu>
			</Nav>
		);
	}
}
	
export default Navbar;