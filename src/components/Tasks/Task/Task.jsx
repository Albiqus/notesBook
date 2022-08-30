import classes from './Task.module.css';

const Task = (props) => {

    const onTaskClick = () => {
        props.setCurrentTaskId(props.id)
        props.setCurrentTask(props.task)
    }

    const onTaskMouseEnter = () => {
    props.toggleFocusTaskId(props.id)
    }

    const onTaskMouseLeave = () => {
    props.toggleFocusTaskId(null)
    }
    
    const onRemoveButtonClick = () => {
        props.setOnRemoveNoteModalStatus(true)
    }

    if (props.filterStatus === 'all'){
    return (
        <div
            onMouseEnter={onTaskMouseEnter}
            onMouseLeave={onTaskMouseLeave}
            onClick={onTaskClick}
            className={props.currentTaskId === props.id ? `${classes.taskItem} ${classes.active}` : classes.taskItem}>
            <p>{props.task}</p>
            {props.favoriteStatus &&
                <div className={classes.favoriteButton}>
                </div>}
            <div
                onClick={onRemoveButtonClick}
                className={props.focusTaskId === props.id ? classes.removeTaskButton : classes.hidden}>
            </div>
       </div>
        )
    } 
    if (props.filterStatus === 'favorite') {
        if (props.favoriteStatus) { 
        return (
            <div
                onMouseEnter={onTaskMouseEnter}
                onMouseLeave={onTaskMouseLeave}
                onClick={onTaskClick}
                className={props.currentTaskId === props.id ? `${classes.taskItem} ${classes.active}` : classes.taskItem}>
                <p>{props.task}</p>
                {props.favoriteStatus &&
                    <div className={classes.favoriteButton}>
                    </div>}
                <div
                    onClick={onRemoveButtonClick}
                    className={props.focusTaskId === props.id ? classes.removeTaskButton : classes.hidden}>
                </div>
            </div>
        )
    }
    }
}

export { Task }