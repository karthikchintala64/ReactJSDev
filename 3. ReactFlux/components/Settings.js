import React from "react";
import * as SettingActions from '../actions/SettingActions';
import SettingStore from '../stores/SettingStore';

export default class Settings extends React.Component{
	constructor(){
		super();
		this.getSettings=this.getSettings.bind(this);
		this.state={
			settings:SettingStore.getAll()
		}
	}
	toggleShowAll(){
		SettingActions.toggleShowAll();
		this.setState({settings:SettingStore.getAll()})
	}
	getSettings(){
		this.setState({settings:SettingStore.getAll()})
	}
	componentWillMount(){
		SettingStore.on("change",this.getSettings);		
	}

	componentWillUnmount(){
		SettingStore.removeListener("change", this.getSettings);
	}

	render(){
		return(
				<div>				
					<label class="switch">
						<input type="checkbox"checked={this.state.settings.showAll}
							   onChange={this.toggleShowAll.bind(this)}/>
						<div class="slider round"></div>						
					</label>
					<div class="slider-text">Show Completed</div>					
				</div>
			);
	}
}