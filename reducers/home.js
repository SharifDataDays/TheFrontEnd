const homeState = {
    homeContext: ''
}


const homeReducer = (state = homeState, action) => {
    switch(action.type) {
        case 'SELECT_TIMELINE':
            return {
                ...state,
                homeContext: action.context
            }
        default:
            return state;
    }
}

export default homeReducer;