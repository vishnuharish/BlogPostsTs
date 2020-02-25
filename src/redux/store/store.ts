import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, {ThunkMiddleware} from 'redux-thunk';
import { postReducer } from "../reducers/postReducer";
import { AppActions } from '../types/postTypes';


export const rootReducer = combineReducers({
    posts: postReducer
})

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);

