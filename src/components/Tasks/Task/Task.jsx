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

    let taskItemClassName = classes.taskItem
    let textClassName = classes.text
    if (props.currentTaskId === props.id) {
        taskItemClassName += ` ${classes.active}`
    }
    if (props.theme !== 'тёмная') {
        taskItemClassName += ` ${classes.lightTheme}`
        textClassName += ` ${classes.lightTheme}`
    }

    if (props.filterStatus === 'all' && props.isShow) {
        return (
            <div onMouseEnter={onTaskMouseEnter} onMouseLeave={onTaskMouseLeave} onClick={onTaskClick} className={taskItemClassName}>
                <div className={classes.textBox}>
                    <p className={textClassName}>{props.task}</p>
                </div>
                {props.favoriteStatus && <div className={classes.favoriteButton}></div>}
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
                <div onMouseEnter={onTaskMouseEnter} onMouseLeave={onTaskMouseLeave} onClick={onTaskClick} className={taskItemClassName}>
                    <div className={classes.textBox}>
                        <p className={textClassName}>{props.task}</p>
                    </div>
                    {props.favoriteStatus && <div className={classes.favoriteButton}></div>}
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