import React from "react";
import ToDo from "./ToDo/ToDo";
import ToDoStore from "../stores/ToDoStore";

import * as ToDoActions from "../actions/ToDoActions";

export default class ToDos extends React.Component{
	constructor(){
		super();
		
		this.state={
			todos: ToDoStore.getAll(),	
		}
		this.getToDos=this.getToDos.bind(this);
	}

	componentWillMount(){
		ToDoStore.on("change",this.getToDos);		
	}

	componentWillUnmount(){
		ToDoStore.removeListener("change", this.getToDos);
	}

	getToDos(){
		this.setState({todos:ToDoStore.getAll()});
	}

	createToDo(){
		if(this.refs.newToDo.value!=""){
			ToDoActions.createToDo(this.refs.newToDo.value);
			this.refs.newToDo.value="";
		}
	}

	render(){
		const todoComp=this.state.todos.map((todo)=>{
			return(
					<ToDo key={todo.id} {...todo}></ToDo>
				);
		})
		return(
				<div>
				<form class="form-inline" role="form" onsubmit="return false;">
				<div class="form-group">
					<input ref="newToDo" class="form-control" placeholder="Add"></input>
					</div>
					<button onClick={this.createToDo.bind(this)}
					class="btn btn-success">Add</button>
				</form> 
				<div class="todoList">
					{todoComp}
				</div>
				</div>
		);
	}
}