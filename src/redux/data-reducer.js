const SET_CURRENT_TASK_ID = 'const SET_CURRENT_TASK_ID'
const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const TOGGLE_FOCUS_TASK_ID = 'TOGGLE_FOCUS_TASK_ID'
const SET_CURRENT_TASK = 'SET_CURRENT_TASK'
const TOGGLE_FOCUS_DESCRIPTION = 'TOGGLE_FOCUS_DESCRIPTION'

const startState = {
    tasks: [
        {   
            id: 0,
            task: 'Уборка',
            description: ['Подмести в коридоре, помыть полы, пропылесосить в квартире. Протереть пыль в коридоре на полках. Вынести мусор'],
            description2: 'Подмести в коридоре, помыть полы, пропылесосить в квартире. Протереть пыль в коридоре на полках. Вынести мусор'
        },

        {
            id: 1,
             task: '12.04.2025',
            description: ['12.04.2025 съездить в стоматологическую клинику по адресу ул.Пушкина, д.5'],
             description2: '12.04.2025 съездить в стоматологическую клинику по адресу ул.Пушкина, д.5'
        },

        {
            id: 2,
            task: 'подарки НГ',
            description: ['Купить на новый год:', 'сын - конструктор,', 'жена - ирригатор,', 'родители - новый диван'],
            description2: 'Купить на новый год:\nсын - конструктор,\nжена - ирригатор,\nродители - новый диван'
        },
        {
            id: 3,
            task: 'фильмы',
            description: ['Терминатор', 'Агент Ева', 'Всё могу', 'Дьявол среди нас', 'Клаустрофобы: Квест В Москве', 'Секрет', 'Убийство по открыткам', 'Честный вор', 'Калашников', 'Суд над чикагской семьёй', 'Довод'],
            description2: 'Терминатор\nАгент Ева\nВсё могу\nДьявол среди нас\nКлаустрофобы: Квест В Москве\nСекрет\nУбийство по открыткам\nЧестный вор\nКалашников\nСуд над чикагской семьёй\nДовод'
        },
    ],
    currentTaskId: 0,
    currentTask: null,
    focusTaskId: null,
    focusDescription: null
}

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
            const descriptionElements = action.description.split("\n")
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: state.tasks.length,
                    task: action.task,
                    description: descriptionElements,
                    description2: action.description
                }],
                currentTaskId: state.tasks.length
            }
        case REMOVE_TASK:
            let newTasks = [...state.tasks].filter(task => task.id !== action.taskId);
            for (let i = 0; i < newTasks.length; i++){
                newTasks[i].id = i
            }
            let newCurrentTaskId;
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
        case TOGGLE_FOCUS_DESCRIPTION:
            return {
                ...state,
                focusDescription: action.focusDescription
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
export const toggleFocusDescription = (focusDescription) => ({
    type: TOGGLE_FOCUS_DESCRIPTION,
    focusDescription
})



