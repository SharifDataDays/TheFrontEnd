export const changeContext = (context) => (dispatch) => {    
    dispatch({
        type: 'SELECT_TIMELINE',
        context
    })
<<<<<<< HEAD
=======
}

export const changeTrophySelection = (place) => (dispatch) => {   
     
    dispatch({
        type: 'TROPHY_STARTED',
        place
    })
>>>>>>> origin/timeline
}