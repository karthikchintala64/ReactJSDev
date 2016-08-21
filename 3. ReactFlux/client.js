import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

import Settings from "./components/Settings";
import ToDos from "./components/ToDos";
import Home from "./components/Home";

import Layout from "./components/Layout";

const app=document.getElementById('app');

ReactDOM.render(
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path="home" component={Home}></Route>
				<Route path="todos" component={ToDos}></Route>
				<Route path="settings" component={Settings} showAll="false"></Route>
			</Route>
		</Router>
	,app);