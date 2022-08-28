const SET_ADD_TASK_MODAL_ACTIVE_STATUS = 'SET_ADD_TASK_MODAL_ACTIVE_STATUS';
const SET_EDIT_TASK_MODAL_ACTIVE_STATUS = 'SET_EDIT_TASK_MODAL_ACTIVE_STATUS'
const SET_ON_REMOVE_TASK_MODAL_ACTIVE_STATUS = 'SET_ON_REMOVE_TASK_MODAL_ACTIVE_STATUS';
const SET_ON_CANCEL_ADD_TASK_MODAL_ACTIVE_STATUS = 'SET_ON_CANCEL_ADD_TASK_MODAL_ACTIVE_STATUS';
const SET_ON_CANCEL_EDIT_TASK_MODAL_ACTIVE_STATUS = 'SET_ON_CANCEL_EDIT_TASK_MODAL_ACTIVE_STATUS'
const UPDATE_HEADER_TEXT = 'UPDATE_INPUT_TEXT';
const UPDATE_DESCRIPTION_TEXT = 'UPDATE_TEXTAREA_TEXT';

const startState = {
    addTaskModalActiveStatus: false,
    editTaskModalActiveStatus: false,
    onRemoveTaskModalActiveStatus: false,
    onCancelAddTaskModalActiveStatus: false,
    onCancelEditTaskModalActiveStatus: false,
    headerText: '',
    descriptionText: '',
}

export const modalsReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_ADD_TASK_MODAL_ACTIVE_STATUS:
            return {
                ...state,
                addTaskModalActiveStatus: action.status
            }
        case SET_EDIT_TASK_MODAL_ACTIVE_STATUS:
            return {
                ...state,
                editTaskModalActiveStatus: action.status
            }
        case SET_ON_REMOVE_TASK_MODAL_ACTIVE_STATUS:
            return {
                ...state,
                onRemoveTaskModalActiveStatus: action.status
            }
        case SET_ON_CANCEL_ADD_TASK_MODAL_ACTIVE_STATUS:
             return {
                 ...state,
                 onCancelAddTaskModalActiveStatus: action.status
            }
        case SET_ON_CANCEL_EDIT_TASK_MODAL_ACTIVE_STATUS:
            return {
                ...state,
                onCancelEditTaskModalActiveStatus: action.status
            }
        case UPDATE_HEADER_TEXT:
            return {
                ...state,
                headerText: action.text
            }
        case UPDATE_DESCRIPTION_TEXT:
            return {
                ...state,
                descriptionText: action.text
            }
        default:
            return state;
    }
}


export const setAddTaskModalActiveStatus = (status) => ({
    type: SET_ADD_TASK_MODAL_ACTIVE_STATUS,
    status
})

export const setEditTaskModalActiveStatus = (status) => ({
    type: SET_EDIT_TASK_MODAL_ACTIVE_STATUS,
    status
})

export const setOnRemoveTaskModalActiveStatus = (status) => ({
    type: SET_ON_REMOVE_TASK_MODAL_ACTIVE_STATUS,
    status
})

export const setOnCancelAddTaskModalActiveStatus = (status) => ({
    type: SET_ON_CANCEL_ADD_TASK_MODAL_ACTIVE_STATUS,
    status
})

export const setOnCancelEditTaskModalActiveStatus = (status) => ({
    type: SET_ON_CANCEL_EDIT_TASK_MODAL_ACTIVE_STATUS,
    status
})


export const updateHeaderText = (text) => ({
    type: UPDATE_HEADER_TEXT,
    text
})

export const updateDescriptionText = (text) => ({
    type: UPDATE_DESCRIPTION_TEXT,
    text
})


