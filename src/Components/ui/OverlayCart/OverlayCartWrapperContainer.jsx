import React, { Component } from 'react';
import { OverlayCartContainer,OverlayCartHeader,TotalContainer,
  ActionSection,ViewBagButton,CheckoutButton,OverlayContainerWrapper,} from './OverlayCartStyle';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { OverlayCartbody } from '../../';

export class OverlayCartWrapperContainer extends Component {
    constructor(){
        super();
        this.state={
          ref: React.createRef(null),
          actionRef: React.createRef(null),
        }
      }
      
      
      handleHideDropdown = (event) => {
        if (event.key === 'Escape') {
          this.props.toggleCart(event);
        }
      }
    
      handleClickOutside = (event) => {
        if (this.state.ref.current && !this.state.ref.current.contains(event.target)) {
            this.props.toggleCart(event);
        }

        
      }
    
      componentDidMount() {
        document.addEventListener('keydown', this.handleHideDropdown, true);
        document.addEventListener('mousedown', this.handleClickOutside, true);
      }
    
      componentWillUnmount(){
        document.removeEventListener('keydown', this.handleHideDropdown, true);
        document.removeEventListener('mousedown', this.handleClickOutside, true);
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
          
        });
        return parseFloat(totalPrice).toFixed(2);
      }

    return (
        <OverlayContainerWrapper > <OverlayCartContainer ref={this.state.ref}>
        <OverlayCartHeader>
                My Bag,   <span>{getTotalItem()} items</span>
        </OverlayCartHeader>
              <OverlayCartbody cartItem ={this.props.cart}/>
            <TotalContainer>
              <p>Total</p>
              <h6>{this.props.currencySymbol} {getTotalPrice(this.props.currencyState)}</h6>
            </TotalContainer>
            <ActionSection >
            <Link to={"/cart"} ><ViewBagButton onClick={(e)=>{this.props.toggleCart(e)}}>VIEW BAG</ViewBagButton></Link>  
              <CheckoutButton>CHECKOUT</CheckoutButton>
            </ActionSection>
          </OverlayCartContainer>
        </OverlayContainerWrapper>
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

export default connect(mapStateToProps)(OverlayCartWrapperContainer);