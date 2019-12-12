const initialState = {
    outletInfo: [
        {name: 'point name 1', address: 'adress 1', owner: 'owner 1', type: 'option_1', isActive: true},
        {name: 'point name 2', address: 'adress 2', owner: 'owner 2', type: 'option_1', isActive: true},
        {name: 'point name 3', address: 'adress 3', owner: 'owner 3', type: 'option_1', isActive: true},
        {name: 'point name 4', address: 'adress 4', owner: 'owner 4', type: 'option_1', isActive: true},
        
    ],
    counter: 0
}

export default function rootReducer(state = initialState, action) {
    
    switch (action.type) {
        case 'ADD':
            console.log('Action ADD')
            return {
                counter: ++state.counter,
                outletInfo: state.outletInfo
            }
        case 'FIND':

            const filteredUser = state.outletInfo.filter(user => {
                return user.name.toLowerCase().includes(action.value.toLowerCase())
            })
            
            return {
                outletInfo: filteredUser
            }
        case 'SET_DATA':
            return {
                outletInfo: action.value
            }
        case 'DELETE':

            let { outletInfo } = state
            
            const idx = outletInfo.findIndex(item => JSON.stringify(item) === JSON.stringify(action.value))
            
            console.log('from DELETE action:', idx)
            
            const filteredItems = [
                ... outletInfo.slice(0, idx),
                ... outletInfo.slice(idx + 1)
            ]
            
            return {
                outletInfo: filteredItems
            }
        case 'ADD_ITEM':
            
            const refreshedList = [
                ...state.outletInfo,
                {name: '', address: '', owner: '', type: 'default', isActive: true}
            ]
            
            return {
                outletInfo: refreshedList
            }
            case 'CHANGE':
                
                const idChanged = state.outletInfo.findIndex(item => JSON.stringify(item) === JSON.stringify(action.item))
                
                // console.log('Item from reducer:', state.outletInfo[idChanged])
                // console.log('CHANGE action', action.value, action.item, action.key, idChanged)

                const itemChanged = {}

                for (let key in state.outletInfo[idChanged]) {
                    key === action.key ? itemChanged[key] = action.value
                                       : itemChanged[key] = state.outletInfo[idChanged][key]
                    // console.log(itemChanged)
                }

                const refreshedListChangedValue = [
                    ... state.outletInfo.slice(0, idChanged),
                    itemChanged,
                    ... state.outletInfo.slice(idChanged + 1)
                ]
                
            return {
                outletInfo: refreshedListChangedValue
            }


        default:
            return state
    }
    
}