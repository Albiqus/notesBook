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
        let errorsCounter = 0;
        const headerWithoutSpaces = header.replace(/ /g, '')
        if (headerWithoutSpaces === '') {
            props.setHeaderSpacesErrorStatus(true)
            errorsCounter++
        }
        const descriptionWithoutSpaces = description.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g, '')
        if (descriptionWithoutSpaces === '') {
            props.setDescriptionSpacesErrorStatus(true)
            errorsCounter++
        }
        if (errorsCounter === 0) {
            return true
        }

    }

    const onAddButtonClick = () => {
        if (isValidate(header.current.value, description.current.value)) {
            props.editTask(props.currentTaskId, header.current.value, description.current.value)
            closeModal()
        }
    }
    
    const onCancelButtonClick = () => {
        props.setHeaderSpacesErrorStatus(false)
        props.setDescriptionSpacesErrorStatus(false)
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

    let modalContentBoxClassName = classes.modalContentBox
    let addTaskButtonClassName = classes.addTaskButton
    let cancelTaskButtonClassName = classes.cancelTaskButton
    let headerClassName = classes.header
    let descriptionClassName = classes.description

    if (props.theme !== 'тёмная') {
        modalContentBoxClassName += ` ${classes.lightTheme}`
        addTaskButtonClassName += ` ${classes.lightTheme}`
        cancelTaskButtonClassName += ` ${classes.lightTheme}`
        headerClassName += ` ${classes.lightTheme}`
        descriptionClassName += ` ${classes.lightTheme}`
    }

    if (props.headerSpacesErrorStatus === true) {
        headerClassName += ` ${classes.error}`
    }
    if (props.descriptionSpacesErrorStatus === true) {
        descriptionClassName += ` ${classes.error}`
    }

    if (props.editNoteModalStatus) {
        return (
            <div className={classes.modalBox}>
                <div className={modalContentBoxClassName}>
                    <button onClick={onAddButtonClick} className={addTaskButtonClassName}></button> 
                    <button onClick={onCancelButtonClick} className={cancelTaskButtonClassName}></button> 
                    <form>
                        <input className={headerClassName} ref={header} value={props.headerText} onChange={onHeaderTextChange} />
                        <textarea className={descriptionClassName} ref={description} value={props.descriptionText} onChange={onDescriptionTextChange} />
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
        descriptionSpacesErrorStatus: state.modals.descriptionSpacesErrorStatus,
        theme: state.settings.theme
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
