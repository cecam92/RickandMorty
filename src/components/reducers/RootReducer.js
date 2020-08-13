const INITIAL_STATE = {
  characters: [],
  page: 1,
};

function RootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_CHARACTERS":
      return {
        characters: action.payload[0],
        page: action.payload[1],
      };

    default:
      return state;
  }
}

export default RootReducer;
