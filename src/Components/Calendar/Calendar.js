import { useState } from "react";
import Calendar from 'react-calendar';
import classes from "./Calendar.module.css"
import 'react-calendar/dist/Calendar.css';

function CalendarApp () {

const [date, setDate] = useState(new Date());

    return (
        <div className={classes.calendar_container}>
            <Calendar onChange={setDate} value={date} />
        </div>
    )
};

export default CalendarApp;