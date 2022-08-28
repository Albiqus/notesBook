import classes from './CancelAddTaskModalContainer.module.css';
import { connect } from 'react-redux';
import React from 'react';
import { setOnAddNodeModalStatus, setOnCancelAddNodeModalStatus, updateDescriptionText, updateHeaderText} from '../../../redux/modals-reducer';

const CancelAddTaskModal = (props) => {
    const closeModal = () => {
        props.setOnCancelAddNodeModalStatus(false)
    }

    const onButtonYesClick = () => {
        closeModal()
        props.setOnAddNodeModalStatus(false)
        props.updateHeaderText('')
        props.updateDescriptionText('')
    }

    const onButtonNoClick = () => {
        closeModal()
    }
    
    if (props.cancelAddNodeModalStatus) {
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
        cancelAddNodeModalStatus: state.modals.cancelAddNodeModalStatus,
    }
}

const CancelAddTaskModalContainer = connect(mapStateToProps,
    {
        setOnCancelAddNodeModalStatus,
        setOnAddNodeModalStatus,
        updateHeaderText,
        updateDescriptionText
    })(CancelAddTaskModal)
export { CancelAddTaskModalContainer }
