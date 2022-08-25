import classes from './Tasks.module.css';
import { connect } from 'react-redux';
import { Task } from './Task/Task';
import { setCurrentTaskId } from '../../redux/data-reducer';
import { setActiveStatus } from '../../redux/modal-reducer';

const Tasks = (props) => {
    const taskElements = props.tasks.map(t => <Task
        task={t.task}
        id={t.id}
        currentTaskId={props.currentTaskId}
        setCurrentTaskId={props.setCurrentTaskId}
        key={t.id} />)

    const openModal = () => {
        props.setActiveStatus(true)
    }

    return (
    <div className={classes.tasksBox}>
            {taskElements}
            <button onClick={openModal}></button>
    </div>
    
)
}

const mapStateToProps = (state) => {
    return {
        tasks: state.data.tasks,
        currentTaskId: state.data.currentTaskId
    }
}

const TasksContainer = connect(mapStateToProps, { setCurrentTaskId, setActiveStatus })(Tasks)

export { TasksContainer }