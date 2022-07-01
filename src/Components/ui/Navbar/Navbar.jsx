import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { NavbarWrapper,NavItemContainer,NavbarItem,CurrencyBtn,CartCount } from './NavbarStyle';
import {CurrencyDropdown,OverlayCart} from '../../';
import { toggleCurrency } from '../../../store/reducers/currencyReducers';



export class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      isActiveCurrency:false,
      isCartActive:false,
    };
  }

  componentDidMount(){
    this.props.toggleCurrency("USD+$");
  }

  
  // Function that will show the currency selector
  handleCurrencyActive(){
    this.setState({
      isActiveCurrency:!this.state.isActiveCurrency
    })
  }

  // Function that will show the cart

  handleCartActive(){
    this.setState({
      isCartActive:!this.state.isCartActive
    })
  }
  render() {

    const getTotalItem = () =>{
      let totalItem = 0;
      this.props.cart.forEach(item => {
        totalItem += item.quantity;
      });
      return totalItem;
    }

    return (
      <NavbarWrapper>
        <NavItemContainer>
            {this.props.product && this.props.product.map((item,index)=>(
                <NavbarItem key={index}>
                    <NavLink to={`/${item.name}`} className={({ isActive }) => isActive? "active": ''}>{item.name[0].toUpperCase()+item.name.substring(1)}</NavLink>
                </NavbarItem>
            ))}
        </NavItemContainer>
        <NavItemContainer>
              <img src="/assets/images/old-logo.png" alt="" />
        </NavItemContainer>

        <NavItemContainer>
              <NavbarItem>
                 <CurrencyBtn onClick={()=>{this.handleCurrencyActive()}}>
                 {this.props.currencySymbol}    {this.state.isActiveCurrency ? "⮝":"⮟"}
                 </CurrencyBtn>
                  {this.state.isActiveCurrency && <CurrencyDropdown/> }
              </NavbarItem>
              <NavbarItem >
                  <img src="/assets/images/empty.png" alt="cart" onClick={()=>{this.handleCartActive()}}/>
                  {getTotalItem() ===0 ? "": <CartCount><span>{getTotalItem()}</span></CartCount>}
                  {this.state.isCartActive && <OverlayCart/> }
              </NavbarItem>
        </NavItemContainer>
      </NavbarWrapper>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      product: state.product.category,
      currencyState:state.currency.currencyState,
      currencySymbol:state.currency.currencySymbol,
      cart:state.cart.cart.cartItems
    };
  };
export default connect(mapStateToProps, {toggleCurrency})(Navbar);