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
        input.current.value === '' && textarea.current.value === ''
            ? closeModal()
            : props.setOnCancelAddNoteModalStatus(true)
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

    const onAddButtonClick = (e) => {
        if (isValidate(input.current.value, textarea.current.value)){
        e.preventDefault()
        props.addTask(input.current.value, textarea.current.value)
        props.updateHeaderText('')
        props.updateDescriptionText('')
        closeModal()
    }
    }
    if (props.addNoteModalStatus) {
        return (
            <div className={classes.modalBox}>
                <div className={classes.modalContentBox}>
                    <button onClick={onAddButtonClick} className={classes.addTaskButton}></button> 
                    <button onClick={onCancelButtonClick} className={classes.cancelTaskButton}></button> 
                    <form>
                        <input className={props.headerSpacesErrorStatus === true ? `${classes.header} ${classes.error}` : classes.header} ref={input} placeholder='Название..' value={props.headerText} onChange={updateHeaderText}/>
                        <textarea className={props.descriptionSpacesErrorStatus === true ? `${classes.description} ${classes.error}` : classes.description} ref={textarea} placeholder='Описание..' value={props.descriptionText} onChange={updateDescriptionText} />
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
        descriptionSpacesErrorStatus: state.modals.descriptionSpacesErrorStatus
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
