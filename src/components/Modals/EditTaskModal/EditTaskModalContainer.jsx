import classes from './EditTaskModalContainer.module.css';
import { connect } from 'react-redux';
import { setCurrentTaskHeader, setCurrentTaskText, setEditTaskModalActiveStatus, updateInputText, updateTextareaText } from '../../../redux/modals-reducer';
import { addTask } from '../../../redux/data-reducer';
import React from 'react';

const EditTaskModal = (props) => {
    const closeModal = () => {
        props.setEditTaskModalActiveStatus(false)
    }

    const input = React.createRef()
    const textarea = React.createRef()


    if (props.editTaskModalActiveStatus) {
        props.setCurrentTaskText(props.tasks[props.currentTaskId].description2)
        props.setCurrentTaskHeader(props.tasks[props.currentTaskId].task)
        return (
            <div className={classes.modalBox}>
                <div className={classes.modalContentBox}>
                    <button onClick={closeModal} className={classes.cancelEditButton}></button> 
                    <button onClick={closeModal} className={classes.addEditButton}></button> 
                    <form>
                        <textarea className={classes.header} ref={input} value={props.currentTaskHeader} onChange={updateInputText}/>
                        <textarea className={classes.description} ref={textarea} value={props.currentTaskText} onChange={updateTextareaText} />
                   </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        editTaskModalActiveStatus: state.modals.editTaskModalActiveStatus,
        currentTaskId: state.data.currentTaskId,
        tasks: state.data.tasks,
        currentTaskText: state.modals.currentTaskText,
        currentTaskHeader: state.modals.currentTaskHeader
    }
}

const EditTaskModalContainer = connect(mapStateToProps,
    {
        setEditTaskModalActiveStatus,
        updateInputText,
        updateTextareaText,
        addTask,
        setCurrentTaskText,
        setCurrentTaskHeader
    })(EditTaskModal)
export { EditTaskModalContainer }
