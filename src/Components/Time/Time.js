import CalendarApp from "../Calendar/Calendar";
import classes from "./Time.module.css"


function Time () {
    const current = new Date();
    const date = `${current.getDay()}/${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div>
            <div className={classes.time_container}>
            <h1>13:56:00</h1>
            <h2>{date}</h2>
            <CalendarApp/>
            </div>
        </div>
    )
};

export default Time;