
const initialState = {
    loading: false,
    tasks: [
        {task: "HTML I", done: false},
        {task: "CSS", done: false},
        {task: "Responsive design", done: false},
        {task: "Git", "done": true},
        {task: "JavaScript I", done: false},
        {task: "JavaScript II", done: true},
        {task: "JavaScript III", done: false},
    ]
}

const userReducer =(state= initialState, action)=>{
 switch (action.type){
     case "UPDATE_TASKS": {
         return {
         ...state,
             tasks: action.payload
         }
     }
     case "SET_LOADING": {
         return {
             ...state,
             loading: action.loading
         }
     }
     default:
         return state

 }

}

export default userReducer