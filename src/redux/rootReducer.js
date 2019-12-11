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
            
            const idx = userInfo.findIndex(item => JSON.stringify(item) === JSON.stringify(action.value))
            
            console.log('from DELETE action:', idx)
            
            const filteredItems = [
                ... userInfo.slice(0, idx),
                ... userInfo.slice(idx + 1)
            ]
            
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
            case 'CHANGE':
                
                const idChanged = state.userInfo.findIndex(item => JSON.stringify(item) === JSON.stringify(action.item))
                
                // console.log('Item from reducer:', state.userInfo[idChanged])
                // console.log('CHANGE action', action.value, action.item, action.key, idChanged)

                const itemChanged = {}

                for (let key in state.userInfo[idChanged]) {
                    key === action.key ? itemChanged[key] = action.value
                                       : itemChanged[key] = state.userInfo[idChanged][key]
                    // console.log(itemChanged)
                }

                const refreshedListChangedValue = [
                    ... state.userInfo.slice(0, idChanged),
                    itemChanged,
                    ... state.userInfo.slice(idChanged + 1)
                ]
                
            return {
                userInfo: refreshedListChangedValue
            }


        default:
            return state
    }
    
}