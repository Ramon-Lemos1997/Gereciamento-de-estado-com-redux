import Item from "../components/Item";


export function addItem(text){
    const item= new Item(text)
    return{ type:'ADD_ITEM', payload: item}
}

export function deleteItem(id){
    return { type:'DELETE_ITEM', payload: id}
}
