import { createStore,applyMiddleware } from "redux";
import { mealReducer } from "./reducers";
import thunk from "redux-thunk";
const store=createStore(mealReducer,applyMiddleware(thunk))
export default store