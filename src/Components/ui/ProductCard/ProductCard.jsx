import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MiniProductDetail } from '../MiniProductDetail/MiniProductDetail';
import { ProductCardBody,ProductCardContainer,ProductCardTitle,ProductCardPrice,
  ProductBuyLogo,ProductBuyImage,DisableContainer } from './ProductCardStyle'
export class ProductCard extends Component {

  constructor(){
    super();
    this.state = {
      showMiniProductDetail: false
    }
  }

  render() {
    const {id,name,brand,gallery,inStock,prices} = this.props.product;

   const handleShowProductDetail = () => {
      this.setState({
        showMiniProductDetail: !this.state.showMiniProductDetail
      })
    }

    return (
      <ProductCardBody>
        <ProductCardContainer>
          {inStock ? <Link to={`/${id}`}><img src={gallery[0]} alt="" /></Link>:
          <DisableContainer ><Link to={`/${id}`}><img src={gallery[0]} alt="" /></Link>
            <h4>OUT OF STOCK</h4>
          </DisableContainer>}
        </ProductCardContainer>
        <ProductCardContainer>
          
            
            <ProductCardTitle><Link to={`/${id}`}>{brand} {name}</Link></ProductCardTitle>
            <ProductCardPrice><Link to={`/${id}`}>{this.props.currencySymbol} {(prices.find(
            (e)=>e.currency.label === this.props.currencyState).amount).toFixed(2)}</Link></ProductCardPrice>
          
          
        </ProductCardContainer>
        <ProductBuyLogo >
          {inStock ? <ProductBuyImage src="/assets/images/cart.png" alt="" onClick={()=>{handleShowProductDetail()}}/>:
          <ProductBuyImage src="/assets/images/cart.png" alt=""/>}
        </ProductBuyLogo>
          {this.state.showMiniProductDetail && <MiniProductDetail product={this.props.product} hide={handleShowProductDetail}/>}
      </ProductCardBody>
    )
  }
}


const  mapStateToProps = (state) =>{
  return {
      currencyState:state.currency.currencyState,
      currencySymbol:state.currency.currencySymbol,
      cart:state.cart.cart.cartItems
  }
}


export default connect(mapStateToProps)(ProductCard);