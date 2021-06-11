export const todoActions = {
    updateTask: (updatedTask)=>({
        type:"UPDATE_TASKS", 
        payload: updatedTask
    }),
    setLoading: (loading) =>({
        type: "SET_LOADING",
        payload: loading
    })
}

