

const initialState = [];

const products = (state = initialState, action) => {
    switch(action.type){
        case "INIT_ITEMS":{
            state = action.items;
            return state;
        }
        case "FILT_ITEMS":{
            let tempState = state.filter(value=>
                value.description.max_amount > action.lowBound && 
                value.description.max_amount <= action.upBound
            );
            
            return tempState;
        }
        default:
            return state;
            
    }
}

export default products;