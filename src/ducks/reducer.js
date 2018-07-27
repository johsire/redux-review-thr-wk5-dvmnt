let initState = {
  name: ''
};

// ACTION TYPES - variables that tell us what to do
const UPDATE_NAME = 'UPDATE_NAME';

export default function reducer(state = initState, action) {
  // HANDLE ACTIONS
  switch(action.type) {
    case UPDATE_NAME: 
      return Object.assign({}, state, { name: action.payload });
    default:
      return state;
  }
}

// ACTION CREATORS - functions that carry the "payload"
export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}