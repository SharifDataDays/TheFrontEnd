export const changeContext = (context) => (dispatch) => {    
    dispatch({
        type: 'SELECT_TIMELINE',
        context
    })
}