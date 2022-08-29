import classes from './Descriptions.module.css';
import { connect } from 'react-redux';
import { setOnEditNoteModalStatus, setOnRemoveNoteModalStatus, updateDescriptionText, updateHeaderText } from '../../redux/modals-reducer';
import { setCurrentTask, setFavoriteStatus } from '../../redux/data-reducer';

const Descriptions = (props) => {

    const onEditButtonClick = () => {
        props.setOnEditNoteModalStatus(true)
        props.updateHeaderText(props.tasks[props.currentTaskId].task)
        props.updateDescriptionText(props.tasks[props.currentTaskId].description)
    }

    const onRemoveButtonClick = () => {
        props.setCurrentTask(props.tasks[props.currentTaskId].task)
        props.setOnRemoveNoteModalStatus(true)
    }
    
    const onFavoriteButtonClick = () => {
        props.tasks[props.currentTaskId].favoriteStatus
        ? props.setFavoriteStatus(false, props.currentTaskId)
        : props.setFavoriteStatus(true, props.currentTaskId)
    }


    if (props.currentTaskId !== null) {
        const DescriptionTextElements = props.tasks[props.currentTaskId].description.split("\n").map(textElement => <p className={classes.description}>{textElement}</p>)
        return (
            <div className={classes.descriptionBox}>
                <p className={classes.header}>{props.tasks[props.currentTaskId].task}</p>
                <div className={classes.descriptionText}>
                    {DescriptionTextElements}
                </div>
                <div>
                    <button onClick={onEditButtonClick}className={classes.editButton}></button>
                    <button onClick={onRemoveButtonClick} className={classes.removeButton}></button>
                    <button onClick={onFavoriteButtonClick} className={props.tasks[props.currentTaskId].favoriteStatus ? classes.favoriteButtonPressed : classes.favoriteButton}></button>
                </div>
                
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
        setOnRemoveNoteModalStatus,
        setOnEditNoteModalStatus,
        setCurrentTask,
        updateHeaderText,
        updateDescriptionText,
        setFavoriteStatus
    })(Descriptions)

export { DescriptionsContainer }
