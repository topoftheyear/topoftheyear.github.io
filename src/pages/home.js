import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div className='home'>
				<h2>Hello!</h2>
				<p>
					This is the portfolio of Riley Conlin. I have a Bachelor of Science degree in Computer Science from North Dakota State University. I graduated in 2019.
				</p>
				<p>
					Here you can find my various programming projects, both work and personal.
					You can also find my pertinent contact information at the bottom of the page.
				</p>
				<p>
					I'm a software developer who strives to accomplish goals, remain flexible, and exceed standards. 
					I enjoy experimentation, either with existing software and tools or in using new ones.
					As a result I pick things up quickly, so I've never been stopped by not knowing a concept or technology going in.
				</p>
				<p>
					Back at NDSU, I founded an AI programming competition called <a href='https://royale.ndacm.org'>Byte-le Royale</a> that
					has been running since 2018, initially with my leadership, and now proudly without me at all. This unique experience 
					has stuck with me and it has helped shape me into the developer I am today. Post-graduation, I have worked with a team, solo, and for Woogedy Games.
				</p>
				<p>
					Please browse my projects at your leisure and thank you for your time.
				</p>
			</div>
		);
	}
}
	
export default Home;