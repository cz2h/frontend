import { combineReducers } from "redux";
import { userActions } from "./action";

import user from "../models/user";

const initState = user;

// Sample reducer function. Will update the fields in state.
function userLogin(state, data) {
    state.name = data.name;
    state.authenticationToken = data.authenticationToken;
    state.images = data.images;

    return state;
}

function actionReducer(state = initState, action) {
    switch (action.type) {
        case userActions.LOGIN:
            console.log("Action: login");
            return userLogin(state, action.data);

        case userActions.ADD_IMAGE:
            console.log("Action: add image");
            return state;

        case userActions.DELETE_IMAGE:
            console.log("Action: delete image");
            return state;

        case userActions.GET_IMAGE:
            console.log("Action: get image");
            return state;

        default:
            return Object.assign({}, state);
    }
}

const rootReducer = combineReducers({
    actionReducer,});
    
export default rootReducer;