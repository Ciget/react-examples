export default function({ dispatch})
{
    return function()
    {
        return function()
    }
     return next=>action=>{
         
         //if action does not have payload//or the payload does not have a .then property - we dont care about it
         if (!action.payload || !action.payload.then) return next(action);
         
         action.payload.then(function(response){
             console.log(response);
             const newAction =  {...action, payload: response};
             dispatch(newAction);
         })
    };
}