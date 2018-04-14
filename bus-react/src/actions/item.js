
export const initItems = (items) => {
    return{
        type:"INIT_ITEMS",
        items:items,
    };
}
<<<<<<< HEAD
export const setVisibilityFilter = (filterObject) => {
    return {
      type: 'SET_VISIBILITY_FILTER',
      filter:filterObject,
    }
}
/* filterObject content 
  {filterType:"FILT_NUMBER",lowBound:low,upBound:up}
*/
=======
export const loadingStateUpdate = (key) =>{
    return{
        type:"UPDATE_LOADING_STATE",
        key:key,
    }
}
>>>>>>> add action
