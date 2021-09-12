/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
const reducer =  (state = initialEntries, action) => {
    let newEntries;
    // Reducers for each action
    switch (action.type) {
      case 'ADD_ENTRY':
        newEntries = state.concat({...action.payload});
        return newEntries;
      case 'REMOVE_ENTRY':
        newEntries = state.filter(entry => entry.id !== action.payload.id);
        return newEntries;
      default:
        return state;
  }
};

export default reducer;

var initialEntries = [
    {
      id: 1,
      description: "Work income redux",
      value: 1000.00,
      isExpense: false
    }, {
      id: 2,
      description: "Water bill redux",
      value: 20.00,
      isExpense: true
    }, {
      id: 3,
      description: "Rent redux",
      value: 300,
      isExpense: true
    }, {
      id: 4,
      description: "Power Bill redux",
      value: 50.00,
      isExpense: true
    }
  ]
  