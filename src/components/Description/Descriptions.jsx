import classes from './Descriptions.module.css';
import { connect } from 'react-redux';
import { setOnEditNodeModalStatus, setOnRemoveNodeModalStatus, updateDescriptionText, updateHeaderText } from '../../redux/modals-reducer';
import { setCurrentTask, toggleFocusDescription } from '../../redux/data-reducer';

const Descriptions = (props) => {

    const openRemoveModal = () => {
        props.setCurrentTask(props.tasks[props.currentTaskId].task)
        props.setOnRemoveNodeModalStatus(true)
    }
    
    const onEditButtonClick = () => {
        props.setOnEditNodeModalStatus(true)
        props.updateHeaderText(props.tasks[props.currentTaskId].task)
        props.updateDescriptionText(props.tasks[props.currentTaskId].description)
    }

    const setFocusDescription = () => {
        props.toggleFocusDescription(true)
    }

    const resetFocusDescription = () => {
        props.toggleFocusDescription(false)
    }

    if (props.currentTaskId !== null) {
        const DescriptionTextElements = props.tasks[props.currentTaskId].description.split("\n").map(textElement => <p className={classes.description}>{textElement}</p>)
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
                    <button onClick={onEditButtonClick}className={classes.editButton}></button>
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

const DescriptionsContainer = connect(mapStateToProps,
    {
        setOnRemoveNodeModalStatus,
        setOnEditNodeModalStatus,
        setCurrentTask,
        toggleFocusDescription,
        updateHeaderText,
        updateDescriptionText
    })(Descriptions)

export { DescriptionsContainer }
