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
        theme={props.theme}
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

    let searchClassName = classes.search
    let tasksBoxClassName = classes.tasksBox
    let allButtonTextClassName = classes.allButtonText
    let favoriteButtonTextCLassName = classes.favoriteButtonText
    let allButtonClassName = classes.allButton
    let favoriteButtonClassName = classes.favoriteButton
    let noNotesTextClassName = classes.noNotesText
    let taskElementsBoxClassName = classes.taskElementsBox

    if (props.theme !== 'тёмная') {
        searchClassName += ` ${classes.lightTheme}`
        tasksBoxClassName += ` ${classes.lightTheme}`
        allButtonTextClassName += ` ${classes.lightTheme}`
        favoriteButtonTextCLassName += ` ${classes.lightTheme}`
        allButtonClassName += ` ${classes.lightTheme}`
        favoriteButtonClassName += ` ${classes.lightTheme}`
        noNotesTextClassName += ` ${classes.lightTheme}`
    }

    if (props.searchSetting !== 'вкл') {
        allButtonTextClassName += ` ${classes.searchSettingOff}`
        favoriteButtonTextCLassName += ` ${classes.searchSettingOff}`
        allButtonClassName += ` ${classes.searchSettingOff}`
        favoriteButtonClassName += ` ${classes.searchSettingOff}`
        noNotesTextClassName += ` ${classes.searchSettingOff}`
        taskElementsBoxClassName += ` ${classes.searchSettingOff}`
    }

    
    if (props.filterStatus === 'all') {
        allButtonClassName += ` ${classes.added}`
    }

    if (props.filterStatus === 'favorite') {
        favoriteButtonClassName += ` ${classes.added}`
    }

    if (props.sorting !== 'вкл') {
        taskElementsBoxClassName += ` ${classes.sortingOn}`
    }

        return (
            <div className={tasksBoxClassName}>
                {props.searchSetting === 'вкл' && <input onChange={onSearchChange} className={searchClassName} value={props.searchText} placeholder='поиск..'></input>}
                {props.sorting === 'вкл' &&
                    <div>
                        <p className={allButtonTextClassName}>все</p>
                        <p className={favoriteButtonTextCLassName}>избранные</p>
                        <div onClick={onAllButtonClick} className={allButtonClassName}></div>
                        <div onClick={onFavoriteButtonClick} className={favoriteButtonClassName}></div>
                    </div>
                }

                {props.currentTaskId === null
                    ? <p className={noNotesTextClassName} >нет заметок</p>
                    : <div className={taskElementsBoxClassName}>{taskElements}</div>
                }

                <button className={props.theme === 'тёмная' ? classes.addButton : `${classes.addButton} ${classes.lightTheme}`} onClick={onAddButtonClick}></button>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.data.tasks,
        currentTaskId: state.data.currentTaskId,
        focusTaskId: state.data.focusTaskId,
        filterStatus: state.data.filterStatus,
        searchText: state.data.searchText,
        theme: state.settings.theme,
        sorting: state.settings.sorting,
        searchSetting: state.settings.searchSetting
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