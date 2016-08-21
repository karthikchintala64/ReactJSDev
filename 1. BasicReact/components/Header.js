import React from "react";

import Title from './Header/Title';

export default class Header extends React.Component{
	handleName(e){
		const name=e.target.value;
		this.props.change(name);
	}
	render(){
		return(
			<div>
				<Title name={this.props.name}/>
				<input value={this.props.name} onChange={this.handleName.bind(this)}/>
			</div>
			);
	}
}