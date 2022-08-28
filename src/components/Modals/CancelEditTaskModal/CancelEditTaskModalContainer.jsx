import classes from './CancelEditTaskModalContainer.module.css';
import { connect } from 'react-redux';
import React from 'react';
import { setEditTaskModalActiveStatus, setOnCancelEditTaskModalActiveStatus } from '../../../redux/modals-reducer';

const CancelEditTaskModal = (props) => {
    const closeModal = () => {
        props.setOnCancelEditTaskModalActiveStatus(false)
    }

    const onButtonYesClick = () => {
        closeModal()
        props.setEditTaskModalActiveStatus(false)
    }

    const onButtonNoClick = () => {
        closeModal()
    }
    
    if (props.onCancelEditTaskModalActiveStatus) {
        return (
            <div className={classes.modalBox}>
                <div className={classes.modalContentBox}>
                    <p className={classes.warningText}>Отменить изменения?</p>
                    <button onClick={onButtonYesClick} className={classes.yesButton}>Да</button>
                    <button onClick={onButtonNoClick} className={classes.noButton}>Нет</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        onCancelEditTaskModalActiveStatus: state.modals.onCancelEditTaskModalActiveStatus,
    }
}

const CancelEditTaskModalContainer = connect(mapStateToProps,
    {
        setOnCancelEditTaskModalActiveStatus,
        setEditTaskModalActiveStatus
    })(CancelEditTaskModal)
export { CancelEditTaskModalContainer }
