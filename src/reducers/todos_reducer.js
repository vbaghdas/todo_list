import types from '../actions/types';

const DEFAULT_STATE = { all: [], single: null };

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_ALL:
            return {...state, all: action.payload.data.todos};
        case types.TOGGLE_COMPLETE:
        case types.DELETE_TODO:
        case types.GET_SINGLE:
            return { ...state, single: action.payload.data.todo };
    }
    return state;
}