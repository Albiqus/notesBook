import classes from './Task.module.css';

const Task = (props) => {
    const setCurrentTaskId = () => {
    props.setCurrentTaskId(props.id)
    }

    return (
        <div onClick={setCurrentTaskId} className={props.currentTaskId === props.id ? `${classes.taskItem} ${classes.active}` : classes.taskItem}>
            <p>{props.task}</p>
    </div>
)
}

export { Task }