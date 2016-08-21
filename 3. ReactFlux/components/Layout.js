import React from "react";
import Nav from "./layout/Nav";

export default class Layout extends React.Component{
	render(){
		return(
				<div>
					<Nav location={this.props.location}/>
					<div id="content">
						{this.props.children}
					</div>
				</div>
			);
	}
}