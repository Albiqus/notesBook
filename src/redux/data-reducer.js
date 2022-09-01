const SET_CURRENT_TASK_ID = 'const SET_CURRENT_TASK_ID'
const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const TOGGLE_FOCUS_TASK_ID = 'TOGGLE_FOCUS_TASK_ID'
const SET_CURRENT_TASK = 'SET_CURRENT_TASK'
const EDIT_TASK = 'EDIT_TASK'
const SET_FAVORITE_STATUS = 'SET_FAVORITE_STATUS'
const SET_FILTER_STATUS = 'SET_FILTER_STATUS'
const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT'
const SET_NEW_TASKS = 'SET_NEW_TASKS'

const startState = {
    tasks: [
        {   
            id: 0,
            task: 'Уборка',
            description: 'Подмести в коридоре, помыть полы, пропылесосить в квартире. Протереть пыль в коридоре на полках. Вынести мусор',
            favoriteStatus: false,
            isShow: true
        },

        {
            id: 1,
            task: '12.04.2025',
            description: '12.04.2025 съездить в стоматологическую клинику по адресу ул.Пушкина, д.5',
            favoriteStatus: false,
            isShow: true
        },

        {
            id: 2,
            task: 'подарки НГ',
            description: 'Купить на новый год:\nсын - конструктор,\nжена - ирригатор,\nродители - новый диван',
            favoriteStatus: true,
            isShow: true
        },
        {
            id: 3,
            task: 'фильмы',
            description: 'Терминатор\nАгент Ева\nВсё могу\nДьявол среди нас\nКлаустрофобы: Квест В Москве\nСекрет\nУбийство по открыткам\nЧестный вор\nКалашников\nСуд над чикагской семьёй\nДовод',
            favoriteStatus: false,
            isShow: true
        },
    ],
    currentTaskId: 0,
    currentTask: null,
    focusTaskId: null,
    searchText: '',
    filterStatus: 'all',
    tasksCopy: null
}

let newTasks;
let newCurrentTaskId;
export const listReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_CURRENT_TASK_ID:
            return {
                ...state,
                currentTaskId: action.currentTaskId
            }
        case SET_CURRENT_TASK:
            return {
                ...state,
                currentTask: action.currentTask
            }
        case ADD_TASK:
            let newIsFavorite
            state.filterStatus === 'favorite' ? newIsFavorite = true : newIsFavorite = false
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: state.tasks.length,
                    task: action.task,
                    description: action.description,
                    favoriteStatus: newIsFavorite,
                    isShow: true
                }],
                currentTaskId: state.tasks.length
            }
        case REMOVE_TASK:
            newTasks = [...state.tasks].filter(task => task.id !== action.taskId);
            for (let i = 0; i < newTasks.length; i++){
                newTasks[i].id = i
            }
            newTasks.length === 0 ? newCurrentTaskId = null : newCurrentTaskId = 0
            return {
                ...state,
                tasks: newTasks,
                currentTaskId: newCurrentTaskId
            }
         case TOGGLE_FOCUS_TASK_ID:
             return {
                 ...state,
                 focusTaskId: action.focusTaskId
            }
        case EDIT_TASK:
            newTasks = [...state.tasks].map(task => {
                if (task.id !== action.id) {
                    return task
                } else {
                    return {
                        id: task.id,
                        task: action.headerText,
                        description: action.descriptionText,
                        favoriteStatus: task.favoriteStatus,
                        isShow: true
                    }
                }
            })
            return {
                ...state,
                tasks: newTasks
            }
        case SET_FAVORITE_STATUS:
            newTasks = [...state.tasks].map(task => {
                 if (task.id !== action.id) {
                     return task
                 } else {
                     return {
                         id: task.id,
                         task: task.task,
                         description: task.description,
                         favoriteStatus: action.status,
                         isShow: true
                     }
                 }
            })
             return {
                 ...state,
                 tasks: newTasks
            }
        case SET_FILTER_STATUS:
            if (action.status === 'favorite') {
                let favoriteNotes = [...state.tasks].filter(task => task.favoriteStatus === true)
                favoriteNotes.length !== 0
                ? newCurrentTaskId = favoriteNotes[0].id
                : newCurrentTaskId = null
            }
            if (action.status === 'all') {
                let notes = [...state.tasks]
                notes.length !== 0
                ? newCurrentTaskId = 0
                : newCurrentTaskId = null
             }
             return {
                 ...state,
                 filterStatus: action.status,
                 currentTaskId: newCurrentTaskId
            }
        case UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.text
            }
        case SET_NEW_TASKS:
            newTasks = [...state.tasks]
            for (let i = 0; i < newTasks.length; i++){
                for (let j = 0; j < action.text.length; j++){
                    if (action.text[j].toLowerCase() === newTasks[i].task[j].toLowerCase()) {
                        newTasks[i].isShow = true
                    } else {
                       newTasks[i].isShow = false
                    }
                }
            }
            if (action.text === '') {
                newTasks.forEach(task => {
                  task.isShow = true
              })
            }
            for (let i = 0; i < newTasks.length; i++) {
                if (newTasks[i].isShow === true) {
                    newCurrentTaskId = newTasks[i].id
                    break
            } 
            }

            return {
                ...state,
                tasks: newTasks,
                currentTaskId: newCurrentTaskId
            }
        default:
            return state;
    }
}


export const setCurrentTaskId = (currentTaskId) => ({
    type: SET_CURRENT_TASK_ID, currentTaskId
})
export const setCurrentTask = (currentTask) => ({
    type: SET_CURRENT_TASK,
    currentTask
})
export const addTask = (task, description) => ({
    type: ADD_TASK,
    task,
    description
})
export const removeTask = (taskId) => ({
    type: REMOVE_TASK,
    taskId
})
export const toggleFocusTaskId = (focusTaskId) => ({
    type: TOGGLE_FOCUS_TASK_ID,
    focusTaskId
})
export const editTask = (id, headerText, descriptionText) => ({
    type: EDIT_TASK,
    id,
    headerText,
    descriptionText
})
export const setFavoriteStatus = (status, id) => ({
    type: SET_FAVORITE_STATUS,
    status,
    id
})
export const setFilterStatus = (status) => ({
    type: SET_FILTER_STATUS,
    status
})
export const updateSearchText = (text) => ({
    type: UPDATE_SEARCH_TEXT,
    text
})
export const setNewTasks = (text) => ({
    type: SET_NEW_TASKS,
    text
})


