import React from 'react';
import Item from '../components/Item';
import { initItems } from '../actions/item';
import { push } from 'react-router-redux';

class ItemList extends React.Component {
  constructor(){
    super();
    this.state = {
      loadingProducts: true,
    }
  }
  clickInChildItem = ( item ) => {
    this.props.dispatch({type:'SELECT_ORDER',order:item});
    this.props.dispatch(push('/bus'));
    console.log("Clicked! " + item);
  }
  componentDidMount() {
    this.loadProducts();
  }
  loadProducts = () => {
    fetch('/api/bus/all',{medtho:'GET'}).then((response) => response.json())
    .then((responseJson) => {
      console.log("res",responseJson);
      this.setState({loadingProducts:false});
      this.props.dispatch(initItems(responseJson));
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  

  getProductsContent = () => {
    if(this.state.loadingProducts){
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
        <div>
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

export default ItemList;