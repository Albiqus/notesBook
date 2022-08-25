import classes from './List.module.css';
import { TasksContainer } from './Tasks/Tasks';

const List = () => {
    return (
    <div className={classes.list}>
            <TasksContainer/>
    </div>
)
}



export { List }