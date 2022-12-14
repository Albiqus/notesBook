import classes from './RemoveTaskModalContainer.module.css';
import { connect } from 'react-redux';
import React from 'react';
import { removeTask, setFilterStatus } from '../../../redux/data-reducer';
import { setOnRemoveNoteModalStatus } from '../../../redux/modals-reducer';

const RemoveTaskModal = (props) => {
    const closeModal = () => {
        props.setOnRemoveNoteModalStatus(false)
    }

    const onButtonYesClick = () => {
        props.removeTask(props.currentTaskId)
        closeModal()
        props.filterStatus === 'favorite' && props.setFilterStatus('favorite')
    }

    const onButtonNoClick = () => {
        closeModal()
    }

    if (props.removeNoteModalStatus) {
        return (
            <div className={classes.modalBox}>
                <div className={classes.modalContentBox}>
                    <p>Вы уверены, что хотите удалить заметку {props.currentTask}?</p>
                    <button onClick={onButtonYesClick} className={classes.yesButton}>Да</button>
                    <button onClick={onButtonNoClick} className={classes.noButton}>Нет</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        removeNoteModalStatus: state.modals.removeNoteModalStatus,
        currentTask: state.data.currentTask,
        currentTaskId: state.data.currentTaskId,
        filterStatus: state.data.filterStatus
    }
}

const RemoveTaskModalContainer = connect(mapStateToProps, { removeTask, setOnRemoveNoteModalStatus, setFilterStatus })(RemoveTaskModal)
export { RemoveTaskModalContainer }
