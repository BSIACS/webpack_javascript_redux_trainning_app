import {combineReducers, createStore} from "redux";
import testReducer from "./testReducer";
import fooReducer from "./fooReducer";

const rootReducer = combineReducers({
    testPage: testReducer,
    fooPage: fooReducer,
});

export const store = createStore(rootReducer);