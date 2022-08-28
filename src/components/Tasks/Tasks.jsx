import classes from './Tasks.module.css';
import { connect } from 'react-redux';
import { Task } from './Task/Task';
import { setCurrentTaskId, toggleFocusTaskId, setCurrentTask } from '../../redux/data-reducer';
import { setAddTaskModalActiveStatus, setOnRemoveTaskModalActiveStatus } from '../../redux/modals-reducer';

const Tasks = (props) => {
    const taskElements = props.tasks.map(t => <Task
        task={t.task}
        id={t.id}
        currentTaskId={props.currentTaskId}
        setCurrentTaskId={props.setCurrentTaskId}
        setCurrentTask={props.setCurrentTask}
        key={t.id}
        toggleFocusTaskId={props.toggleFocusTaskId}
        focusTaskId={props.focusTaskId}
        setOnRemoveTaskModalActiveStatus={props.setOnRemoveTaskModalActiveStatus}
    />)

    const onButtonClick = () => {
        props.setAddTaskModalActiveStatus(true)
    }
    
    if (props.tasks.length === 0) {
        return (
            <div className={classes.tasksBox}>
                <p>нет заметок</p>
                <button onClick={onButtonClick}></button>
            </div>
        )
    }
    return (
    <div className={classes.tasksBox}>
            {taskElements}
            <button onClick={onButtonClick}></button>
    </div>
)
}

const mapStateToProps = (state) => {
    return {
        tasks: state.data.tasks,
        currentTaskId: state.data.currentTaskId,
        focusTaskId: state.data.focusTaskId
    }
}

const TasksContainer = connect(mapStateToProps,
    {
        setCurrentTaskId,
        setCurrentTask,
        setAddTaskModalActiveStatus,
        toggleFocusTaskId,
        setOnRemoveTaskModalActiveStatus
})(Tasks)

export { TasksContainer }