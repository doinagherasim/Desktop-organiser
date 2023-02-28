import classes from "./Images.module.css"
import remember from "../Images/remember.png"
function Images () {
    return (
        <div className={classes.images_wrap}>
            <img src={remember}></img>
        </div>
    )
};

export default Images;