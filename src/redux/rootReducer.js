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
        default:
            return state
    }
    
}