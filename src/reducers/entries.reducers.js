/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import entriesTypes from '../actions/entries.actions';

const reducer =  (state = initialEntries, action) => {
    let newEntries;
    // Reducers for each action
    switch (action.type) {
      case entriesTypes.ADD_ENTRY:
        newEntries = state.concat({...action.payload});
        return newEntries;
      case entriesTypes.REMOVE_ENTRY:
        newEntries = state.filter(entry => entry.id !== action.payload.id);
        return newEntries;
      case entriesTypes.UPDATE_ENTRY:
        newEntries = [...state];
        const index = newEntries.findIndex(entry => entry.id === action.payload.id);
        newEntries[index] = {...action.payload.entry}
        return newEntries;
      default:
        return state;
  }
};

export default reducer;

var initialEntries = [];
  