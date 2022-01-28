import React from 'react';

class Games extends React.Component {
	render() {
		return (
			<div className='games'>
				<h2>Slayer's Inc. (2021)</h2>
				<div className='project'>
					<iframe
						title='si-embed'
						src='https://cdn.cloudflare.steamstatic.com/steam/apps/256852715/movie480_vp9.webm?t=1632510108'
						height={window.innerHeight / 4}
						width={window.innerWidth / 4}
					></iframe>
					<ul>
						<li>Engine: GameMaker 1.4</li>
						<li>Role: Background systems developer, game designer, composer</li>
						<li>Dev Time: 2 years</li>
						<li>Made for Woogedy Games</li>
					</ul>
					Slayer's Inc. content <a href='https://store.steampowered.com/app/1570680/Slayers_Inc/'>link</a>
				</div>
				
				<h2>Egregious Racing 1992 (2021)</h2>
				<div className='project'>
					<ul>
						<li>Engine: Pygame</li>
						<li>Role: Sole developer</li>
						<li>Dev Time: 2 months</li>
						<li>Made for fun</li>
					</ul>
					<p>
						The source code for the project is available <a href='https://github.com/topoftheyear/EgregiousRacing1992'>here</a>, 
						and the latest release is available <a href='https://github.com/topoftheyear/EgregiousRacing1992/releases/latest'>here</a>.
					</p>
				</div>
				
				<h2>Disaster Dispatcher (2020)</h2>
				<div className='project'>
					<ul>
						<li>Engine: Custom</li>
						<li>Role: Lead developer, architect, game designer</li>
						<li>Dev Time: 1 year</li>
						<li>Made for the <a href='https://ndacm.org/'>NDSU ACM Non-Profit Organization</a></li>
					</ul>
					<p>
						Disaster Dispatcher is a city-management simulator. As the last game I made for the <a href='https://royale.ndacm.org/'>Byte-le Royale 
						programming competition</a>, players control the game by coding an AI and competing against other players 
						for the highest score.
					</p>
					<p>
						The player is put in charge of a city that has an unfortunate propensity to being attacked by natural 
						disasters. It is their job to properly allocate the population towards city repairs, upgrades, and 
						building construction. As city leader, the player also gets access to the weather forcast and has to 
						predict what disaster will come next. Using this knowledge, they can enact an edict to mitigate the 
						damage. When there isn't any population remaining, the final score is the total number of turns survived.
					</p>
					<p>
						A custom-made engine was used to ensure security, compatibility, and specific functionality.
						The front-end visualization is done in Cocos2d, Python version.
					</p>
					<p>
						The source code for the project is available <a href='https://github.com/PixPanz/byte_le_royale_2020'>here</a>.
					</p>
				</div>
				
				<h2>Dungeon Delvers (2018)</h2>
				<div className='project'>
					<iframe
						title='dd-twitch'
						src='https://player.twitch.tv/?video=v367090933&parent=topoftheyear.github.io&autoplay=false'
						height={window.innerHeight / 4}
						width={window.innerWidth / 4}
					></iframe>
					<ul>
						<li>Engine: Custom</li>
						<li>Role: Developer, game designer, artist</li>
						<li>Dev Time: 1 year</li>
						<li>Made for the <a href='https://ndacm.org/'>NDSU ACM Non-Profit Organization</a></li>
					</ul>
					<p>
						Dungeon Delvers is a turn-based exploration RPG. As the first game made for the <a href='https://royale.ndacm.org/'>Byte-le Royale 
						programming competition</a>, players control the game by coding an AI and competing against other players for the highest 
						score.
					</p>
					<p>
						The player gets to assemble a team of 4 characters from 8 different classes, each with their own
						strengths, weaknesses, and abilities. The team will then explore increasingly intense randomly-generated 
						dungeons full of monsters and traps with limited choice in picking what comes next. Slaying monsters 
						is deadly but provides a trophy and gold. Solving traps is safer but gives no prize. Survive long enough 
						and the team will get fully restored at the next town, where they can buy upgrades and supplies for 
						the next outing. The game ends when the team gets wiped, the final score is the total number of trophies 
						earned.
					</p>
					<p>
						A custom-made engine was used to ensure security, compatibility, and specific functionality.
						The front-end visualization is done in Pygame.
					</p>
					<p>
						The source code for the project is available <a href='https://github.com/jghibiki/Byte-le-Royale-2018'>here</a>.
					</p>
				</div>
			</div>
		);
	}
}
	
export default Games;