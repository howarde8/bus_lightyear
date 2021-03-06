import React from 'react';
import ItemList from '../components/ItemList';
import SelectionItem from '../components/SelectionItem';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { selectItem, initItems } from '../actions/item';
import { setVisibilityFilter } from '../actions/visibilityFilter'

// ... global stylish
const noPadding = {
  paddingTop : 0,
  paddingBottom : 0,
  paddingLeft : 0,
  paddingRight : 0,
}

class SelectPage extends React.Component {
  
  render(){
    return(
      <div id="selectpage">
        <SelectionItem 
          setVisibilityFilter={this.props.setVisibilityFilter}
        />
        <ItemList 
          products={this.props.filterProducts}
          initItems={this.props.initItems}
          selectItem={this.props.selectItem}
          link={this.props.link}
        />
      </div>
    )
  }
}


const getVisibleProducts = (products, filter) => {
  switch (filter.filterType) {
    case 'SHOW_ALL':
      return products;
    case 'FILT_NUMBER':
      return products.filter(value=>
        value.max_amount > filter.lowBound && 
        value.max_amount <= filter.upBound
      );
    case 'FILT_BRAND':
      return products.filter(value=>
        value.category === filter.brand
      );
    default:
      return products;
  }
}
const mapStateToProps =  (state ) => {
  return{
    filterProducts : getVisibleProducts(state.get('products'), state.get('visibilityFilter')),
  }
}
const mapDispatchToProps = ( dispatch ) => {
  return{
    setVisibilityFilter: bindActionCreators(setVisibilityFilter, dispatch),
    selectItem : bindActionCreators(selectItem, dispatch),
    link : bindActionCreators(push, dispatch),
    initItems : bindActionCreators(initItems, dispatch),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SelectPage)
