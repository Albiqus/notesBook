import classes from './Tasks.module.css';
import { connect } from 'react-redux';
import { Task } from './Task/Task';
import { setCurrentTaskId } from '../../../redux/data-reducer';

const Tasks = (props) => {
    const taskElements = props.tasks.map(t => <Task task={t.task} currentTaskId={t.id} setCurrentTaskId={props.setCurrentTaskId}/>)

    return (
    <div className={classes.list}>
            {taskElements}
    </div>
)
}

const mapStateToProps = (state) => {
    return {
        tasks: state.data.tasks
    }
}

const TasksContainer = connect(mapStateToProps, { setCurrentTaskId })(Tasks)

export { TasksContainer }