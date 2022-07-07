import React, { Component } from 'react';
import { OverlayCartContainer,OverlayCartHeader,TotalContainer,
  ActionSection,ViewBagButton,CheckoutButton,CartCount,NavbarItem,OverlayContainerWrapper,
  NavbarItemIcon } from './OverlayCartStyle';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { OverlayCartbody } from '../../';


export class OverlayCart extends Component {

  constructor(){
    super();
    this.state={
      isCartActive:false,
      ref: React.createRef(null),
    }
  }

  handleHideDropdown = (event) => {
    if (event.key === 'Escape') {
      this.setState({ isCartActive: false });
    }
  }

  handleClickOutside = (event) => {
    if (this.state.ref.current && !this.state.ref.current.contains(event.target)) {
      
      this.setState({ isCartActive: false });
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

  // Function that will show the cart
  handleCartActive(){
    this.setState({
      isCartActive:!this.state.isCartActive
    })
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
      <NavbarItem ref={this.state.ref}>
        <NavbarItemIcon src="/assets/images/empty.png" alt="cart" onClick={()=>{this.handleCartActive()}}/>
                  {getTotalItem() ===0 ? "": <CartCount><span>{getTotalItem()}</span></CartCount>}
                  {this.state.isCartActive && <OverlayContainerWrapper> <OverlayCartContainer >
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

        </OverlayCartContainer></OverlayContainerWrapper> }
      

      
      </NavbarItem>

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