
export const initItems = (items) => {
    return{
        type:"INIT_ITEMS",
        items:items,
    };
}
export const loadingStateUpdate = (key) =>{
    return{
        type:"UPDATE_LOADING_STATE",
        key:key,
    }
}