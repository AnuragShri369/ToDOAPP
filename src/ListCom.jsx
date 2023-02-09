import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

export const ListCom = (props) =>{

    const [line, setLine] = useState(false);

    const cutIt = () =>{
        setLine(true);
     
    };
    return (
     <div cclassName="todo_list">
        <span onClick={cutIt}>
         <DeleteIcon claasName="delete icon" /> 
        </span>
    
     <li style={{textDecoration :line ? 'lin-through' : "none"}}> {props.text} </li>;
     </div>);

};

export default ListCom;