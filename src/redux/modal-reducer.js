const SET_ACTIVE_STATUS = 'SET_ACTIVE_STATUS';
const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';
const UPDATE_TEXTAREA_TEXT = 'UPDATE_TEXTAREA_TEXT';

const startState = {
    activeStatus: null,
    inputText: '',
    textareaText: ''
}

export const modalReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_ACTIVE_STATUS:
            return {
                ...state,
                activeStatus: action.activeStatus
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
        default:
            return state;
    }
}


export const setActiveStatus = (activeStatus) => ({
    type: SET_ACTIVE_STATUS,
    activeStatus
})

export const updateInputText = (inputText) => ({
    type: UPDATE_INPUT_TEXT,
    inputText
})

export const updateTextareaText = (textareaText) => ({
    type: UPDATE_TEXTAREA_TEXT,
    textareaText
})