import React from 'react';
import $ from 'jquery';
import { Item } from './Item';

export class ItemList extends React.Component {
  state = {
    loadingProducts: false,
    error: '',
    products: []
  }

  componentDidMount() {
    this.setState({ loadingProducts: true, error: '' });
    this.loadProducts();
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
        <li><Item item={product}/></li>
      );
      return <ul>{itemList}</ul>;
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