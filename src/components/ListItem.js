import React from "react"
import { useDispatch } from "react-redux"
import { deleteItem } from "../actions/listAction"


function List (props){
    const dispatch= useDispatch()
    return(
        <li>{props.item.text}
        <button onClick={()=>
        {dispatch(deleteItem(props.item.id))}}>x</button></li>)}
        
export default List