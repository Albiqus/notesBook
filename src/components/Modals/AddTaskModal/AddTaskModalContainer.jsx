import classes from './AddTaskModalContainer.module.css';
import { connect } from 'react-redux';
import {
    updateHeaderText,
    updateDescriptionText,
    setOnAddNoteModalStatus,
    setOnCancelAddNoteModalStatus,
    setHeaderSpacesErrorStatus,
    setDescriptionSpacesErrorStatus
} from '../../../redux/modals-reducer';
import { addTask } from '../../../redux/data-reducer';
import React from 'react';

const AddTaskModal = (props) => {
   
    const closeModal = () => {
        props.setOnAddNoteModalStatus(false)
    }
    
    const updateHeaderText = (e) => {
        props.setHeaderSpacesErrorStatus(false)
        props.updateHeaderText(e.target.value)
    }
   
    const updateDescriptionText = (e) => {
        props.setDescriptionSpacesErrorStatus(false)
        props.updateDescriptionText(e.target.value)
    }
    
    const input = React.createRef()
    const textarea = React.createRef()
    
    const onCancelButtonClick = () => {
        props.setHeaderSpacesErrorStatus(false)
        props.setDescriptionSpacesErrorStatus(false)
        input.current.value === '' && textarea.current.value === ''
            ? closeModal()
            : props.setOnCancelAddNoteModalStatus(true)
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

    const onAddButtonClick = (e) => {
        if (isValidate(input.current.value, textarea.current.value)){
        e.preventDefault()
        props.addTask(input.current.value, textarea.current.value)
        props.updateHeaderText('')
        props.updateDescriptionText('')
        closeModal()
    }
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
    if (props.addNoteModalStatus) {
        return (
            <div className={classes.modalBox}>
                <div className={modalContentBoxClassName}>
                    <button onClick={onAddButtonClick} className={addTaskButtonClassName}></button> 
                    <button onClick={onCancelButtonClick} className={cancelTaskButtonClassName}></button> 
                    <form>
                        <input className={headerClassName} ref={input} placeholder='Название..' value={props.headerText} onChange={updateHeaderText} />
                        <textarea className={descriptionClassName} ref={textarea} placeholder='Описание..' value={props.descriptionText} onChange={updateDescriptionText}/>
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
        addNoteModalStatus: state.modals.addNoteModalStatus,
        headerText: state.modals.headerText,
        descriptionText: state.modals.descriptionText,
        headerSpacesErrorStatus: state.modals.headerSpacesErrorStatus,
        descriptionSpacesErrorStatus: state.modals.descriptionSpacesErrorStatus,
        theme: state.settings.theme
    }
}

const AddTaskModalContainer = connect(mapStateToProps,
    {
        setOnAddNoteModalStatus,
        updateHeaderText,
        updateDescriptionText,
        addTask,
        setOnCancelAddNoteModalStatus,
        setHeaderSpacesErrorStatus,
        setDescriptionSpacesErrorStatus
    })(AddTaskModal)
export { AddTaskModalContainer }
