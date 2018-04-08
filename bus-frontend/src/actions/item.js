
export const initItems = (items) => {
  return{
      type:"INIT_ITEMS",
      items:items,
  };
}

export const selectItem = ( item ) => {
  return{
    type: 'SELECT_ORDER',
    order: item,
  }
}
/* filterObject content 
{filterType:"FILT_NUMBER",lowBound:low,upBound:up}
*/