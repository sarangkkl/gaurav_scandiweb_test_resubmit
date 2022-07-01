import React, { Component } from 'react';
import { PageTitle } from '../../Components/basicui/basicui';
import { connect } from 'react-redux';
import { FooterData } from './CartPageStyle'
import CartPageCard from './CartPageCard/CartPageCard';


export class CartPage extends Component {
  render() {
    const { cart } = this.props;
    // Function whose purpose of life to get the totalitems in the cart
    const getTotalItem = () =>{
      let totalItem = 0;
      this.props.cart.forEach(item => {
        totalItem += item.quantity;
      });
      return totalItem;
    }

    const getTotalPrice = (curren)  =>{
      let totalPrice = 0;
      this.props.cart.forEach(item => {
        let price =item.product.prices.find(
                  (e) => e.currency.label === curren
                ).amount
        totalPrice = totalPrice + item.quantity*price
        // totalPrice += item.price;
      });
      return parseFloat(totalPrice).toFixed(2);
    }
    return (
      <>
        
        <PageTitle>CART</PageTitle>
        {cart && cart.map((item,index)=>(
          <CartPageCard key={index} item={item} uniqueKey={index}/>
        ))}

        {this.props.currencyState ? <FooterData>
          <h4>TAX 21% :{this.props.currencySymbol} {parseFloat(getTotalPrice(this.props.currencyState)*.21).toFixed(2)}</h4>
          <h4>Quantity :{getTotalItem()}</h4>
          <h3>Total: {this.props.currencySymbol} {(Number(parseFloat(getTotalPrice(this.props.currencyState)*.21).toFixed(2))+Number(getTotalPrice(this.props.currencyState))).toFixed(2)}</h3>
          <button>ORDER</button>
        </FooterData>:""}

      </>
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
export default connect(mapStateToProps)(CartPage)