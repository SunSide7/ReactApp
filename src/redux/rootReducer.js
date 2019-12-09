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
        case 'DELETE':

            const { userInfo } = state

            state.userInfo.forEach((item, index) => {

                const item_stringified = JSON.stringify(item)
                const current_stringified = JSON.stringify(action.value)

                if (item_stringified === current_stringified) {
                    userInfo.splice(index, 1)
                }
            })

            console.log(userInfo)
            
            return {
                userInfo: userInfo,
                counter: state.counter
            }
        default:
            return state
    }
    
}