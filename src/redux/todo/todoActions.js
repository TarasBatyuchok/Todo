
export const todoActions = {
    updateTasks: (updatedTask)=>(
        {
        type:"UPDATE_TASKS",
        payload: updatedTask
    }),
    setLoading: (loading) =>({
        type: "SET_LOADING",
            loading
    })
}
