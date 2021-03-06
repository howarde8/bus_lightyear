import React from 'react';
import Product from '../components/Product';

class ProductList extends React.Component {
  constructor(){
    super();
    this.state = {
      loadingProducts: true,
    }
  }
  clickInChildItem = ( item ) => {
    // this.props.dispatch({type:'SELECT_ORDER',order:item});
    // this.props.dispatch(push('/bus'));
    this.props.selectItem(item);
    this.props.link('/bus');
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
      this.props.initItems(responseJson);
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
          return(<Product key={index} callbackClick={this.clickInChildItem} item={product}/>)
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

export default ProductList;