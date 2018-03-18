
const initialState = [];

const order = (state = initialState, action) => {
    switch(action.type){
        case "SELECT_ORDER":{
            state = action.order;
            return state;
        }
        default:
            return state;
            
    }
}

export default order;