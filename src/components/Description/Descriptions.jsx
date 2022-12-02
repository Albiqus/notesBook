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

    let descriptionClassName = classes.description
    let descriptionBoxClassName = classes.descriptionBox
    let headerClassName = classes.header
    let editButtonClassName = classes.editButton
    let removeButtonClassName = classes.removeButton
    let favoriteButtonPressedClassName = classes.favoriteButtonPressed
    let favoriteButtonClassName = classes.favoriteButton
    
    if (props.theme !== 'тёмная') {
        descriptionClassName += ` ${classes.lightTheme}`
        descriptionBoxClassName += ` ${classes.lightTheme}`
        headerClassName += ` ${classes.lightTheme}`
        editButtonClassName += ` ${classes.lightTheme}`
        removeButtonClassName += ` ${classes.lightTheme}`
        favoriteButtonPressedClassName += ` ${classes.lightTheme}`
        favoriteButtonClassName += ` ${classes.lightTheme}`
    }


    if (props.currentTaskId !== null ) {
        const DescriptionTextElements = props.tasks[props.currentTaskId].description.split("\n").map(textElement => {
            counter++
            return <p key={counter} className={descriptionClassName}>{textElement}</p>})
        return (
            <div onDoubleClick={onEditButtonClick} className={descriptionBoxClassName}>
                <div className={classes.headerText}>
                    <p className={headerClassName}>{props.tasks[props.currentTaskId].task}</p>
                </div>
                <div className={classes.descriptionText}>
                    {DescriptionTextElements}
                </div>
                <div>
                    <button onClick={onEditButtonClick} className={editButtonClassName}></button>
                    <button onClick={onRemoveButtonClick} className={removeButtonClassName}></button>
                    <button onClick={onFavoriteButtonClick}
                        className={
                            props.tasks[props.currentTaskId].favoriteStatus
                                ? favoriteButtonPressedClassName
                                : favoriteButtonClassName
                                }></button>
                </div>
                
            </div>
        )
    } else {
        return (
            <div className={descriptionBoxClassName}>
                
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
