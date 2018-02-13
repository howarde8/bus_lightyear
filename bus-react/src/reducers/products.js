const initialState = ["test"];

const products = (state = initialState, action) => {
    switch(action.type){
        case "SHOW_ALL":{
            return state;
        }
        default:
            return state;
    }
}

export default products;