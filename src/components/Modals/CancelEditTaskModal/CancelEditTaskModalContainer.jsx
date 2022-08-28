import classes from './CancelEditTaskModalContainer.module.css';
import { connect } from 'react-redux';
import React from 'react';
import { setOnCancelEditNodeModalStatus, setOnEditNodeModalStatus } from '../../../redux/modals-reducer';

const CancelEditTaskModal = (props) => {
    const closeModal = () => {
        props.setOnCancelEditNodeModalStatus(false)
    }

    const onButtonYesClick = () => {
        closeModal()
        props.setOnEditNodeModalStatus(false)
    }

    const onButtonNoClick = () => {
        closeModal()
    }
    
    if (props.cancelEditNodeModalStatus) {
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
        cancelEditNodeModalStatus: state.modals.cancelEditNodeModalStatus,
    }
}

const CancelEditTaskModalContainer = connect(mapStateToProps,
    {
        setOnCancelEditNodeModalStatus,
        setOnEditNodeModalStatus
    })(CancelEditTaskModal)
export { CancelEditTaskModalContainer }
