import React from "react";

export default class Title extends React.Component{
	render(){
		return(
				<h1>Hello {this.props.name}!</h1>
			);
	}
}