import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const SWIPE_RIGHT = "SWIPE_RIGHT";
const SWIPE_LEFT = "SWIPE_LEFT";
const RESET = "CENTER";
const FETCH_START = "FETCH_START";
const FETCH_SUCCES = "FETCH_SUCCESS";

export const fetchRandomUser = () => dispatch => {
  dispatch({ type: FETCH_START });

  fetch("https://randomuser.me/api/")
    .then((response: Response) => response.json())
    .then((randomUser: ApiTypes.Result) => {
      dispatch({ type: FETCH_SUCCES, payload: randomUser.results[0] });
      console.log("data fetched", randomUser);
    })
    .catch((error: any) => console.error(error));
};

export const swipeRight = () => ({
  type: SWIPE_RIGHT
});

export const swipeLeft = () => ({
  type: SWIPE_LEFT
});

export const reset = () => ({
  type: RESET
});

const reducer = (state, action) => {
  switch (action.type) {
    case SWIPE_RIGHT:
      return { ...state, swipeStatus: "RIGHT" };
    case SWIPE_LEFT:
      return { ...state, swipeStatus: "LEFT" };
    case RESET:
      return { ...state, swipeStatus: "CENTER" };
    case FETCH_START:
      return { ...state, response: null };
    case FETCH_SUCCES:
      return { ...state, response: action.payload };
    default:
      return state;
  }
};

// Create redux store.
const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
export default createStore(
  reducer,
  { loading: false, response: null, swipeStatus: "INITIAL" },
  composeEnhancers(applyMiddleware(thunk))
);
