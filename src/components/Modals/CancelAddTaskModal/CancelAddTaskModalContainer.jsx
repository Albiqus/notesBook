import classes from './CancelAddTaskModalContainer.module.css';
import { connect } from 'react-redux';
import React from 'react';
import { setAddTaskModalActiveStatus, setOnCancelAddTaskModalActiveStatus, updateDescriptionText, updateHeaderText} from '../../../redux/modals-reducer';

const CancelAddTaskModal = (props) => {
    const closeModal = () => {
        props.setOnCancelAddTaskModalActiveStatus(false)
    }

    const onButtonYesClick = () => {
        closeModal()
        props.setAddTaskModalActiveStatus(false)
        props.updateHeaderText('')
        props.updateDescriptionText('')
    }

    const onButtonNoClick = () => {
        closeModal()
    }
    
    if (props.onCancelAddTaskModalActiveStatus) {
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
        onCancelAddTaskModalActiveStatus: state.modals.onCancelAddTaskModalActiveStatus,
    }
}

const CancelAddTaskModalContainer = connect(mapStateToProps,
    {
        setOnCancelAddTaskModalActiveStatus,
        setAddTaskModalActiveStatus,
        updateHeaderText,
        updateDescriptionText
    })(CancelAddTaskModal)
export { CancelAddTaskModalContainer }
