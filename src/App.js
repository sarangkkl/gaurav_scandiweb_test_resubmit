import React, { Component } from 'react';
import { getCategories } from './utls/MakeQuery';
import { setCategories } from './store/reducers/productReducer';
import { connect } from 'react-redux';
import { Navbar } from './Components';
import { ProductDetail,ProductListing,CartPage } from './pages'
import { Routes, Route, Navigate } from "react-router-dom";


export class App extends Component {
  
  componentDidMount(){
    getCategories().then(data =>{
      this.props.setCategories(data.data.categories)
    })
  }
  render() {
    return (
      <>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Navigate replace to="/all" />} />
            {this.props.categories && this.props.categories.map((item,index)=>(
              <Route path={`${item.name}`} element={<ProductListing  key={`${index}`}/>}  key={index}/>
            ))}
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/:id" element={<ProductDetail />} />
          </Routes>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.product.category,
  };
};
export default connect(mapStateToProps,{setCategories})(App)