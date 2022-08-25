import classes from './Descriptions.module.css';
import { connect } from 'react-redux';

const Descriptions = (props) => {
    return (
    <div className={classes.descriptionBox}>
       <p>{props.tasks[props.currentTaskId].description}</p>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentTaskId: state.data.currentTaskId,
        tasks: state.data.tasks
    }
}

const DescriptionsContainer = connect(mapStateToProps, {})(Descriptions)

export { DescriptionsContainer }
