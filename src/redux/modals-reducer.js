const SET_ADD_TASK_MODAL_ACTIVE_STATUS = 'SET_ADD_TASK_MODAL_ACTIVE_STATUS';
const SET_EDIT_TASK_MODAL_ACTIVE_STATUS = 'SET_EDIT_TASK_MODAL_ACTIVE_STATUS'
const SET_REMOVE_TASK_MODAL_ACTIVE_STATUS = 'SET_REMOVE_TASK_MODAL_ACTIVE_STATUS';
const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';
const UPDATE_TEXTAREA_TEXT = 'UPDATE_TEXTAREA_TEXT';
const SET_CURRENT_TASK_TEXT = 'SET_CURRENT_TASK_TEXT'
const SET_CURRENT_TASK_HEADER = 'SET_CURRENT_TASK_HEADER'

const startState = {
    addTaskModalActiveStatus: false,
    editTaskModalActiveStatus: true,
    removeTaskModalActiveStatus: false,
    inputText: '',
    textareaText: '',
    currentTaskText: '',
    currentTaskHeader: ''
}

export const modalsReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_ADD_TASK_MODAL_ACTIVE_STATUS:
            return {
                ...state,
                addTaskModalActiveStatus: action.addTaskModalActiveStatus
            }
        case SET_EDIT_TASK_MODAL_ACTIVE_STATUS:
            return {
                ...state,
                editTaskModalActiveStatus: action.editTaskModalActiveStatus
            }
        case SET_REMOVE_TASK_MODAL_ACTIVE_STATUS:
            return {
                ...state,
                removeTaskModalActiveStatus: action.removeTaskModalActiveStatus
            }
         case UPDATE_INPUT_TEXT:
             return {
                 ...state,
                 inputText: action.inputText
            }
        case UPDATE_TEXTAREA_TEXT:
            return {
                ...state,
                textareaText: action.textareaText
            }
         case SET_CURRENT_TASK_TEXT:
             return {
                 ...state,
                 currentTaskText: action.currentTaskText
            }
        case SET_CURRENT_TASK_HEADER:
            return {
                ...state,
                currentTaskHeader: action.currentTaskHeader
            }
        default:
            return state;
    }
}


export const setAddTaskModalActiveStatus = (addTaskModalActiveStatus) => ({
    type: SET_ADD_TASK_MODAL_ACTIVE_STATUS,
    addTaskModalActiveStatus
})

export const setEditTaskModalActiveStatus = (editTaskModalActiveStatus) => ({
    type: SET_EDIT_TASK_MODAL_ACTIVE_STATUS,
    editTaskModalActiveStatus
})

export const setRemoveTaskModalActiveStatus = (removeTaskModalActiveStatus) => ({
    type: SET_REMOVE_TASK_MODAL_ACTIVE_STATUS,
    removeTaskModalActiveStatus
})

export const updateInputText = (inputText) => ({
    type: UPDATE_INPUT_TEXT,
    inputText
})

export const updateTextareaText = (textareaText) => ({
    type: UPDATE_TEXTAREA_TEXT,
    textareaText
})

export const setCurrentTaskText = (currentTaskText) => ({
    type: SET_CURRENT_TASK_TEXT,
    currentTaskText
})

export const setCurrentTaskHeader = (currentTaskHeader) => ({
    type: SET_CURRENT_TASK_HEADER,
    currentTaskHeader
})

