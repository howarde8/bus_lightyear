import React from 'react';
import '../styles/SelectPage.css';
import ItemList from '../components/ItemList';
import SelectionItem from '../components/SelectionItem';
import { connect } from 'react-redux';

class SelectPage extends React.Component {
  
  render(){
    return(
      <div id="selectpage">
        <SelectionItem dispatch={this.props.dispatch}/>
        <ItemList products={this.props.filterProducts} dispatch={this.props.dispatch}/>
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
        value.description.max_amount > filter.lowBound && 
        value.description.max_amount <= filter.upBound
      );
    case 'FILT_BRAND':
      return products.filter(value=>
        value.category === filter.brand
      );
    default:
      return products;
  }
}
const mapStateToProps = (state) => {
  return{
    filterProducts : getVisibleProducts(state.get('products'), state.get('visibilityFilter')),
  }
}

export default connect(mapStateToProps,)(SelectPage)
