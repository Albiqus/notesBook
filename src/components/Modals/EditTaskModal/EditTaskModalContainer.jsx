import classes from './EditTaskModalContainer.module.css';
import { connect } from 'react-redux';
import { updateHeaderText, updateDescriptionText, setOnEditNoteModalStatus, setOnCancelEditNoteModalStatus, setHeaderSpacesErrorStatus, setDescriptionSpacesErrorStatus } from '../../../redux/modals-reducer';
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
    
    const isValidate = (header, description) => {
        const headerWithoutSpaces = header.replace(/ /g, '')
        if (headerWithoutSpaces === '') {
            props.setHeaderSpacesErrorStatus(true)
            return false
        }
        const descriptionWithoutSpaces = description.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g, '')
        if (descriptionWithoutSpaces === '') {
            props.setDescriptionSpacesErrorStatus(true)
            return false
        }
        return true
    }

    const onAddButtonClick = () => {
        if (isValidate(header.current.value, description.current.value)) {
            props.editTask(props.currentTaskId, header.current.value, description.current.value)
            closeModal()
        }
    }
    
    const onCancelButtonClick = () => {
        header.current.value === props.tasks[props.currentTaskId].task && description.current.value === props.tasks[props.currentTaskId].description
        ? closeModal()
        : props.setOnCancelEditNoteModalStatus(true)
    }

    const onHeaderTextChange = (e) => {
    props.setHeaderSpacesErrorStatus(false)
    props.updateHeaderText(e.target.value)
    }

    const onDescriptionTextChange = (e) => {
    props.setDescriptionSpacesErrorStatus(false)
    props.updateDescriptionText(e.target.value)
    }

    if (props.editNoteModalStatus) {
        return (
            <div className={classes.modalBox}>
                <div className={classes.modalContentBox}>
                    <button onClick={onAddButtonClick} className={classes.addEditButton}></button> 
                    <button onClick={onCancelButtonClick} className={classes.cancelEditButton}></button> 
                    <form>
                        <input
                            className={props.headerSpacesErrorStatus === true ? `${classes.header} ${classes.error}` : classes.header}
                            ref={header}
                            value={props.headerText}
                            onChange={onHeaderTextChange} />
                        <textarea
                            className={props.descriptionSpacesErrorStatus === true ? `${classes.description} ${classes.error}` : classes.description}
                            ref={description}
                            value={props.descriptionText}
                            onChange={onDescriptionTextChange} />
                    </form>
                    {props.headerSpacesErrorStatus === true && <p className={classes.headerErrorText}>заполните это поле</p>}
                    {props.descriptionSpacesErrorStatus === true && <p className={classes.descriptionErrorText}>заполните это поле</p>}
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
        descriptionText: state.modals.descriptionText,
        headerSpacesErrorStatus: state.modals.headerSpacesErrorStatus,
        descriptionSpacesErrorStatus: state.modals.descriptionSpacesErrorStatus
    }
}

const EditTaskModalContainer = connect(mapStateToProps,
    {
        setOnEditNoteModalStatus,
        updateHeaderText,
        updateDescriptionText,
        editTask,
        setOnCancelEditNoteModalStatus,
        setHeaderSpacesErrorStatus,
        setDescriptionSpacesErrorStatus
    })(EditTaskModal)
export { EditTaskModalContainer }
