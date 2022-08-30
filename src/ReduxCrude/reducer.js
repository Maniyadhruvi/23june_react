const initialState = {
    users: [
        { id: 1, name: 'dhruvi' },
        { id: 2, name: 'julie' },
        { id: 3, name: 'het' },
        { id: 4, name: 'amisha' },
    ]
}
const reducer = (state = initialState, action) => {
    if(action.type=== 'del'){
        return {state,users:state.users.filter((u) => u.id !== action.playload)}
    }
    if(action.type=== 'add'){
        return {state,users:state.users.concat(action.playload)}
    }
    if(action.type=== 'edit'){
        console.log('===',action.playload)
        return {state,users:state.users.filter((users)=>users.id!=action.playload.id ? action.playload:users)}
       
    }
    return state
}
export default reducer