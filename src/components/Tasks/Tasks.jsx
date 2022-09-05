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
        return (
            <div className={props.theme === 'тёмная' ? classes.tasksBox : `${classes.tasksBox} ${classes.lightTheme}`}>
                {props.searchSetting === 'вкл' && 
                <input
                    onChange={onSearchChange}
                        className={props.theme === 'тёмная'
                        ? classes.search
                        : `${classes.search} ${classes.lightTheme}`}
                    value={props.searchText}
                    placeholder='поиск..'></input>}
                {props.sorting === 'вкл' && 
                    <div>
                        <p className={
                            props.theme === 'тёмная'
                                ? props.searchSetting === 'вкл'
                                    ? classes.allButtonText
                                    : `${classes.allButtonText} ${classes.searchSettingOff}`
                                : props.searchSetting === 'вкл'
                                    ? `${classes.allButtonText} ${classes.lightTheme}`
                                    : `${classes.allButtonText} ${classes.lightTheme} ${classes.searchSettingOff}`}>все</p>
                        <p className={props.theme === 'тёмная'
                            ? props.searchSetting === 'вкл'
                                ? classes.favoriteButtonText
                                : `${classes.favoriteButtonText} ${classes.searchSettingOff}`
                            : props.searchSetting === 'вкл'
                                ? `${classes.favoriteButtonText} ${classes.lightTheme}`
                                : `${classes.favoriteButtonText} ${classes.lightTheme} ${classes.searchSettingOff}`
                                }>избранные</p>
                        <div onClick={onAllButtonClick}
                            className={
                                props.filterStatus === 'all'
                                    ? props.theme === 'тёмная'
                                        ? props.searchSetting === 'вкл'
                                            ? `${classes.allButton} ${classes.added}`
                                            : `${classes.allButton} ${classes.added}  ${classes.searchSettingOff}`
                                        : props.searchSetting === 'вкл'
                                            ? `${classes.allButton} ${classes.added} ${classes.lightTheme}`
                                            : `${classes.allButton} ${classes.added} ${classes.lightTheme} ${classes.searchSettingOff}`
                                    : props.theme === 'тёмная'
                                        ?   props.searchSetting === 'вкл'
                                            ? classes.allButton
                                            : `${classes.allButton} ${classes.searchSettingOff}`
                                        : props.searchSetting === 'вкл'
                                            ? `${classes.allButton} ${classes.lightTheme}`
                                            : `${classes.allButton} ${classes.lightTheme} ${classes.searchSettingOff}`
                                        }>

                        </div>
                        <div onClick={onFavoriteButtonClick}
                            className={
                                props.filterStatus === 'favorite'
                                    ? props.theme === 'тёмная'
                                        ? props.searchSetting === 'вкл'
                                            ? `${classes.favoriteButton} ${classes.added}`
                                            : `${classes.favoriteButton} ${classes.added} ${classes.searchSettingOff}`
                                        : props.searchSetting === 'вкл'
                                            ? `${classes.favoriteButton} ${classes.added} ${classes.lightTheme}`
                                            : `${classes.favoriteButton} ${classes.added} ${classes.lightTheme} ${classes.searchSettingOff}`
                                    : props.theme === 'тёмная'
                                        ? props.searchSetting === 'вкл'
                                            ? classes.favoriteButton
                                            : `${classes.favoriteButton} ${classes.searchSettingOff}`
                                        : props.searchSetting === 'вкл'
                                            ? `${classes.favoriteButton} ${classes.lightTheme}`
                                            : `${classes.favoriteButton} ${classes.lightTheme} ${classes.searchSettingOff}`
                                        }>
                        </div>
                    </div>
                }
                
                {props.currentTaskId === null
                    ? <p className={
                        props.theme === 'тёмная' 
                            ? props.searchSetting === 'вкл'
                                ? classes.noNotesText 
                                : `${classes.noNotesText} ${classes.searchSettingOff}`
                            : props.searchSetting === 'вкл'
                                ? `${classes.noNotesText} ${classes.lightTheme}`
                                : `${classes.noNotesText} ${classes.lightTheme}  ${classes.searchSettingOff}`
                            } >нет заметок</p>
                    : <div className={props.sorting === 'вкл'
                        ? props.searchSetting === 'вкл'
                            ? classes.taskElementsBox
                            : `${classes.taskElementsBox} ${classes.searchSettingOff}`
                        : props.searchSetting === 'вкл'
                            ? `${classes.taskElementsBox} ${classes.sortingOn}`
                            : `${classes.taskElementsBox} ${classes.sortingOn} ${classes.searchSettingOff}`
                    }>
                        {taskElements}
                    </div>}
                
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