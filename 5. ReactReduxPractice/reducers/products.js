import Immutable from 'Immutable';

function products(state=[], action){
    switch(action.type){
        case 'REMOVE_PRODUCT': 
            return [
                ...state.slice(0,action.i),
                ...state.slice(action.i+1)
            ];
        case 'ADD_PRODUCT': 
            return [
                ...state,
                {'id':10,'name':action.name}
            ];
            // const newState=Immutable.fromJS(state)//.push({'id':10,'name':action.text});
            // return newState.push(new Map<10,'test'>());
        default:
            return state
    }
}

export default products;