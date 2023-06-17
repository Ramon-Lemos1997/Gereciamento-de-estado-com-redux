import React from "react"
import ListItem from './ListItem'
import { useSelector } from "react-redux"

function List (){
    const items= useSelector(state=> state)
   
    return(<ul>
            {items.map(item =>
            <ListItem key={item.id} item={item} ></ListItem>)}
                
        </ul>)
    }

export default List