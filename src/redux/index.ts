import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ComplexityReducer from "./complexity";

const appReducers = combineReducers({
  complexity: ComplexityReducer,
});

const store = createStore(appReducers, composeWithDevTools());

export type IStateRedux = ReturnType<typeof store.getState>;

export const stateToProps = (state: IStateRedux): IStateRedux => state;

export default store;
