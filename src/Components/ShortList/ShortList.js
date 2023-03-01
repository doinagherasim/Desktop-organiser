import classes from "./ShortList.module.css"
import { useState } from "react";

function ShortList () {
    
    const [task, setTask] = useState("");
    const [list, setList] =useState([
        {id: 0,
        title: "sent 40 messages linkedin",
        complete: false},
        {id: 0,
        title: "sent 20 connections linkedin",
        complete: false},
        {id: 0,
        title: "run at least 5km",
        complete: false},
    ]);

    const deleteHandler = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    };
    
    const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
        id: e.target.task.index,
        title: e.target.task.value
    };
    setList([...list, newTask])
    };

    const [complete, setComplete] = useState([list])
    const completeTask = (index) => {
    if(list[index].complete === false) {
        setComplete(true);
    } else if (list[index].complete === true) {
        setComplete(false);
    }
    };


    return (
        <div className={classes.shortList_container}>
            <h3>Short List</h3>
            <div className={classes.weekTitle_wrap}>
            <button className="buttonMid">Weekday</button>
            <button className="buttonMid">Weekend</button>
            </div>
            <ul>
                {
                    list.map((element, index) => 
                    <div key={index} className={classes.task_wrap}>
                    <li className={`${classes.taskTitle} ${complete ? "" : "line_trough"}`}>{element.title}</li>
                    <button className="green-Btn" onClick={completeTask}>✓</button>
                    <button onClick={(index)=>{deleteHandler(index)}} className="red-Btn">✕</button>
                 </div>
                 )}
            </ul>
            <form onSubmit={addNewTask} className={classes.form}>
            <input value={task} id="task" 
            onChange={(e) => setTask(e.target.value)}
            className={classes.input}></input>
            <button type="submit" className="buttonMid">Add</button>
            </form>
        </div>
    )
};

export default ShortList;