

export const withFavoriteStatus = (Component) => {
    let NewComponent = (props) => {
        if (props.filterStatus === 'favorite') {
            let newTasks = props.tasks.filter(task => task.favoriteStatus === true)
            let newCurrentTaskId;
            newTasks.length !== 0
                ? newCurrentTaskId = newTasks[0].id
                : newCurrentTaskId = null
            let newProps = {
                ...props,
                tasks: newTasks,
                prevTasks: [...props.tasks],
                currentTaskId: newCurrentTaskId
            }
            return <Component newProps={newProps} />
        }
        let newProps = {...props}
        return <Component newProps={newProps} />
        }

        return NewComponent
}