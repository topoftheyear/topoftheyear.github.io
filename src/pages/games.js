import React from 'react';

import tmcngif from '../content/tmcn.gif';
import ee1992gif from '../content/ee1992.gif';
import disdisvid from '../content/disdis.mp4';
import mspng from '../content/marketspace.png';
import titanpng from '../content/titan.png';

class Games extends React.Component {
	render() {
		var emWidth = window.innerWidth / 4;
		var emHeight = emWidth / 16 * 9;
		
		return (
			<div className='games'>
				<h2>Ongoing Work</h2>
					<p>
						I've continued to hone my skills in various areas of development as unannounced projects advance. I've managed to
						gain deeper knowledge of specific systems while also getting more general knowledge that can be transferred
						between languages and engines.
					</p>
					<ul>
						<li>4 years Godot experience</li>
						<li>AI Behavior trees</li>
						<li>Procedural generation</li>
						<li>State machines</li>
						<li>Proper architecture and design with game programming patterns</li>
					</ul>
				
				<h2>Golgalian (2025)</h2>
					<ul>
						<li>Engine: Godot 4</li>
						<li>Role: Programmer, designer</li>
					</ul>
					<p>
						Golgalian is an endless micro shoot 'em up. The player controls the tank Golgalian through an endless level
						fighting off tactically designed formations of mechs and drones capped off by a boss fight. It is self-published
						on Steam.
					</p>
					My Work:
					<ul>
						<li>State machine controller for the player</li>
						<li>AI behavior trees</li>
						<li>Google firebase integration for the leaderboard</li>
						<li>Music and SFX</li>
					</ul>
					<p>
						Golgalian is available on <a href='https://store.steampowered.com/app/3593430/Golgalian/'>Steam</a>.
					</p>

				<h2>TITAN: Terraforming Initiative for Titan's Autonomous Nexus (2025)</h2>
					<img
						src={titanpng}
						alt='titan-png'
						height={emHeight}
						width={emWidth}
					/>
					<ul>
						<li>Engine: Godot 4</li>
						<li>Role: Programmer, designer</li>
						<li>Made for the <a href='https://itch.io/jam/bigmode-game-jam-2025'>Bigmode Game Jam 2025</a></li>
					</ul>
					<p>
						TITAN is a city builder developed in 10 days for the Bigmode Game Jam 2025 where it placed in the top
						25% out of 800 submissions. The player builds a colony on Titan with the goal of maximizing energy production, 
						requiring balanced resource gathering and population management.
					</p>
					My Work:
					<ul>
						<li>Road system for employment</li>
						<li>Dynamic power grids</li>
						<li>It's an entire city builder made in 10 days</li>
						<li>Optimization</li>
						<li>Music and SFX</li>
					</ul>
					<p>
						TITAN is available for free on <a href='https://topoftheyear.itch.io/titan'>itch.io</a>.
					</p>

				<h2>Transmogrification (2023)</h2>
					<img 
						src={tmcngif} 
						alt='tmcn-gif'
						height={emHeight}
						width={emWidth}
					/>
					<ul>
						<li>Engine: Godot 4</li>
						<li>Role: (Almost) sole developer</li>
						<li>Made for the <a href='https://itch.io/jam/bigmode-2023'>Bigmode Game Jam 2023</a></li>
					</ul>
					<p>
						Transmogrification is a top down action game developed in 10 days for the Bigmode Game Jam 2023 where it placed in the
						top 33% out of 500 submissions. The player controls a wizard in a 1v1 duel against an AI-controlled wizard using 
						only transmogrification; a school of magic that changes states a target's mode of being.
					</p>
					My Work:
					<ul>
						<li>Implemented state machine for player control</li>
						<li>Create AI behavior tree for AI control</li>
						<li>UI implementation</li>
						<li>Music and SFX</li>
					</ul>
					<p>
						Transmogrification is available on <a href='https://topoftheyear.itch.io/transmogrification'>itch.io</a>.
					</p>
				
				<h2>Slayers, Inc. (2021)</h2>
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
						<li>Made for Woogedy Games</li>
					</ul>
					<p>
						Slayers, Inc. is a roguelike twin-stick shooter. The player fights off hordes of enemies in randomly assorted 
						levels to obtain items and Artifacts, ultimately fighting a boss to proceed onward. It is self-published on Steam and 
						itch.io.
					</p>
					My Work:
					<ul>
						<li>Designs for emergent gameplay, including Artifacts system</li>
						<li>Auxilliary systems from realistic liquid behavior to fish</li>
						<li>Music and SFX</li>
					</ul>
					<p>
						Slayers, Inc. is available on <a href='https://store.steampowered.com/app/1570680/Slayers_Inc/'>Steam</a> and <a href='https://woogedygames.itch.io/slayers-inc'>itch.io</a>.
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
						<li>Engine: Pygame (Python, C++)</li>
						<li>Role: Sole developer</li>
						<li>Made for fun</li>
					</ul>
					<p>
						Egregious Racing 1992 is an experimental arcade racing game. The player drives around an open map collecting 
						coins and making ramps to get as many points as possible within the time limit.
					</p>
					My Work:
					<ul>
						<li>Recreated and optimized Voxel Space engine for use in Python</li>
						<li>Fundamental player implementation</li>
						<li>Passable driving physics</li>
						<li>UI elements</li>
					</ul>
					<p>
						The source code for the project is available <a href='https://github.com/topoftheyear/EgregiousRacing1992'>here</a>,
						and can be downloaded from <a href="https://topoftheyear.itch.io/egregious-racing-1992">itch.io</a>.
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
						<li>Made for the <a href='https://ndacm.org/'>NDSU ACM Non-Profit Organization</a></li>
					</ul>
					<p>
						Disaster Dispatcher is a city-management simulator. As the last game I made for the <a href='https://royale.ndacm.org/'>Byte-le Royale 
						programming competition</a>, players control the game by coding an AI and competing against other players 
						for the highest score. The player allocations the population towards city repairs, upgrades, and contruction
						while trying to predict what disaster will come next.
					</p>
					My Work:
					<ul>
						<li>Built custom engine to for it and future Byte-le projects (still in use today)</li>
						<li>Server for team registration, code submission, and auto-running team's code through the game</li>
						<li>Developed skeleton for the Cocos2d frontend the game is visually displayed in</li>
						<li>Gameplay design, disaster generation and strength algorithm comparable to compound interest</li>
					</ul>
					<p>
						The source code for the project is available <a href='https://github.com/PixPanz/byte_le_royale_2020'>here</a>.
					</p>
				</div>
				
				<h2>Marketspace (2019)</h2>
				<div className='project'>
					<img 
						src={mspng} 
						alt='marketspace-png'
						height={emHeight}
						width={emWidth}
					/>
					<ul>
						<li>Engine: Custom</li>
						<li>Role: Developer, game designer</li>
						<li>Made for the <a href='https://ndacm.org/'>NDSU ACM Non-Profit Organization</a></li>
					</ul>
					<p>
						Marketspace is an open-world space sim. As the second game made for the <a href='https://royale.ndacm.org/'>Byte-le Royale 
						programming competition</a>, players control the game by coding an AI and competing against other players for the highest 
						score. The player controls a ship in open space and are left to generate as much money as possible within the time limit.
					</p>
					My Work:
					<ul>
						<li>Designed and balanced functioning economy including consumption and production of resources</li>
						<li>Created several types of AI to keep economy running and for players to act on</li>
					</ul>
					<p>
						The source code for the project is available <a href='https://github.com/topoftheyear/Byte-le-Royale-2019'>here</a>.
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
						<li>Made for the <a href='https://ndacm.org/'>NDSU ACM Non-Profit Organization</a></li>
					</ul>
					<p>
						Dungeon Delvers is a turn-based exploration RPG. As the first game made for the <a href='https://royale.ndacm.org/'>Byte-le Royale 
						programming competition</a>, players control the game by coding an AI and competing against other players for the highest 
						score. The player gets to assemble a team of character to explore a randomly-generated dungeon of monsters
						and traps, then command each character individually to use their respective skills.
					</p>
					My Work:
					<ul>
						<li>Dungeon design including layout, traps, monster types and behavior</li>
						<li>Character and monster art assets</li>
					</ul>
					<p>
						The source code for the project is available <a href='https://github.com/jghibiki/Byte-le-Royale-2018'>here</a>.
					</p>
				</div>
			</div>
		);
	}
}
	
export default Games;