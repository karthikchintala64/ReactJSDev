import dispatcher from '../dispatcher';

export function createToDo(text){
    dispatcher.dispatch({
        type:"CREATE_TODO",
        text
    })
} 

export function toggleStatus(id){
    dispatcher.dispatch({
        type:"TOGGLE_STATUS",
        id
    })
}