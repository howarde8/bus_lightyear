const initialState = ["test"];

const products = (state = initialState, action) => {
    switch(action.type){
        case "INIT_ITEMS":{
            state = action.items;
            return state;
        }
        default:
            return state;
    }
}

export default products;