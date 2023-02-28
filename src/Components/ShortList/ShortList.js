import classes from "./ShortList.module.css"
import { useState } from "react";

function ShortList () {
    
    const [task, setTask] = useState("");
    const [list, setList] =useState([
        {id: 0,
        title: "sent 20 messages in"},
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
                    <li className={classes.taskTitle}>{element.title}</li>
                    <button className="green-Btn">✓</button>
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