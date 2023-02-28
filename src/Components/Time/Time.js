import CalendarApp from "../Calendar/Calendar";
import classes from "./Time.module.css"


function Time () {
    const current = new Date();
    const date = `${current.getDay()}/${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div>
            <div className={classes.time_container}>
            <h4>13:56:00</h4>
            <h4>{date}</h4>
            <CalendarApp/>
            </div>
        </div>
    )
};

export default Time;