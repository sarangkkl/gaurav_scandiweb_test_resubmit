import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductDetail } from '../../utls/MakeQuery';
import { ProductDetailContainer } from './ProductDetailStyle';
import { ProductImageCrousal } from '../../Components';
import ProductData from './ProductData/ProductData';




export class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      loading: true,
      
    };
  }
  componentDidMount(){
    const currentUrl = window.location.pathname;
    const id = currentUrl.replace("/", "");
    
    getProductDetail(id).then((response)=>{
      this.setState({product:response.data.product,loading:false})
    })
    
  }

  render() {
    return (
      <>
        {this.state.product ? <ProductDetailContainer>
              {this.state.product ? <ProductImageCrousal images={this.state.product.gallery} inStock={this.state.product.inStock}/> : null}
              {this.state.product ? <ProductData product={this.state.product} /> : null}
        </ProductDetailContainer>:""}

      </>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    product: state.product.category,
  };
};

export default connect(mapStateToProps,{})(ProductDetail);