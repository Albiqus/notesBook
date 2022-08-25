const SET_CURRENT_TASK_ID = 'const SET_CURRENT_TASK_ID'
const ADD_TASK = 'ADD_TASK'

const startState = {
    tasks: [
        {   
            id: 0,
            task: 'Помыть полы',
            description: 'Надо помыть полы и вся хуйня'
        },

        {
            id: 1,
             task: 'Почистить',
             description: 'убрать застывшее говнище с унитаза'
        },

        {
            id: 2,
            task: 'Сходить',
            description: 'Сходить в магазин и купить продуктов'
        },
    ],
    currentTaskId: 1
}

export const listReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_CURRENT_TASK_ID:
            return {
                ...state,
                currentTaskId: action.currentTaskId
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: state.tasks.length,
                    task: action.task,
                    description: action.description
                }]
            }
        default:
            return state;
    }


}


export const setCurrentTaskId = (currentTaskId) => ({
    type: SET_CURRENT_TASK_ID, currentTaskId
})
export const addTask = (task, description) => ({
    type: ADD_TASK,
    task,
    description
})




