import dispatcher from '../dispatcher';

export function toggleShowAll(){
    dispatcher.dispatch({
        type:"TOGGLE_SHOWALL"
    })
}