import React from "react";
import * as ToDoActions from "../../actions/ToDoActions";
import SettingStore from '../../stores/SettingStore';

export default class ToDo extends React.Component{
	constructor(){
		super();
		this.state={
			settings:SettingStore.getAll()
		}
	}
	toggleStatus(e){
			const completed=!e.target.checked;
			ToDoActions.toggleStatus(this.props.id);
		}
	
	render(){	
		return(
				<div key={this.props.key} class={this.props.completed && !this.state.settings.showAll? 'hidden' :''}>
					<label class="switch">
						<input type="checkbox" 
							   checked={this.props.completed} 
							   onChange={this.toggleStatus.bind(this)}/>
						<div class="slider round"></div>						
					</label>
					<div class="slider-text">{this.props.text}</div>
				</div>
			);
	}
}