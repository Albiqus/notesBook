import classes from './CancelEditTaskModalContainer.module.css';
import { connect } from 'react-redux';
import React from 'react';
import { setOnCancelEditNoteModalStatus, setOnEditNoteModalStatus, updateDescriptionText, updateHeaderText } from '../../../redux/modals-reducer';

const CancelEditTaskModal = (props) => {
    const closeModal = () => {
        props.setOnCancelEditNoteModalStatus(false)
    }

    const onButtonYesClick = () => {
        closeModal()
        props.setOnEditNoteModalStatus(false)
        props.updateHeaderText('')
        props.updateDescriptionText('')
    }

    const onButtonNoClick = () => {
        closeModal()
    }
    
    if (props.cancelEditNoteModalStatus) {
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
        cancelEditNoteModalStatus: state.modals.cancelEditNoteModalStatus,
    }
}

const CancelEditTaskModalContainer = connect(mapStateToProps,
    {
        setOnCancelEditNoteModalStatus,
        setOnEditNoteModalStatus,
        updateDescriptionText,
        updateHeaderText
    })(CancelEditTaskModal)
export { CancelEditTaskModalContainer }
