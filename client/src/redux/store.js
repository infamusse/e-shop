import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import { initialState } from "./initialState";
import { reducer as productsReducer } from "./productsRedux";
import { reducer as orderReducer } from "./orderRedux";
import { reducer as snackbarReducer } from "./snackbarRedux";

// define reducers
const reducers = {
  products: productsReducer,
  order: orderReducer,
  snackbar: snackbarReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] == "undefined") {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  applyMiddleware(thunk)
  // composeWithDevTools(applyMiddleware(thunk))
);
