import React from 'react';
import $ from 'jquery';
import { Item } from './Item';
import {connect} from 'react-redux';
import {initItems, loadingStateUpdate} from '../actions/item';

class ItemList extends React.Component {
  state = {
    error: '',
  }

  clickInChildItem = (itemId) => {
    console.log("Clicked! " + itemId);
  }

  componentDidMount() {
    this.props.dispatch(loadingStateUpdate(true));
    console.log("itemsList",this.props.products);
    this.loadProducts();
    
  }

  loadProducts = () => {
    $.ajax({
      url: '/api/bus/random/6',
      method: 'GET'
    }).then((response) => {
      console.log(response);
      this.setState({
        error: '',
      });
      this.props.dispatch(loadingStateUpdate(false));
      this.props.dispatch(initItems(response));
      console.log("itemsList",this.props.products);
    }, (response) => {
      console.log("Error: " + response);
      this.setState({ error: response});
    }).catch((error) => {
      console.log("catch error " + error);
    });
  }

  getProductsContent = () => {
    if (this.state.error) {
      console.log("error in getProductsContent");
      return null;
    } else if (this.props.loadingProducts) {
      return <p>loading...</p>;
    } else { // successful
      if(this.props.products !== undefined ){
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