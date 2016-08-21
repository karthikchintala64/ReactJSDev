import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{
	constructor(){
		super();
		this.state={name:"Karthik Test"};
	}
	changeName(name){
		this.setState({name});
	}
	render(){
		return(
			<div>
				<Header name={this.state.name} change={this.changeName.bind(this)}/>
				<Footer/>			
			</div>		
			
			);
	}
}