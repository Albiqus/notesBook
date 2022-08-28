import classes from './Task.module.css';

const Task = (props) => {

    const onTaskClick = () => {
        props.setCurrentTaskId(props.id)
        props.setCurrentTask(props.task)
    }

    const setFocusTaskId = () => {
    props.toggleFocusTaskId(props.id)
    }

    const resetFocusTaskId = () => {
    props.toggleFocusTaskId(null)
    }
    
    const openModal = () => {
        props.setOnRemoveNodeModalStatus(true)
    }

    return (
        <div
            onMouseEnter={setFocusTaskId}
            onMouseLeave={resetFocusTaskId}
            onClick={onTaskClick}
            className={props.currentTaskId === props.id ? `${classes.taskItem} ${classes.active}` : classes.taskItem}>
            <p>{props.task}</p>
            <div
                onClick={openModal}
                className={props.focusTaskId === props.id ? classes.removeTaskButton : classes.hidden}>
            </div>
       </div>
)
}

export { Task }