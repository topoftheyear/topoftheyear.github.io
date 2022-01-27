import React from 'react';

class Games extends React.Component {
	render() {
		return (
			<div className='games'>
				<p>
					<h2>Slayer's Inc. (2021)</h2>
					<ul>
						<li>Engine: GameMaker 1.4</li>
						<li>Role: Background systems developer, game designer, composer</li>
					</ul>
					Slayer's Inc. content <a href='https://store.steampowered.com/app/1570680/Slayers_Inc/'>link</a>
				</p>
				
				<p>
					<h2>Egregious Racing 1992 (2021)</h2>
					<ul>
						<li>Engine: Pygame</li>
						<li>Role: Sole developer</li>
					</ul>
					Egregious Racing 1992 content <a href='https://github.com/topoftheyear/EgregiousRacing1992'>link</a>
				</p>
				
				<p>
					<h2>Disaster Dispatcher (2020)</h2>
					<ul>
						<li>Engine: Custom</li>
						<li>Role: Lead developer, architect, game designer</li>
					</ul>
					Disaster Dispatcher content <a href='https://github.com/PixPanz/byte_le_royale_2020'>link</a>
				</p>
				
				<p>
					<h2>Dungeon Delvers (2018)</h2>
					<ul>
						<li>Engine: Custom</li>
						<li>Role: Developer, game designer, artist</li>
					</ul>
					Dungeon Delvers content <a href='https://github.com/jghibiki/Byte-le-Royale-2018'>link</a>
				</p>
			</div>
		);
	}
}
	
export default Games;