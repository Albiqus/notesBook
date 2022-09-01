import classes from './Tasks.module.css';
import { connect } from 'react-redux';
import { Task } from './Task/Task';
import { setCurrentTaskId, toggleFocusTaskId, setCurrentTask, setFilterStatus, updateSearchText, setNewTasks } from '../../redux/data-reducer';
import { setOnAddNoteModalStatus, setOnRemoveNoteModalStatus } from '../../redux/modals-reducer';

const Tasks = (props) => {
    const taskElements = props.tasks.map(t => <Task
        isShow={t.isShow}
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

    const onSearchChange = (e) => {
        props.updateSearchText(e.target.value)
        props.setNewTasks(e.target.value)

    }
        return (
            <div className={classes.tasksBox}>
                <input onChange={onSearchChange} className={classes.search} value={props.searchText} placeholder='поиск..'></input>
                <p className={classes.allButtonText}>все</p>
                <p className={classes.favoriteButtonText}>избранные</p>
                <div onClick={onAllButtonClick} className={props.filterStatus === 'all' ? `${classes.allButton} ${classes.added}` : classes.allButton}></div>
                <div onClick={onFavoriteButtonClick} className={props.filterStatus === 'favorite' ? `${classes.favoriteButton} ${classes.added}` : classes.favoriteButton}></div>
                {props.currentTaskId === null
                    ? <p className={classes.noNotesText}>нет заметок</p>
                    : <div className={classes.taskElementsBox}>
                        {taskElements}
                    </div>}
                
                <button onClick={onAddButtonClick}></button>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.data.tasks,
        currentTaskId: state.data.currentTaskId,
        focusTaskId: state.data.focusTaskId,
        filterStatus: state.data.filterStatus,
        searchText: state.data.searchText
    }
}

const TasksContainer = connect(mapStateToProps,
    {
        setCurrentTaskId,
        setCurrentTask,
        setOnAddNoteModalStatus,
        toggleFocusTaskId,
        setOnRemoveNoteModalStatus,
        setFilterStatus,
        updateSearchText,
        setNewTasks
})(Tasks)

export { TasksContainer }