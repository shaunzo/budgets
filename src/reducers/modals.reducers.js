const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'OPEN_EDIT_MODAL':
        case 'CLOSE_EDIT_MODAL':
        default:
            return state;
    }
}

export default reducer;