import classes from './AddTaskModalContainer.module.css';
import { connect } from 'react-redux';
import { setAddTaskModalActiveStatus, updateHeaderText, updateDescriptionText, setOnCancelAddTaskModalActiveStatus } from '../../../redux/modals-reducer';
import { addTask } from '../../../redux/data-reducer';
import React from 'react';

const AddTaskModal = (props) => {

    const closeModal = () => {
        props.setAddTaskModalActiveStatus(false)
    }
    
    const updateHeaderText = (e) => {
        props.updateHeaderText(e.target.value)
    }

    const updateDescriptionText = (e) => {
        props.updateDescriptionText(e.target.value)
    }
    
    const input = React.createRef()
    const textarea = React.createRef()
    
    const onCancelButtonClick = () => {
        input.current.value === '' && textarea.current.value === ''
            ? closeModal()
            : props.setOnCancelAddTaskModalActiveStatus(true)
    }
    const onAddButtonClick = (e) => {
        e.preventDefault()
        props.addTask(input.current.value, textarea.current.value)
        props.updateHeaderText('')
        props.updateDescriptionText('')
        closeModal()
    }

    if (props.addTaskModalActiveStatus) {
        return (
            <div className={classes.modalBox}>
                <div className={classes.modalContentBox}>
                    <button onClick={onAddButtonClick} className={classes.addTaskButton}></button> 
                    <button onClick={onCancelButtonClick} className={classes.cancelTaskButton}></button> 
                    <form>
                        <textarea className={classes.header} ref={input} placeholder='Название..' value={props.headerText} onChange={updateHeaderText}/>
                        <textarea className={classes.description} ref={textarea} placeholder='Описание..' value={props.descriptionText} onChange={updateDescriptionText} />
                   </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        addTaskModalActiveStatus: state.modals.addTaskModalActiveStatus,
        headerText: state.modals.headerText,
        descriptionText: state.modals.descriptionText,
    }
}

const AddTaskModalContainer = connect(mapStateToProps,
    {
        setAddTaskModalActiveStatus,
        updateHeaderText,
        updateDescriptionText,
        addTask,
        setOnCancelAddTaskModalActiveStatus
    })(AddTaskModal)
export { AddTaskModalContainer }
