const initialState = {
    userInfo: [
        {name: 'Alex', age: 35},
        {name: 'Arnold', age: 45},
        {name: 'Denis', age: 40},
        {name: 'Frank', age: 55},
        
    ],
    counter: 0
}

export default function rootReducer(state = initialState, action) {
    
    switch (action.type) {
        case 'ADD':
            console.log('Action ADD')
            return {
                counter: ++state.counter
            }
        case 'FIND':

            const filteredUser = state.userInfo.filter((user, index) => {
                return user.name.toLowerCase().includes(action.value)
            })
            
            return {
                userInfo: filteredUser
            }
        case 'SET_DATA':
            return {
                userInfo: action.value
            }
        default:
            return state
    }
    
}