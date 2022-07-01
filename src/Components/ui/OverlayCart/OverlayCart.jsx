import React, { Component } from 'react';
import { OverlayCartContainer,OverlayCartHeader,TotalContainer,
  ActionSection,ViewBagButton,CheckoutButton } from './OverlayCartStyle';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { OverlayCartbody } from '../../'


export class OverlayCart extends Component {

  constructor(){
    super();
    this.state={
      isComponentVisible: true,
      ref: React.createRef(null),
    }
  }

  handleHideDropdown = (event) => {
    if (event.key === 'Escape') {
      this.setState({ isComponentVisible: false });
    }
  }

  handleClickOutside = (event) => {
    if (this.state.ref.current && !this.state.ref.current.contains(event.target)) {
      
      this.setState({ isComponentVisible: false });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleHideDropdown, true);
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleHideDropdown, true);
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  render() {
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
      

      {this.state.isComponentVisible && <OverlayCartContainer ref={this.state.ref}>
        <OverlayCartHeader>
                My Bag,   <span>{getTotalItem()} items</span>
        </OverlayCartHeader>
              <OverlayCartbody cartItem ={this.props.cart}/>
            <TotalContainer>
              <p>Total</p>
              <h6>{this.props.currencySymbol} {getTotalPrice(this.props.currencyState)}</h6>
            </TotalContainer>
            <ActionSection>
              <Link to={"/cart"}><ViewBagButton>VIEW BAG</ViewBagButton></Link>
              <CheckoutButton>CHECKOUT</CheckoutButton>
            </ActionSection>

        </OverlayCartContainer>}
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
export default connect(mapStateToProps)(OverlayCart);