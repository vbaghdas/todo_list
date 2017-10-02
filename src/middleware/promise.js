
export default store => next => action => {
    if(!action.payload || !action.payload.then){

        return next(action);
    }

    action.payload.then(response =>{
       const newAction = { ...action, payload: response };

       store.dispatch(newAction);
    });
    return  action.payload
}