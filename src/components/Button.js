import React from "react";

class Button extends React.Component {
	render() {
		var color = '#eeeeee';
		if (this.props.text === this.props.active){
			color = '#00adB5';
		}
		
		return(
			<div className='button' style={{color: color}}>
				{this.props.text}
			</div>
		);
	}
}

export default Button;