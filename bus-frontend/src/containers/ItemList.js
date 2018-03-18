import React from 'react';
// import $ from 'jquery';
import Item from '../components/Item';
import {connect} from 'react-redux';
import {initItems} from '../actions/item';

class ItemList extends React.Component {

  clickInChildItem = (itemId) => {
    console.log("Clicked! " + itemId);
  }

  componentDidMount() {
    // console.log('props',this.props);
    this.loadProducts();
  }
  loadProducts = () => {
    fetch('/api/bus/all',{medtho:'GET'}).then((response) => response.json())
    .then((responseJson) => {
      console.log("res",responseJson);
      this.props.dispatch(initItems(responseJson));
    })
    .catch((error) => {
      console.error(error);
    });
    
    // $.ajax({
    //   url: '/api/bus/all',
    //   method: 'GET'
    // }).then((response) => {
    //   this.props.dispatch(initItems(response));
    // }, (response) => {
    //   console.log("Error: " + response);
    // }).catch((error) => {
    //   console.log("catch error " + error);
    // });
  }

  getProductsContent = () => {
    if(this.props.loadingProducts){
      return <p>loading..</p>
    }
    else{
      if(this.props.products && this.props.products.length>0){
        const filter = this.props.filter
        const itemList = this.props.products.map((product,index) =>{
          return(<Item key={index} callbackClick={this.clickInChildItem} item={product}/>)
        }
      );
      return(
        <div id="select">
          {itemList}
        </div>
        );
      }
    }
  }

  render() {
    return (
      <div>
        {this.getProductsContent()}
      </div>
    );
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
  // console.log(state.get('products'));
  return {
    products: getVisibleProducts(state.get('products'), state.get('visibilityFilter'))
  }
}

export default connect(mapStateToProps,)(ItemList);