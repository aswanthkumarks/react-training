import React from 'react';
import ProductItem from './product/product-item';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from './product/product-details';
import NewProduct from './product/product-new';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.newProduct = this.newProduct.bind(this);
  }

  componentDidMount() {
    this.setState({
      products: [
        { name: 'Book', path: '/product/book' },
        { name: 'Book1', path: '/product/book1' },
        { name: 'Book2', path: '/product/book2' },
        { name: 'Book3', path: '/product/book3' },
      ]
    })
  }

  newProduct(newItem) {
    this.setState({
      products: [
        ...this.state.products,
        newItem
      ]
    });
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    let { products } = this.state;
    return (
      <Router>
        <div className="row">
          <div className="col-md-4">
            <h1>Products</h1>
            <div>
              <NewProduct saveProduct={this.newProduct} />
            </div>
            {
              products.map(item => <ProductItem key={item.path} item={item} />)
            }
          </div>
          <div className="col-md-8">
            <Switch>
              <Route path='/product/:productId' component={ProductDetails} />
           </Switch>
          </div>
        </div>
      </Router>
      );
  }
}

export default Product;
