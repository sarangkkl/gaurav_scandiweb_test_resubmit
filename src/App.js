import React, { Component } from 'react';
import { getProducts } from './utls/MakeQuery';
import { setProducts } from './store/reducers/productReducer';
import { connect } from 'react-redux';
import { Navbar } from './Components';
import { ProductDetail,ProductListing,CartPage } from './pages'
import { Routes, Route, Navigate } from "react-router-dom";


export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      products:[],
      categoryId:"",
    }
  }
  componentDidMount(){
    getProducts().then(data =>{
      this.setState({
        products:data.data.categories
      })
      this.props.setProducts(data.data.categories)
     
    })
  }
  render() {
    return (
      <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Navigate replace to="/all" />} />
            {this.props.product && this.props.product.map((item,index)=>(
              <Route path={`${item.name}`} element={<ProductListing  key={`${index}`}/>}  key={index}/>
            ))}
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/:id" element={<ProductDetail />} />
          </Routes>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.category,
  };
};
export default connect(mapStateToProps,{setProducts})(App)