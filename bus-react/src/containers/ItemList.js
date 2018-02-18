import React from 'react';
import $ from 'jquery';
import Item from '../components/Item';
import {connect} from 'react-redux';
import {initItems, loadingStateUpdate} from '../actions/item';

class ItemList extends React.Component {

  clickInChildItem = (itemId) => {
    console.log("Clicked! " + itemId);
  }

  componentDidMount() {
    this.props.dispatch(loadingStateUpdate(true));
    this.loadProducts();
    
  }

  loadProducts = () => {
    $.ajax({
      url: '/api/bus/all',
      method: 'GET'
    }).then((response) => {
      this.props.dispatch(loadingStateUpdate(false));
      this.props.dispatch(initItems(response));
    }, (response) => {
      console.log("Error: " + response);
    }).catch((error) => {
      console.log("catch error " + error);
    });
  }

  getProductsContent = () => {
    if(this.props.loadingProducts){
      return <p>loading..</p>
    }
    else{
      if(this.props.products !== undefined ){
      const filter = this.props.filter
      const itemList = this.props.products.map((product,index) =>
        <Item key={index} callbackClick={this.clickInChildItem} item={product}/>
      );
      return <div id="selectpage">{itemList}</div>;
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

const mapStateToProps = (state) => {
  return{
    products: state.products,
    loadingProducts: state.loadingstate,
  }
}

export default connect(mapStateToProps,)(ItemList);