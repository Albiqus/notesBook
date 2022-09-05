const SET_THEME = 'SET_THEME'
const SET_SORTING = 'SET_SORTING'
const SET_SEARCH_SETTING = 'SET_SEARCH_SETTING'
const SET_IS_SHOW = 'SET_IS_SHOW'

const startState = {
    settingsStatus: false,
    theme: 'тёмная',
    sorting: 'вкл',
    searchSetting: 'вкл',
    isShow: false
}

export const settingsReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.theme
            }
        case SET_SORTING:
            return {
                ...state,
                sorting: action.sorting
            }
        case SET_SEARCH_SETTING:
            return {
                ...state,
                searchSetting: action.searchSetting
            }
        case SET_IS_SHOW:
            return {
                ...state,
                isShow: action.isShow
            }
        default:
            return state;
    }
}


export const setTheme = (theme) => ({
    type: SET_THEME, theme
})
export const setSorting = (sorting) => ({
    type: SET_SORTING,
    sorting
})
export const setSearchSetting = (searchSetting) => ({
    type: SET_SEARCH_SETTING,
    searchSetting
})
export const setIsShow = (isShow) => ({
    type: SET_IS_SHOW,
    isShow
})

