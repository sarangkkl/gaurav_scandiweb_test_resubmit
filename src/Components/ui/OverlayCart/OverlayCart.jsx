import React, { Component } from 'react';
import { CartCount,NavbarItem,NavbarItemIcon,DisableNavbarItemIcon } from './OverlayCartStyle';
import { connect } from 'react-redux';
import { ClickOutsideHandler } from '../../'
import OverlayCartWrapperContainer from './OverlayCartWrapperContainer';

export class OverlayCart extends Component {

  constructor(){
    super();
    this.state={
      isCartActive:false,
    }
  }
  

  render() {
    // Function that will show the cart
  const handleCartActive = (e)=>{
    
    this.setState({
      isCartActive:!this.state.isCartActive
    })
    // console.log('handleCartActive',);
  }
    // Function whose purpose of life to get the totalitems in the cart
    const getTotalItem = () =>{
      let totalItem = 0;
      this.props.cart.forEach(item => {
        totalItem += item.quantity;
      });
      return totalItem;
    }

    
    return (
      <NavbarItem >
        {/* here on base of isCartActive i am rendering DisableNavbarItemIcon to avoid multiple triggering of 
        handleCartActive function */}
        {this.state.isCartActive ? <DisableNavbarItemIcon src="/assets/images/empty.png" alt="InactiveIcons"/>:
        <NavbarItemIcon src="/assets/images/empty.png" alt="cart" onClick={(e)=>{handleCartActive(e)}}/>}
                  {getTotalItem() ===0 ? "": <CartCount><span>{getTotalItem()}</span></CartCount>}
                  {this.state.isCartActive && <OverlayCartWrapperContainer toggleCart={handleCartActive}/> }
      </NavbarItem>

    )
  }
}


const  mapStateToProps = (state) =>{
  return {
      cart:state.cart.cart.cartItems
  }
}
export default connect(mapStateToProps)(OverlayCart);