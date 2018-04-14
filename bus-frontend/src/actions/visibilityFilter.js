export const setVisibilityFilter = ( filterObject ) => {
  return {
    type : 'SET_VISIBILITY_FILTER',
    filter : filterObject,
  }
}

//...filterObject
export const filtNumber = ( lowBound, upBound ) => {
  return {
    filterType : 'FILT_NUMBER',
    lowBound,
    upBound,
  }
}
export const filtBrand = ( brand ) => {
  return {
    filterType : 'FILT_BRAND',
    brand,
  }
}

export const showAll = () => {
  return {
    filterType : 'SHOW_ALL',
  }
}