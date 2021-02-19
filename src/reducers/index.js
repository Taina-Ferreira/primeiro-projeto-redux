import { combineReducers } from "redux";

const initialState = {
    filme: []
}

function filmeReducer(state = initialState, action) {
    if (action.type === "ADICIONAR") {
        return { filme: [ ...state.filme, { ...action.value}]};
    }
    else {
        return state;
    }
}

function tituloReducer(state = { titulo: "Filmes"}, action){
    if(action.type === "ALTERAR") {
        return { titulo: action.value };
    }
    else {
        return state;
    }
}

const reducers = combineReducers({filmeReducer, tituloReducer});

export default reducers;