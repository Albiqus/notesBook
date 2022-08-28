import classes from './CancelAddTaskModalContainer.module.css';
import { connect } from 'react-redux';
import React from 'react';
import { setOnAddNoteModalStatus, setOnCancelAddNoteModalStatus, updateDescriptionText, updateHeaderText} from '../../../redux/modals-reducer';

const CancelAddTaskModal = (props) => {
    const closeModal = () => {
        props.setOnCancelAddNoteModalStatus(false)
    }

    const onButtonYesClick = () => {
        closeModal()
        props.setOnAddNoteModalStatus(false)
        props.updateHeaderText('')
        props.updateDescriptionText('')
    }

    const onButtonNoClick = () => {
        closeModal()
    }
    
    if (props.cancelAddNoteModalStatus) {
        return (
            <div className={classes.modalBox}>
                <div className={classes.modalContentBox}>
                    <p className={classes.warningText1}>После отмены введённые данные не вернуть.</p>
                    <p className={classes.warningText2}>Вы уверены?</p>
                    <button onClick={onButtonYesClick} className={classes.yesButton}>Да</button>
                    <button onClick={onButtonNoClick} className={classes.noButton}>Нет</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cancelAddNoteModalStatus: state.modals.cancelAddNoteModalStatus,
    }
}

const CancelAddTaskModalContainer = connect(mapStateToProps,
    {
        setOnCancelAddNoteModalStatus,
        setOnAddNoteModalStatus,
        updateHeaderText,
        updateDescriptionText
    })(CancelAddTaskModal)
export { CancelAddTaskModalContainer }
