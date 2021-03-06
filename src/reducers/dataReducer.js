import { FETCH_TODOS } from "../components/actions/types";

export default (state = "loading", action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
