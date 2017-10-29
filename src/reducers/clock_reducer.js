const DEFAULT_STATE = { time: new Date().toLocaleTimeString() };

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case 'UPDATE_TIME':
            return { time: new Date().toLocaleTimeString() };
        default:
            return state;
    }
}