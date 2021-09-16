const reducer = (state = {isOpen: false}, action) => {
    switch (action.type) {
        case 'OPEN_EDIT_MODAL':
            return {...state, isOpen: true, is: action.payload.id};
        case 'CLOSE_EDIT_MODAL':
        default:
            return state;
    }
}

export default reducer;