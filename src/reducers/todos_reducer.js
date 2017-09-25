import types from '../actions/types';

const DEFAULT_STATE = { all: [], single: null };

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_ALL:
            // console.log('In reducer GET ALL', action);
            return {...state, all: action.payload.data.todos};
        default:
            return state;
    }
}