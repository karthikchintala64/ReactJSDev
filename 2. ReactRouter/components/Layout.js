import React from "react";
import Nav from "./layout/Nav";

export default class Layout extends React.Component{
	render(){
		return(
				<div>
					<Nav location={this.props.location}/>
					<h1>Welcome, Karthik!</h1>
					<div class="container" id="content">
						{this.props.children}
					</div>
				</div>
			);
	}
}