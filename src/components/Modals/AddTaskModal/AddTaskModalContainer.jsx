import classes from './AddTaskModalContainer.module.css';
import { connect } from 'react-redux';
import { setAddTaskModalActiveStatus, updateInputText, updateTextareaText } from '../../../redux/modals-reducer';
import { addTask } from '../../../redux/data-reducer';
import React from 'react';

const AddTaskModal = (props) => {

    const closeModal = () => {
        props.setAddTaskModalActiveStatus(false)
    }
    
    const updateInputText = (e) => {
        props.updateInputText(e.target.value)
    }

    const updateTextareaText = (e) => {
        props.updateTextareaText(e.target.value)
    }
    
    const input = React.createRef()
    const textarea = React.createRef()

    const addTask = (e) => {
        e.preventDefault()
        props.addTask(input.current.value, textarea.current.value)
        props.updateInputText('')
        props.updateTextareaText('')
        closeModal()
    }

    if (props.addTaskModalActiveStatus) {
        return (
            <div className={classes.modalBox}>
                <div className={classes.modalContentBox}>
                        <button onClick={closeModal} className={classes.closeModalButton}></button>
                    <form>
                        <input ref={input} placeholder='название..' value={props.inputText} onChange={updateInputText}/>
                        <textarea ref={textarea} placeholder='описание..' value={props.textareaText} onChange={updateTextareaText} />
                        <button className={classes.submitFormButton} onClick={addTask}>добавить</button>
                   </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        addTaskModalActiveStatus: state.modals.addTaskModalActiveStatus,
        inputText: state.modals.inputText,
        textareaText: state.modals.textareaText,
    }
}

const AddTaskModalContainer = connect(mapStateToProps, { setAddTaskModalActiveStatus, updateInputText, updateTextareaText, addTask })(AddTaskModal)
export { AddTaskModalContainer }
