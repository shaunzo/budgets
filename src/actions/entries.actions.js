export const addEntryRedux = (payload) => {
    return {type: 'ADD_ENTRY', payload};
}

export const removeEntryRedux = (id) => {
    return {type: 'REMOVE_ENTRY', payload: {id}}
}