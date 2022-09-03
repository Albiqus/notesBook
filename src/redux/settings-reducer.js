const SET_THEME = 'SET_THEME'


const startState = {
    settingsStatus: false,
    theme: 'dark'
}
export const settingsReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.theme
            }
        default:
            return state;
    }
}


export const setTheme = (theme) => ({
    type: SET_THEME, theme
})



