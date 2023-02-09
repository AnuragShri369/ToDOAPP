import react from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ListCom from "./ListCom";
import { useState } from "react";


const ToDoList = () => {
    const [item, setItem] = useState("");
    const [newitem,setNewItem] = useState([]);

    const itemEvent = (event) =>{
        setItem(event.target.value);

    const listOfItems = () =>{
        setNewItem((prevValues)=>{
            return [...prevValues,item];

        })  
    }    


    };
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDoList </h1>
                    <br />
                    <input
                      type="text"
                      value={item}
                      placeholder="Add an Item"  onChange={itemEvent}/>
                    <Button className="newBtn" onClick={listOfItems}>
                    <AddIcon />

                    </Button>

                    <br />
                    <ol>
                        <li> item </li>

                        {newitem.map((val, index) =>{
                            return <ListCom key={index} text={value} />;
                        })}
                        
                    </ol>
                    <br />
                </div>
            </div>
        </>
    );
};



export default ToDoList;