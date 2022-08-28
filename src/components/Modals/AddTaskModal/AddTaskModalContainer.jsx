import classes from './AddTaskModalContainer.module.css';
import { connect } from 'react-redux';
import { updateHeaderText, updateDescriptionText, setOnAddNodeModalStatus, setOnCancelAddNodeModalStatus } from '../../../redux/modals-reducer';
import { addTask } from '../../../redux/data-reducer';
import React from 'react';

const AddTaskModal = (props) => {

    const closeModal = () => {
        props.setOnAddNodeModalStatus(false)
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
            : props.setOnCancelAddNodeModalStatus(true)
    }
    const onAddButtonClick = (e) => {
        e.preventDefault()
        props.addTask(input.current.value, textarea.current.value)
        props.updateHeaderText('')
        props.updateDescriptionText('')
        closeModal()
    }

    if (props.addNodeModalStatus) {
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
        addNodeModalStatus: state.modals.addNodeModalStatus,
        headerText: state.modals.headerText,
        descriptionText: state.modals.descriptionText,
    }
}

const AddTaskModalContainer = connect(mapStateToProps,
    {
        setOnAddNodeModalStatus,
        updateHeaderText,
        updateDescriptionText,
        addTask,
        setOnCancelAddNodeModalStatus
    })(AddTaskModal)
export { AddTaskModalContainer }
