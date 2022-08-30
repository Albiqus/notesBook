const SET_ON_ADD_NOTE_MODAL_STATUS = 'SET_ON_ADD_NOTE_MODAL_STATUS';
const SET_ON_EDIT_NOTE_MODAL_STATUS = 'SET_ON_EDIT_NOTE_MODAL_STATUS'
const SET_ON_REMOVE_NOTE_MODAL_STATUS = 'SET_ON_REMOVE_NOTE_MODAL_STATUS';
const SET_ON_CANCEL_ADD_NOTE_MODAL_STATUS = 'SET_ON_CANCEL_ADD_NOTE_MODAL_STATUS';
const SET_ON_CANCEL_EDIT_NOTE_MODAL_STATUS = 'SET_ON_CANCEL_EDIT_NOTE_MODAL_STATUS'
const UPDATE_HEADER_TEXT = 'UPDATE_INPUT_TEXT';
const UPDATE_DESCRIPTION_TEXT = 'UPDATE_TEXTAREA_TEXT';
const SET_HEADER_SPACES_ERROR_STATUS = 'SET_HEADER_SPACES_ERROR_STATUS'
const SET_DESCRIPTION_SPACES_ERROR_STATUS = 'SET_DESCRIPTION_SPACES_ERROR_STATUS'

const startState = {
    addNoteModalStatus: false,
    editNoteModalStatus: false,
    removeNoteModalStatus: false,
    cancelAddNoteModalStatus: false,
    cancelEditNoteModalStatus: false,
    headerText: '',
    descriptionText: '',
    headerSpacesErrorStatus: false,
    descriptionSpacesErrorStatus: false
}

export const modalsReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_ON_ADD_NOTE_MODAL_STATUS:
            return {
                ...state,
                addNoteModalStatus: action.status
            }
        case SET_ON_EDIT_NOTE_MODAL_STATUS:
            return {
                ...state,
                editNoteModalStatus: action.status
            }
        case SET_ON_REMOVE_NOTE_MODAL_STATUS:
            return {
                ...state,
                removeNoteModalStatus: action.status
            }
        case SET_ON_CANCEL_ADD_NOTE_MODAL_STATUS:
             return {
                 ...state,
                 cancelAddNoteModalStatus: action.status
            }
        case SET_ON_CANCEL_EDIT_NOTE_MODAL_STATUS:
            return {
                ...state,
                cancelEditNoteModalStatus: action.status
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
        case SET_HEADER_SPACES_ERROR_STATUS:
            return {
                ...state,
                headerSpacesErrorStatus: action.status
            }
        case SET_DESCRIPTION_SPACES_ERROR_STATUS:
            return {
                ...state,
                descriptionSpacesErrorStatus: action.status
            }
        default:
            return state;
    }
}


export const setOnAddNoteModalStatus = (status) => ({
    type: SET_ON_ADD_NOTE_MODAL_STATUS,
    status
})

export const setOnEditNoteModalStatus = (status) => ({
    type: SET_ON_EDIT_NOTE_MODAL_STATUS,
    status
})

export const setOnRemoveNoteModalStatus = (status) => ({
    type: SET_ON_REMOVE_NOTE_MODAL_STATUS,
    status
})

export const setOnCancelAddNoteModalStatus = (status) => ({
    type: SET_ON_CANCEL_ADD_NOTE_MODAL_STATUS,
    status
})

export const setOnCancelEditNoteModalStatus = (status) => ({
    type: SET_ON_CANCEL_EDIT_NOTE_MODAL_STATUS,
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

export const setHeaderSpacesErrorStatus = (status) => ({
    type: SET_HEADER_SPACES_ERROR_STATUS,
    status
})
export const setDescriptionSpacesErrorStatus = (status) => ({
    type: SET_DESCRIPTION_SPACES_ERROR_STATUS,
    status
})
