import classes from './Tasks.module.css';
import { connect } from 'react-redux';
import { Task } from './Task/Task';
import { setCurrentTaskId, toggleFocusTaskId, setCurrentTask, setFilterStatus } from '../../redux/data-reducer';
import { setOnAddNoteModalStatus, setOnRemoveNoteModalStatus } from '../../redux/modals-reducer';

const Tasks = (props) => {
    const taskElements = props.tasks.map(t => <Task
        task={t.task}
        id={t.id}
        favoriteStatus={t.favoriteStatus}
        currentTaskId={props.currentTaskId}
        setCurrentTaskId={props.setCurrentTaskId}
        setCurrentTask={props.setCurrentTask}
        key={t.id}
        toggleFocusTaskId={props.toggleFocusTaskId}
        focusTaskId={props.focusTaskId}
        setOnRemoveNoteModalStatus={props.setOnRemoveNoteModalStatus}
        filterStatus={props.filterStatus}
    />)

    const onAddButtonClick = () => {
        props.setOnAddNoteModalStatus(true)
    }
    
    const onAllButtonClick = () => {
    props.setFilterStatus('all')
    }

    const onFavoriteButtonClick = () => {
    props.setFilterStatus('favorite')
    }

    if (props.currentTaskId === null) {
        return (
            <div className={classes.tasksBox}>
                <p className={classes.allButtonText}>все</p>
                <p className={classes.favoriteButtonText}>избранные</p>
                <div onClick={onAllButtonClick} className={props.filterStatus === 'all' ? `${classes.allButton} ${classes.added}` : classes.allButton}></div>
                <div onClick={onFavoriteButtonClick} className={props.filterStatus === 'favorite' ? `${classes.favoriteButton} ${classes.added}` : classes.favoriteButton}></div>
                <p className={classes.noNotesText}>нет заметок</p>
                <button onClick={onAddButtonClick}></button>
            </div>
        )
    }
    return (
        <div className={classes.tasksBox}>
            <p className={classes.allButtonText}>все</p>
            <p className={classes.favoriteButtonText}>избранные</p>
            <div onClick={onAllButtonClick} className={props.filterStatus === 'all' ? `${classes.allButton} ${classes.added}` : classes.allButton}></div>
            <div onClick={onFavoriteButtonClick} className={props.filterStatus === 'favorite' ? `${classes.favoriteButton} ${classes.added}` : classes.favoriteButton}></div>
            <div className={classes.taskElementsBox}>
                {taskElements}
            </div>
            <button onClick={onAddButtonClick}></button>
    </div>
)
}

const mapStateToProps = (state) => {
    return {
        tasks: state.data.tasks,
        currentTaskId: state.data.currentTaskId,
        focusTaskId: state.data.focusTaskId,
        filterStatus: state.data.filterStatus
    }
}

const TasksContainer = connect(mapStateToProps,
    {
        setCurrentTaskId,
        setCurrentTask,
        setOnAddNoteModalStatus,
        toggleFocusTaskId,
        setOnRemoveNoteModalStatus,
        setFilterStatus
})(Tasks)

export { TasksContainer }