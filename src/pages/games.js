import React from 'react';

import tmcngif from '../content/tmcn.gif';
import ee1992gif from '../content/ee1992.gif';
import disdisvid from '../content/disdis.mp4';
import mspng from '../content/marketspace.png';

class Games extends React.Component {
	render() {
		var emWidth = window.innerWidth / 3;
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
						<li>AI Behavior trees</li>
						<li>Procedural generation</li>
						<li>State machines</li>
						<li>Simple shaders</li>
						<li>3 years Godot experience</li>
						<li>Proper architecture and design with game programming patterns</li>
					</ul>
				<h2>Transmogrification (2023)</h2>
					<img 
						src={tmcngif} 
						alt='tmcn-gif'
						height={emHeight}
						width={emWidth}
					/>
					<ul>
						<li>Engine: Godot 4</li>
						<li>Role: Near sole developer</li>
						<li>Dev Time: 10 days</li>
						<li>Made for the <a href='https://itch.io/jam/bigmode-2023'>Bigmode Game Jam 2023</a></li>
					</ul>
					<p>
						Transmogrification is a top down action game developed in 10 days for the Bigmode Game Jam 2023 where it placed in the
						top 33% out of 500 submissions. The player controls a wizard in a 1v1 duel against an AI-controlled wizard using 
						only transmogrification; a school of magic that changes states a target's mode of being. The player can apply 
						various modes to themselves or their opponent, creating a variety of effects along way, in order to conquer the 
						opponent.
					</p>
					My Work:
					<ul>
						<li>Implemented state machine for player control</li>
						<li>Create AI behavior tree for AI control</li>
						<li>Most all art assets (a friend did the animations)</li>
						<li>UI implementation</li>
						<li>Shader implementation</li>
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
						<li>Dev Time: 2 years</li>
						<li>Made for Woogedy Games</li>
					</ul>
					<p>
						Slayers, Inc. is a roguelike twin-stick shooter. The player fights off hordes of enemies in randomly assorted 
						levels to obtain items and Artifacts, ultimately fighting a boss to proceed onward. The player can modify their 
						projectile behavior through a system called Artifacts which combine with each other, such as bouncing triple shot 
						fire bullets, or rocket-powered thunder bullets that spawn more bullets on hit. It is self-published on Steam and 
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
						<li>Dev Time: 2 months</li>
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
						<li>Dev Time: 1 year</li>
						<li>Made for the <a href='https://ndacm.org/'>NDSU ACM Non-Profit Organization</a></li>
					</ul>
					<p>
						Marketspace is an open-world space sim. As the second game made for the <a href='https://royale.ndacm.org/'>Byte-le Royale 
						programming competition</a>, players control the game by coding an AI and competing against other players for the highest 
						score. The player controls a ship in open space and are left to generate as much money as possible within the time limit.
						All players act simultaneously in the same match with some AI ships. Players can mine resources, trade goods between stations,
						destroy other ships, and collect bounties on pirates while upgrading their systems in ways to suit their playstyle.
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
						<li>Dev Time: 1 year</li>
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