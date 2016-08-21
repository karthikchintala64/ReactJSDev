import React from "react";
import {Link} from "react-router";

export default class Nav extends React.Component{
	constructor(){
		super();
	}

	render(){
			const {location}=this.props;
			const homeClass=location.pathname==="/" ? "active" : "";
			const aboutClass=location.pathname.match(/^\/todos/) ? "active" : "";
			const contactClass=location.pathname.match(/^\/settings/) ? "active" : "";

		return(
				<ul class="nav nav-tabs">
					  <li class={homeClass}>
					  	<Link to="" activeClassName="active">Home</Link>
					  </li>
					  <li class={aboutClass}>
					  	<Link to="todos" activeClassName="active">ToDos</Link>
					  </li>
					  <li class={contactClass}>
					  	<Link to="settings" activeClassName="active">Settings</Link>
					  </li>
				</ul>
			);
	}
}