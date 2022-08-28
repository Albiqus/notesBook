import classes from './EditTaskModalContainer.module.css';
import { connect } from 'react-redux';
import { updateHeaderText, updateDescriptionText, setOnEditNodeModalStatus, setOnCancelEditNodeModalStatus } from '../../../redux/modals-reducer';
import React from 'react';
import { editTask } from '../../../redux/data-reducer';

const EditTaskModal = (props) => {
    const header = React.createRef()
    const description = React.createRef()

    const closeModal = () => {
        props.setOnEditNodeModalStatus(false)
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
        : props.setOnCancelEditNodeModalStatus(true)
    }

    const onHeaderTextChange = (e) => {
    props.updateHeaderText(e.target.value)
    }

    const onDescriptionTextChange = (e) => {
    props.updateDescriptionText(e.target.value)
    }

    if (props.editNodeModalStatus) {
        return (
            <div className={classes.modalBox}>
                <div className={classes.modalContentBox}>
                    <button onClick={onAddButtonClick} className={classes.addEditButton}></button> 
                    <button onClick={onCancelButtonClick} className={classes.cancelEditButton}></button> 
                    <form>
                        <textarea className={classes.header} ref={header} value={props.headerText} onChange={onHeaderTextChange}/>
                        <textarea className={classes.description} ref={description} value={props.descriptionText} onChange={onDescriptionTextChange} />
                   </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        editNodeModalStatus: state.modals.editNodeModalStatus,
        currentTaskId: state.data.currentTaskId,
        tasks: state.data.tasks,
        headerText: state.modals.headerText,
        descriptionText: state.modals.descriptionText
    }
}

const EditTaskModalContainer = connect(mapStateToProps,
    {
        setOnEditNodeModalStatus,
        updateHeaderText,
        updateDescriptionText,
        editTask,
        setOnCancelEditNodeModalStatus
    })(EditTaskModal)
export { EditTaskModalContainer }
