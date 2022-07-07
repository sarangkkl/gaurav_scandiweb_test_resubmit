import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { NavbarWrapper,NavItemContainer,NavbarItem } from './NavbarStyle';
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
  render() {

    

    return (
      <NavbarWrapper>
        <NavItemContainer>
            {this.props.category && this.props.category.map((item,index)=>(
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
                <CurrencyDropdown/>
              </NavbarItem>
              <NavbarItem >
                <OverlayCart/> 
              </NavbarItem>
        </NavItemContainer>
      </NavbarWrapper>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      category: state.product.category,
      currencyState:state.currency.currencyState,
      currencySymbol:state.currency.currencySymbol,
      cart:state.cart.cart.cartItems,
    };
  };
export default connect(mapStateToProps, {toggleCurrency})(Navbar);