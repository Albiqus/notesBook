import classes from './RemoveTaskModalContainer.module.css';
import { connect } from 'react-redux';
import React from 'react';
import { removeTask } from '../../../redux/data-reducer';
import { setRemoveTaskModalActiveStatus } from '../../../redux/modals-reducer';

const RemoveTaskModal = (props) => {
    const closeModal = () => {
        props.setRemoveTaskModalActiveStatus(false)
    }

    const onButtonYesClick = () => {
        props.removeTask(props.currentTaskId)
        closeModal()
    }

    const onButtonNoClick = () => {
        closeModal()
    }

    if (props.removeTaskModalActiveStatus) {
        return (
            <div className={classes.modalBox}>
                <div className={classes.modalContentBox}>
                    <p>Вы уверены, что хотите удалить заметку "{props.currentTask}"?</p>
                    <button onClick={onButtonYesClick} className={classes.yesButton}>Да</button>
                    <button onClick={onButtonNoClick} className={classes.noButton}>Нет</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        removeTaskModalActiveStatus: state.modals.removeTaskModalActiveStatus,
        currentTask: state.data.currentTask,
        currentTaskId: state.data.currentTaskId,
    }
}

const RemoveTaskModalContainer = connect(mapStateToProps, { removeTask, setRemoveTaskModalActiveStatus })(RemoveTaskModal)
export { RemoveTaskModalContainer }
