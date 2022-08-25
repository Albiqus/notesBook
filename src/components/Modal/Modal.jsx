import classes from './Modal.module.css';
import { connect } from 'react-redux';
import { setActiveStatus, updateInputText, updateTextareaText } from '../../redux/modal-reducer';
import { addTask } from '../../redux/data-reducer';
import React from 'react';

const Modal = (props) => {

    const closeModal = () => {
        props.setActiveStatus(false)
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
        closeModal()
    }

    if (props.activeStatus) {
        return (
            <div className={classes.modalBox}>
                <div className={classes.modalContentBox}>
                        <button onClick={closeModal} className={classes.closeModalButton}></button>
                    <form>
                        <input ref={input} placeholder='задача..' value={props.inputText} onChange={updateInputText}/>
                        <textarea ref={textarea} placeholder='описание задачи..' value={props.textareaText} onChange={updateTextareaText} />
                        <button className={classes.submitFormButton} onClick={addTask}>добавить</button>
                   </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        activeStatus: state.modal.activeStatus,
        inputText: state.modal.inputText,
        textareaText: state.modal.textareaText,
    }
}

const ModalContainer = connect(mapStateToProps, { setActiveStatus, updateInputText, updateTextareaText, addTask })(Modal)
export { ModalContainer }
