import React from 'react';
import $ from 'jquery';
import { Item } from './Item';
import {connect} from 'react-redux';

class ItemList extends React.Component {
  state = {
    loadingProducts: false,
    error: '',
    products: []
  }

  clickInChildItem = (itemId) => {
    console.log("Clicked! " + itemId);
  }

  componentDidMount() {
    this.setState({ loadingProducts: true, error: '' });
    console.log("itemsList",this.props.products);
    // this.loadProducts();
  }

  loadProducts = () => {
    $.ajax({
      url: '/api/bus/random/6',
      method: 'GET'
    }).then((response) => {
      console.log(response);
      this.setState({
        loadingProducts: false,
        error: '',
        products: response
      });
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
    } else if (this.state.loadingProducts) {
      return <p>loading...</p>;
    } else { // successful
      const itemList = this.state.products.map((product) =>
        <Item key={product._id} callbackClick={this.clickInChildItem} item={product}/>
      );
      return <div id="selectpage">{itemList}</div>;
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
    products: state.products
  }
}

export default connect(mapStateToProps,)(ItemList);