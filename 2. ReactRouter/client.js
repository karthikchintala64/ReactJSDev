import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

import Layout from "./components/Layout";

const app=document.getElementById('app');
ReactDOM.render(
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path="home" component={Home}></Route>
				<Route path="about" component={About}></Route>
				<Route path="contact" component={Contact}></Route>
			</Route>
		</Router>
	,app);