import { EventEmitter } from "events";

import  dispatcher  from '../dispatcher';

class ToDoStore extends EventEmitter{
	constructor(){
		super();
		this.todos=[
			{
				id:1,
				text:"Karthik",
				completed:false
			},
			{
				id:2,
				text:"Feroz",
				completed:true
			},
			{
				id:3,
				text:"Shoaib",
				completed:false
			}
		];
	}

	getAll(){
		return this.todos;
	}

	createToDo(text){
		this.todos.push({
			id:Date.now(),
			text,
			completed:false
		});
		this.emit("change");
	}
	getIndex(value, arr, prop) {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i][prop] === value) {
				return i;
			}
		}
		return -1; //to handle the case where the value doesn't exist
	}

	toggleStatus(id){
		const index=this.getIndex(id,this.todos,"id");
		if(index>-1){
			this.todos[index].completed=!this.todos[index].completed;
			this.emit("change");
		}
	}

	handleActions(action){
		switch(action.type){
			case "CREATE_TODO":{
				this.createToDo(action.text)
			}
			case "TOGGLE_STATUS":{
				this.toggleStatus(action.id)	
			}
		}
	}
}

const todoStore = new ToDoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;