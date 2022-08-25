import classes from './Task.module.css';

const Task = (props) => {
    const setCurrentTaskId = () => {
    props.setCurrentTaskId(props.currentTaskId)
    }
    return (
    <div className={classes.list}>
            <p onClick={setCurrentTaskId}>{props.task}</p>
    </div>
)
}

export { Task }