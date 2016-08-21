import React from "react";
import {Link} from "react-router";

export default class Nav extends React.Component{
	constructor(){
		super();
	}

	render(){
			const {location}=this.props;
			const homeClass=location.pathname==="/" ? "active" : "";
			const aboutClass=location.pathname.match(/^\/about/) ? "active" : "";
			const contactClass=location.pathname.match(/^\/contact/) ? "active" : "";

		return(
				<ul class="nav nav-tabs">				
					  <li class={homeClass}>
					  	<Link to="" activeClassName="active">Home</Link>
					  </li>
					  <li class={aboutClass}>
					  	<Link to="about" activeClassName="active">About</Link>
					  </li>
					  <li class={contactClass}>
					  	<Link to="contact" activeClassName="active">Contact</Link>
					  </li>
				</ul>
			);
	}
}