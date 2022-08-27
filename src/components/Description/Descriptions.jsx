import classes from './Descriptions.module.css';
import { connect } from 'react-redux';
import { setEditTaskModalActiveStatus, setRemoveTaskModalActiveStatus } from '../../redux/modals-reducer';
import { setCurrentTask, toggleFocusDescription } from '../../redux/data-reducer';

const Descriptions = (props) => {

    const openRemoveModal = () => {
        props.setCurrentTask(props.tasks[props.currentTaskId].task)
        props.setRemoveTaskModalActiveStatus(true)
    }
    
    const openEditModal = () => {
        props.setEditTaskModalActiveStatus(true)
    }

    const setFocusDescription = () => {
        props.toggleFocusDescription(true)
    }

    const resetFocusDescription = () => {
        props.toggleFocusDescription(false)
    }

    if (props.currentTaskId !== null) {
        const DescriptionTextElements = props.tasks[props.currentTaskId].description.map(textElement => <p className={classes.description}>{textElement}</p>)
        return (
            <div onMouseEnter={setFocusDescription}
                onMouseLeave={resetFocusDescription}
                className={classes.descriptionBox} >
                <p className={classes.header}>{props.tasks[props.currentTaskId].task}</p>
                <div className={classes.descriptionText}>
                    {DescriptionTextElements}
                </div>
                {props.focusDescription === true &&
                <div>
                    <button onClick={openEditModal}className={classes.editButton}></button>
                    <button onClick={openRemoveModal} className={classes.removeButton}></button>
                </div>}
                
            </div>
        )
    } else {
        return (
            <div className={classes.descriptionBox}>
                
            </div>
        ) 
    }
}

const mapStateToProps = (state) => {
    return {
        currentTaskId: state.data.currentTaskId,
        tasks: state.data.tasks,
        focusDescription: state.data.focusDescription
    }
}

const DescriptionsContainer = connect(mapStateToProps, { setRemoveTaskModalActiveStatus, setEditTaskModalActiveStatus, setCurrentTask, toggleFocusDescription })(Descriptions)

export { DescriptionsContainer }
