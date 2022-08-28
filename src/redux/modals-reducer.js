const SET_ON_ADD_NODE_MODAL_STATUS = 'SET_ON_ADD_NODE_MODAL_STATUS';
const SET_ON_EDIT_NODE_MODAL_STATUS = 'SET_ON_EDIT_NODE_MODAL_STATUS'
const SET_ON_REMOVE_NODE_MODAL_STATUS = 'SET_ON_REMOVE_NODE_MODAL_STATUS';
const SET_ON_CANCEL_ADD_NODE_MODAL_STATUS = 'SET_ON_CANCEL_ADD_NODE_MODAL_STATUS';
const SET_ON_CANCEL_EDIT_NODE_MODAL_STATUS = 'SET_ON_CANCEL_EDIT_NODE_MODAL_STATUS'
const UPDATE_HEADER_TEXT = 'UPDATE_INPUT_TEXT';
const UPDATE_DESCRIPTION_TEXT = 'UPDATE_TEXTAREA_TEXT';

const startState = {
    addNodeModalStatus: false,
    editNodeModalStatus: false,
    removeNodeModalStatus: false,
    cancelAddNodeModalStatus: false,
    cancelEditNodeModalStatus: false,
    headerText: '',
    descriptionText: '',
}

export const modalsReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_ON_ADD_NODE_MODAL_STATUS:
            return {
                ...state,
                addNodeModalStatus: action.status
            }
        case SET_ON_EDIT_NODE_MODAL_STATUS:
            return {
                ...state,
                editNodeModalStatus: action.status
            }
        case SET_ON_REMOVE_NODE_MODAL_STATUS:
            return {
                ...state,
                removeNodeModalStatus: action.status
            }
        case SET_ON_CANCEL_ADD_NODE_MODAL_STATUS:
             return {
                 ...state,
                 cancelAddNodeModalStatus: action.status
            }
        case SET_ON_CANCEL_EDIT_NODE_MODAL_STATUS:
            return {
                ...state,
                cancelEditNodeModalStatus: action.status
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


export const setOnAddNodeModalStatus = (status) => ({
    type: SET_ON_ADD_NODE_MODAL_STATUS,
    status
})

export const setOnEditNodeModalStatus = (status) => ({
    type: SET_ON_EDIT_NODE_MODAL_STATUS,
    status
})

export const setOnRemoveNodeModalStatus = (status) => ({
    type: SET_ON_REMOVE_NODE_MODAL_STATUS,
    status
})

export const setOnCancelAddNodeModalStatus = (status) => ({
    type: SET_ON_CANCEL_ADD_NODE_MODAL_STATUS,
    status
})

export const setOnCancelEditNodeModalStatus = (status) => ({
    type: SET_ON_CANCEL_EDIT_NODE_MODAL_STATUS,
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


