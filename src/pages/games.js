import React from 'react';

import ee1992gif from '../content/ee1992.gif';
import disdisvid from '../content/disdis.mp4';

class Games extends React.Component {
	render() {
		var emWidth = window.innerWidth / 4;
		var emHeight = emWidth / 16 * 9;
		
		return (
			<div className='games'>
				<h2>Slayer's Inc. (2021)</h2>
				<div className='project'>
					<video
						muted
						controls
						title='si-video'
						src='https://cdn.cloudflare.steamstatic.com/steam/apps/256852715/movie480_vp9.webm?t=1632510108'
						height={emHeight}
						width={emWidth}
					/>
					<ul>
						<li>Engine: GameMaker 1.4</li>
						<li>Role: Background systems developer, game designer, composer</li>
						<li>Dev Time: 2 years</li>
						<li>Made for Woogedy Games</li>
					</ul>
					<p>
						Slayer's Inc. is a roguelike twin-stick shooter. The player fights off hordes of enemies in randomly assorted 
						levels, ultimately fighting a boss to proceed onward. It is self-published on Steam and itch.io.
					</p>
					<p>
						The game has various systems that distinguish it from the crowd. Primary, this includes Artifacts. These are 
						designed to change how a player's shot behaves, including how it travels, how it reacts when striking, and what 
						it leaves on foes it strikes. This creates a mix-and-match system allowing for plenty of experimentation. 
						Combined with the basic items, I believe it leads to plenty of emergent gameplay, and I enjoy hearing from 
						players that share their runs with different combinations.
					</p>
					<p>
						I also created some auxillary systems that help the game feel alive. An example is the liquid system, which 
						attempts to simulate a liquid settling into puddles from a top-down perspective. There are numerous liquids that 
						interact with each other as well as with other elements as traditionally expected: oil will slow the entities 
						inside it, fire is capable of lighting oil ablaze, oil on fire will dissipate faster, entities in burning oil 
						are both slowed and lit on fire themselves, entities on fire can light other oil. This system allowed for making 
						certain enemies more interesting as well. One boss was given 2 attacks: one that creates oil on the ground, and 
						another that launches a fireball that could light it up.
					</p>
					<p>
						Slayer's Inc. is available on <a href='https://store.steampowered.com/app/1570680/Slayers_Inc/'>Steam</a> and <a href='https://woogedygames.itch.io/slayers-inc'>itch.io</a>.
					</p>
				</div>
				
				<h2>Egregious Racing 1992 (2021)</h2>
				<div className='project'>
					<img 
						src={ee1992gif} 
						alt='ee-gif'
						height={emHeight}
						width={emWidth}
					/>
					<ul>
						<li>Engine: Pygame</li>
						<li>Role: Sole developer</li>
						<li>Dev Time: 2 months</li>
						<li>Made for fun</li>
					</ul>
					<p>
						Egregious Racing 1992 is an experimental arcade racing game. The player drives around an open map collecting 
						coins and making ramps to get as many points as possible within the time limit.
					</p>
					<p>
						One day I came across the old <a href='https://en.wikipedia.org/wiki/Voxel_Space'>Voxel Space engine</a>. It 
						was a revolutionary 3D engine back in 1992 that was primarily used for flight sims. I was particularly 
						interested in how simplistic the rendering algorithm is. It was stuck in my head until I decided to implement 
						it myself in Python in about a day or so. I then spent the next month optimizing it to make it actually functional. 
						Initial implementation ran at 0.4 FPS, but could run at 30+ FPS after intense optimizations.
					</p>
					<p>
						I now had a working engine and could successfully render and fly around in maps, but I wanted to do something 
						with it that it wasn't designed for just to really push its limits. I decided then to make a third person driving 
						game because the ground was never really supposed to be interacted with. After implementing some physics, this is 
						the end result.
					</p>
					<p>
						The source code for the project is available <a href='https://github.com/topoftheyear/EgregiousRacing1992'>here</a>, 
						and the latest release is available <a href='https://github.com/topoftheyear/EgregiousRacing1992/releases/latest'>here</a>.
					</p>
				</div>
				
				<h2>Disaster Dispatcher (2020)</h2>
				<div className='project'>
					<video
						muted
						controls
						title='dd-video'
						src={disdisvid}
						height={emHeight}
						width={emWidth}
					/>
					<ul>
						<li>Engine: Custom</li>
						<li>Role: Lead developer, architect, game designer</li>
						<li>Dev Time: 1 year</li>
						<li>Made for the <a href='https://ndacm.org/'>NDSU ACM Non-Profit Organization</a></li>
					</ul>
					<p>
						Disaster Dispatcher is a city-management simulator. As the last game I made for the <a href='https://royale.ndacm.org/'>Byte-le Royale 
						programming competition</a>, players control the game by coding an AI and competing against other players 
						for the highest score. The player is the mayor of a city that is under constant barrage of natural disasters.
						They get to allocate the population towards city repairs, upgrades, and building construction, while 
						trying to predict what disaster will come next.
					</p>
					<p>
						On this project, I led development with several core systems, including development of a new engine 
						(see Byte-le Royale on the Projects page), visualizer structure, and the disaster and forecast 
						generation system. On the latter, disasters had to be generated to create an increasingly hostile 
						world in a fair way. Furthermore, the odds that each disaster is going to happen on a given turn needed 
						to be adequately obfuscated while still being predictable. This was accomplished by having upgradable 
						sensors that obfuscate the real odds by decreasing amounts, with the real odds being an algorithm 
						similar to compound interest that is based around distance from the next disaster.
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
						height={emHeight}
						width={emWidth}
					/>
					<ul>
						<li>Engine: Custom</li>
						<li>Role: Developer, game designer, artist</li>
						<li>Dev Time: 1 year</li>
						<li>Made for the <a href='https://ndacm.org/'>NDSU ACM Non-Profit Organization</a></li>
					</ul>
					<p>
						Dungeon Delvers is a turn-based exploration RPG. As the first game made for the <a href='https://royale.ndacm.org/'>Byte-le Royale 
						programming competition</a>, players control the game by coding an AI and competing against other players for the highest 
						score. The player gets to assemble a team of character to explore a randomly-generated dungeon of monsters
						and traps, then command each character individually to use their respective skills.
					</p>
					<p>
						During this project, I designed some gameplay systems, most important being the dungeon generation. 
						During initial design, the team wanted to capture open exploration but not burden players with 
						pathfinding, nor provide it for them. This was achieved by creating a linear group of rooms that 
						constantly branch then immediately reconverge. Players also got to take a peek inside the next 
						rooms to allow them to choose what they wanted to face when applicable. This gave all teams 
						a similar experience while allowing their strategies to diverge.
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