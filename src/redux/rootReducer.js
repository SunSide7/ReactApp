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
                counter: ++state.counter,
                userInfo: state.userInfo
            }
        case 'FIND':

            const filteredUser = state.userInfo.filter(user => {
                return user.name.toLowerCase().includes(action.value.toLowerCase())
            })
            
            return {
                userInfo: filteredUser
            }
        case 'SET_DATA':
            return {
                userInfo: action.value
            }
        case 'DELETE':

            let { userInfo } = state

            const filteredItems = userInfo.filter((item) => {
                return JSON.stringify(item) !== JSON.stringify(action.value)
            })
            
            return {
                userInfo: filteredItems
            }
        case 'ADD_ITEM':

            const refreshedList = [
                ...state.userInfo,
                {name: '', age: ''}
            ]

            return {
                userInfo: refreshedList
            }


        default:
            return state
    }
    
}