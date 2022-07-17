import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MiniProductDetail } from '../MiniProductDetail/MiniProductDetail';
import { ProductCardBody,ProductCardContainer,ProductCardTitle,ProductCardPrice,
  ProductBuyLogo,ProductBuyImage,DisableContainer } from './ProductCardStyle';

import { addToCart } from '../../../store/reducers/cartReducer'

export class ProductCard extends Component {

  constructor(){
    super();
    this.state = {
      showMiniProductDetail: false,
      selected_variation: [],
      quantity: 1
    }
  }

  render() {
    const {id,name,brand,gallery,inStock,prices,attributes} = this.props.product;

   const handleShowProductDetail = () => {
      this.setState({
        showMiniProductDetail: !this.state.showMiniProductDetail
      })
    }

    // Function that is handling the add to cart functionality
    const handleAddToCart = () => {
      const data = {
        product: this.props.product,
        quantity: this.state.quantity,
        id:`${id}`
      };
      this.props.addToCart(data);
      // 
      
    };

    return (
      <ProductCardBody>
        <ProductCardContainer>
          {inStock ? <Link to={`/${id}`}><img src={gallery[0]} alt="" /></Link>:
          <DisableContainer ><Link to={`/${id}`}><img src={gallery[0]} alt="" /></Link>
            <Link to={`/${id}`}><h4 >OUT OF STOCK</h4></Link>
          </DisableContainer>}
        </ProductCardContainer>
        <ProductCardContainer>
          
            
            <ProductCardTitle><Link to={`/${id}`}>{brand} {name}</Link></ProductCardTitle>
            <ProductCardPrice><Link to={`/${id}`}>{this.props.currencySymbol} {(prices.find(
            (e)=>e.currency.label === this.props.currencyState).amount).toFixed(2)}</Link></ProductCardPrice>
          
          
        </ProductCardContainer>
        <ProductBuyLogo >
          {inStock ? <div>
            {/* Here i have first check if product is in stock if that in stock i check if it have attributes
            so that i cant decide wheather i had to show quickshop or not */}

            {attributes.length > 0 ? <ProductBuyImage src="/assets/images/cart.png" alt="" onClick={()=>{handleShowProductDetail()}}/>:
            <ProductBuyImage src="/assets/images/cart.png" alt="" onClick={()=>{handleAddToCart()}}/>}
          </div>:
          // Product not in stock just not able to add to cart
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
      
  }
}


export default connect(mapStateToProps,{addToCart})(ProductCard);