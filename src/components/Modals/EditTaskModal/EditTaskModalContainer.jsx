import classes from './EditTaskModalContainer.module.css';
import { connect } from 'react-redux';
import { updateHeaderText, updateDescriptionText, setOnEditNoteModalStatus, setOnCancelEditNoteModalStatus } from '../../../redux/modals-reducer';
import React from 'react';
import { editTask } from '../../../redux/data-reducer';

const EditTaskModal = (props) => {
    const header = React.createRef()
    const description = React.createRef()

    const closeModal = () => {
        props.setOnEditNoteModalStatus(false)
        props.updateHeaderText('')
        props.updateDescriptionText('')
    }
    
    const onAddButtonClick = () => {
        props.editTask(props.currentTaskId, header.current.value, description.current.value)
        closeModal()
    }
    
    const onCancelButtonClick = () => {
        header.current.value === props.tasks[props.currentTaskId].task && description.current.value === props.tasks[props.currentTaskId].description
        ? closeModal()
        : props.setOnCancelEditNoteModalStatus(true)
    }

    const onHeaderTextChange = (e) => {
    props.updateHeaderText(e.target.value)
    }

    const onDescriptionTextChange = (e) => {
    props.updateDescriptionText(e.target.value)
    }

    if (props.editNoteModalStatus) {
        return (
            <div className={classes.modalBox}>
                <div className={classes.modalContentBox}>
                    <button onClick={onAddButtonClick} className={classes.addEditButton}></button> 
                    <button onClick={onCancelButtonClick} className={classes.cancelEditButton}></button> 
                    <form>
                        <input className={classes.header} ref={header} value={props.headerText} onChange={onHeaderTextChange}/>
                        <textarea className={classes.description} ref={description} value={props.descriptionText} onChange={onDescriptionTextChange} />
                   </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        editNoteModalStatus: state.modals.editNoteModalStatus,
        currentTaskId: state.data.currentTaskId,
        tasks: state.data.tasks,
        headerText: state.modals.headerText,
        descriptionText: state.modals.descriptionText
    }
}

const EditTaskModalContainer = connect(mapStateToProps,
    {
        setOnEditNoteModalStatus,
        updateHeaderText,
        updateDescriptionText,
        editTask,
        setOnCancelEditNoteModalStatus
    })(EditTaskModal)
export { EditTaskModalContainer }
