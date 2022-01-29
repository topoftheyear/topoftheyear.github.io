import React from 'react';

import algredpng from '../content/algred.png'

class Projects extends React.Component {
	render() {
		var emWidth = window.innerWidth / 3;
		var emHeight = emWidth / 16 * 9;
		
		return (
			<div className='projects'>
				<h2>Algorithmic Redistricting (2022)</h2>
				<div className='project'>
					<img 
						src={algredpng} 
						alt='algred-img'
						height={emHeight}
						width={emWidth}
					/>
					<ul>
						<li>Systems: Python, Matplotlib, Numpy, Pandas, React</li>
						<li>Role: Sole developer</li>
						<li>Dev Time: 1 month</li>
						<li>Made for fun</li>
					</ul>
					<p>
						This is a project where I attempted to create U.S. House districts based on Census data. I managed to find 
						a file that contained each zip code in the U.S., its population, state, and coordinates, so I decided to 
						do something with it.
					</p>
					<p>
						The initial algorithm I used was basic weighted K-Means clustering. This adequately segmented the population 
						into districts, but they were of radically different population sizes as K-Means cares more about distance 
						than even distribution. As a result, I modified the algorithm to operate "backwards". Rather than each 
						zip code assigning itself to the nearest district, each district would claim the nearest unclaimed zip code. 
						This allowed me to keep track of each district's population and prevent it from claiming more than its 
						approximate share.
					</p>
					<p>
						The project has a website that can be found <a href='https://topoftheyear.github.io/Algorithmic-Redistricting/'>here</a>. 
						The source code is available <a href='https://github.com/topoftheyear/Algorithmic-Redistricting'>here</a>.
					</p>
				</div>
				
				<h2>Byte-le Royale (2017-2020)</h2>
				<div className='project'>
					<ul>
						<li>Systems: Python, MongoDB, Sphinx</li>
						<li>Role: Founder, developer, designer, architect</li>
						<li>Dev Time: 3 years</li>
						<li>Made for the <a href='https://ndacm.org/'>NDSU ACM Non-Profit Organization</a></li>
					</ul>
					<p>
						Byte-le Royale is an annual programming competition where teams attempt to build an AI to play a 
						specially constructed game. It is a student-led, developed, and administered event intended to 
						provide a unique experience for attending university students while raising the standing of the 
						NDSU ACM and NDSU computer science department as a whole.
					</p>
					<p>
						There are several systems that are developed each year. Included in this number is the game, visualizer, 
						and scrimmage server, of which I have worked on each thoughout my time. The game is as it sounds, but 
						it is intentionally developed separately from any visual playback, called the visualizer, intentionally, 
						because it allows for quick mass running of games without worrying about human feedback. This is useful 
						in judging. It also allows the visualizer to be made in any game engine that can read JSON and be easily deployed. 
						The visualizer plays logs created by the game and is meant to be the face of the game, even 
						if it doesn't perform any meaningful logic. It is very important in serving as visual feedback for the 
						team's AI, and of course, for making it fun. The scrimmage server acts as a means for teams to register, 
						submit their code, and have games run for them en masse. It also has the judging script built in. Each 
						year is also served with online documentation for competitors to use to their pleasure.
					</p>
					<p>
						My most prominent act during my Byte-le years was as developer of the modern engine, simply called the 
						Byte Engine. It acts as the framework for all Byte-le games current and future. It satisfies the goals 
						of being easy to learn and build on, being as complete and fully-functional as possible, allowing both 
						young and older developers to make meaningful contributions, and being generic enough to allow multiple 
						game types and styles. It also satisfies some non-functional conditions, the most important being that 
						it's both reasonably secured and fast. To date, it is the most complex and feature complete software I 
						have written. As such, I wrote approximately 70 pages of accompanying documentation, complete with examples.
					</p>
					<p>
						Byte-le Royale has a website available <a href='https://royale.ndacm.org/'>here</a>.
						The source code for the current engine I wrote can be found <a href='https://github.com/acm-ndsu/byte_le_engine'>here</a>.
					</p>
				</div>
				
				<h2>YouTube Network Graph (2019)</h2>
				<div className='project'>
					<ul>
						<li>Systems: Python, YouTube API, Matplotlib, Numpy, Scikit</li>
						<li>Role: Developer</li>
						<li>Dev Time: 2 months</li>
						<li>Made for optional NDSU course: CSCI 479 Data Mining </li>
					</ul>
					<p>
						In this project, I created a one-directional node graph of YouTube channels based on how channel owners 
						manually linked others on their pages' side bar. Using the official YouTube API, it browses through each 
						connected channel and recursively checks each of those connected channels. Due to API limits, a 
						restricted number of channels could be checked per day. A total of roughly 10,000 channels were 
						checked over the course of a month. Third-party software was used to browse the total node graph.
					</p>
					<p>
						Using the data retrieved, I performed some linear regression on the known variables, including inbound 
						connections, outbound connections, subscribers, view count, and video count. Ultimately, there was 
						no strong correlation found between traditional channel metrics like subscribers and views to either 
						inbound or outbound node graph connections.
					</p>
					<p>
						The project's source code can be found <a href='https://github.com/topoftheyear/YT-Network-Graph'>here</a>.
					</p>
				</div>
				
				<h2>Snowflake Classification (2019)</h2>
				<div className='project'>
					<ul>
						<li>Systems: Python, Tensorflow, Numpy</li>
						<li>Role: Sole developer</li>
						<li>Dev Time: 1 year</li>
						<li>Made for Dr. Anne Denton, NDSU Computer Science Department</li>
					</ul>
					<p>
						This project was to create a convolutional neural network (CNN) that is capable of classifying 
						snowflakes into their respective categories. The primary challenge of this work was adequately dealing 
						with the dataset.
					</p>
					<p>
						The dataset provides the snowflake images as subimages of a greater sheet image. The subimages are 
						all of varying sizes, some images being as small as 40x40, requiring modification to allow the neural 
						network to read them. This was accomplished by using Spacial Pyramid Pooling, a process that reads 
						any image of an arbitrary size and converts it to a fixed-length representation by reading the image 
						several times in a defined pyramid pattern.
					</p>
					<p>
						A research paper was written and conference published at the 2019 Midwest Instruction and Computing 
						Symposium, where I gave a talk on it and its results. By time of paper writing, the CNN had an 
						accuracy of 47%, which is pretty good given the conditions. In the months following, I did post-
						paper work and bumped the accuracy up to about 58%.
					</p>
					<p>
						Source code can be found <a href='https://github.com/topoftheyear/snowflake-classification'>here</a>.
						Full paper available on the <a href='https://www.micsymposium.org/mics2019/wp-content/uploads/2019/05/Deep_Network_Ice_Crystal_Paper.pdf'>MICS 2019</a> official website.
					</p>
				</div>
			</div>
		);
	}
}
	
export default Projects;