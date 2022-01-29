import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div className='home'>
				<h2>Hello!</h2>
				<p>
					This is the portfolio of Riley Conlin. Here you can find my various programming projects, both work and personal. 
					You can also find my pertinent contact information at the bottom of the page.
				</p>
				<p>
					I'm an industrious software developer that strives to accomplish my goals, remain flexible, and exceeding standards. 
					I enjoy experimentation, either with existing software and tools or in using new ones.
				</p>
				<p>
					Back at the university, I founded an AI programming competition called <a href='royale.ndacm.org'>Byte-le Royale</a> that
					has been running for several years, initially with my leadership, and now proudly without me at all. This unique experience 
					has stuck with me and it has shaped me into the developer I am today.
				</p>
				<p>
					Please browse my projects at your leisure, and thank you for your time.
				</p>
			</div>
		);
	}
}
	
export default Home;