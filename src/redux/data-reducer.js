const SET_CURRENT_TASK_ID = 'const SET_CURRENT_TASK_ID'


const startState = {
    tasks: [
        {   
            id: 0,
            task: 'Помыть полы',
            description: 'Надо помыть полы и вся хуйня'
        },

        {
            id: 1,
             task: 'Почистить унитаз',
             description: 'убрать застывшее говнище с унитаза'
        },

        {
            id: 2,
            task: 'Сходить в магазин',
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
        default:
            return state;
    }


}


export const setCurrentTaskId = (currentTaskId) => ({
    type: SET_CURRENT_TASK_ID, currentTaskId
})



