const savedItems = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TO_SAVE': 
            return [...state, action.payload]
        case 'REMOVE_FROM_SAVE':
            return state.filter(savedItems => savedItems.id !== action.payload.id)
    }
    return state;
}

export default savedItems;