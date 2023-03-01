import classes from "./Work.module.css"

function Work () {
    const workResources = [
        {id: 0, title: "React", link: "https://reactjs.org/"},
        {id: 1, title: "JavaScript", link: "https://reactjs.org/"},
        {id: 2, title: "stack overflow", link: "https://stackoverflow.com/"},
        {id: 3, title: "MDN", link: "https://developer.mozilla.org/en-US/"},
        {id: 4, title: "Open AI", link: "https://chat.openai.com/chat"},
    ]

    const jobResources = [
        {id: 0, title: "SN", link: "https://www.linkedin.com/sales/home"},
        {id: 1, title: "IN", link: "https://www.linkedin.com/feed/"},
        {id: 2, title: "Teams", link: "https://www.microsoft.com/en/microsoft-teams/log-in"},
        {id: 3, title: "Gmail", link: "https://mail.google.com/mail/u/0/#starred"},
        {id: 4, title: "Open AI", link: "https://reactjs.org/"},
    ]
    return (
        <div className={classes.work_container}>
        <h3>WORK</h3>
        <h5>Resources</h5>
        <div className="line"></div>
        <div className="simple-wrap">
        {
           workResources.map((element, index) => 
           <a className={classes.resources} key={index} href={element.link} target="_blank" rel="noreferrer">
            <p className="a-title">{element.title}</p>
           </a>
           ) 
        }
        </div>
        <h5>Job</h5>
        <div className="line"></div>
        <div className="simple-wrap">
        {
           jobResources.map((element, index) => 
           <a className={classes.resources} key={index} href={element.link} target="_blank" rel="noreferrer">
            <p className="a-title">{element.title}</p>
           </a>) 
        }
        </div>
        
        <h5>Projects</h5>
        <div className="line"></div>
        <div className="simple-wrap">
        {
           workResources.map((element, index) => 
           <a className={classes.resources} key={index} href={element.link} target="_blank" rel="noreferrer">
            <p className="a-title">{element.title}</p>
           </a>) 
        }
        </div>
        </div>
    )
};

export default Work;