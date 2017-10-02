
export default store => next => action => {
    //code goes here
    console.log('Logger MiddleWare:', action);

   return next(action);
}

// function(store) {
//     return function(next){
//         return function (action) {
//             //code goes here
//         }
//     }
// }
