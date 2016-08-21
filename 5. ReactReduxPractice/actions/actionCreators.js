export function removeProduct(i){
    return {
        type:'REMOVE_PRODUCT',
        i
    }
}

export function addProduct(name){
    return {
        type:'ADD_PRODUCT',
        name
    }
}