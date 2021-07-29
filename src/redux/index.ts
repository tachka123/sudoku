import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import ComplexityReducer from "./complexity";
import SudokyReducer from "./matrix";

const middlwares = [thunk];

const appReducers = combineReducers({
  complexity: ComplexityReducer,
  sudoky: SudokyReducer,
});

const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(...middlwares))
);

export type IStateRedux = ReturnType<typeof store.getState>;

export const stateToProps = (state: IStateRedux): IStateRedux => state;

export default store;
