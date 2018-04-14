
const initialState = true;

const loadingState = (state = initialState , action) =>  {
    switch(action.type){
        case "UPDATE_LOADING_STATE":{
            state = action.key;
            return state;
        }
        default:
            return state;
    }

}

export default loadingState;