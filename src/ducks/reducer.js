
let initState = {
  lists: []
};

// ACTION TYPES - variables that tell us what to do
const ADD_LIST = 'ADD_LIST';
const DELETE_LIST = 'DELETE_LIST';

export default function reducer(state = initState, action) {
  // HANDLE ACTIONS
  switch(action.type) {
    case ADD_LIST: 
      return Object.assign({}, state, { lists: [...state.lists, action.payload] });
    case DELETE_LIST:
      let updatedLists = state.lists.filter(list => list.name !== action.payload);
      return Object.assign({}, state, { lists: updatedLists  });
    default:
      return state;
  }
};

// ACTION CREATORS - functions that carry the "payload"
// list will be an object with keys id, title, and items
export function addList(name) {
  return {
    type: ADD_LIST,
    payload: { name: name, items: [] }
  };
}

export function deleteList(name) {
  return {
    type: DELETE_LIST,
    payload: name
  }
};
