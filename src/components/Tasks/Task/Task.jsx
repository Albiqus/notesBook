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

    if (props.filterStatus === 'all' && props.isShow){
    return (
        <div
            onMouseEnter={onTaskMouseEnter}
            onMouseLeave={onTaskMouseLeave}
            onClick={onTaskClick}
            className={
                props.currentTaskId === props.id
                    ? props.theme === 'тёмная'
                        ? `${classes.taskItem} ${classes.active}`
                        : `${classes.taskItem} ${classes.active} ${classes.lightTheme}`
                    : props.theme === 'тёмная'
                        ? classes.taskItem
                        : `${classes.taskItem} ${classes.lightTheme}`
                    }>
            <div className={classes.textBox}>
                <p className={props.theme === 'тёмная' ? classes.text : `${classes.text} ${classes.lightTheme}`}>{props.task}</p>
            </div>
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
    if (props.filterStatus === 'favorite' && props.isShow) {
        if (props.favoriteStatus) { 
        return (
            <div
                onMouseEnter={onTaskMouseEnter}
                onMouseLeave={onTaskMouseLeave}
                onClick={onTaskClick}
                className={props.currentTaskId === props.id
                    ? props.theme === 'тёмная'
                        ? `${classes.taskItem} ${classes.active}`
                        : `${classes.taskItem} ${classes.active} ${classes.lightTheme}`
                    : props.theme === 'тёмная'
                        ? classes.taskItem
                        : `${classes.taskItem} ${classes.lightTheme}`}>
                <div className={classes.textBox}>
                    <p className={props.theme === 'тёмная' ? classes.text : `${classes.text} ${classes.lightTheme}`}>{props.task}</p>
                </div>
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