import classes from './Descriptions.module.css';
import { connect } from 'react-redux';
import { setOnEditNoteModalStatus, setOnRemoveNoteModalStatus, updateDescriptionText, updateHeaderText } from '../../redux/modals-reducer';
import { setCurrentTask, setFavoriteStatus, setFilterStatus } from '../../redux/data-reducer';

const Descriptions = (props) => {

    const onEditButtonClick = () => {
        props.setOnEditNoteModalStatus(true)
        props.updateHeaderText(props.tasks[props.currentTaskId].task)
        props.updateDescriptionText(props.tasks[props.currentTaskId].description)
    }

    const onRemoveButtonClick = () => {
        props.setCurrentTask(props.tasks[props.currentTaskId].task)
        props.setOnRemoveNoteModalStatus(true)
        
    }
    
    const onFavoriteButtonClick = () => {
        props.tasks[props.currentTaskId].favoriteStatus
        ? props.setFavoriteStatus(false, props.currentTaskId)
        : props.setFavoriteStatus(true, props.currentTaskId)
        props.filterStatus === 'favorite' && props.setFilterStatus('favorite')
    }

    let counter = 0;
    if (props.currentTaskId !== null ) {
        const DescriptionTextElements = props.tasks[props.currentTaskId].description.split("\n").map(textElement => {
            counter++
            return <p key={counter} className = {props.theme === 'тёмная' ? classes.description : `${classes.description} ${classes.lightTheme}`}>{textElement}</p>})
        return (
            <div onDoubleClick={onEditButtonClick} className={props.theme === 'тёмная' ? classes.descriptionBox : `${classes.descriptionBox} ${classes.lightTheme}` }>
                <div className={classes.headerText}>
                    <p className={props.theme === 'тёмная' ? classes.header : `${classes.header} ${classes.lightTheme}`}>{props.tasks[props.currentTaskId].task}</p>
                </div>
                <div className={classes.descriptionText}>
                    {DescriptionTextElements}
                </div>
                <div>
                    <button onClick={onEditButtonClick} className={props.theme === 'тёмная' ? classes.editButton : `${classes.editButton} ${classes.lightTheme}`}></button>
                    <button onClick={onRemoveButtonClick} className={props.theme === 'тёмная' ? classes.removeButton : `${classes.removeButton} ${classes.lightTheme}`}></button>
                    <button onClick={onFavoriteButtonClick}
                        className={
                            props.tasks[props.currentTaskId].favoriteStatus
                                ? props.theme === 'тёмная'
                                    ? classes.favoriteButtonPressed
                                    : `${classes.favoriteButtonPressed} ${classes.lightTheme}`
                                : props.theme === 'тёмная'
                                    ? classes.favoriteButton
                                    : `${classes.favoriteButton} ${classes.lightTheme}`
                                }></button>
                </div>
                
            </div>
        )
    } else {
        return (
            <div className={props.theme === 'тёмная' ? classes.descriptionBox : `${classes.descriptionBox} ${classes.lightTheme}`}>
                
            </div>
        ) 
    }
}

const mapStateToProps = (state) => {
    return {
        currentTaskId: state.data.currentTaskId,
        tasks: state.data.tasks,
        focusDescription: state.data.focusDescription,
        filterStatus: state.data.filterStatus,
        theme: state.settings.theme
    }
}

const DescriptionsContainer = connect(mapStateToProps,
    {
        setOnRemoveNoteModalStatus,
        setOnEditNoteModalStatus,
        setCurrentTask,
        updateHeaderText,
        updateDescriptionText,
        setFavoriteStatus,
        setFilterStatus
    })(Descriptions)

export { DescriptionsContainer }
