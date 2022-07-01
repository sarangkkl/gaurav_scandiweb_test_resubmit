import React, { Component } from "react";
import {Card} from "./CartPageCardStyle";
import { connect } from "react-redux";
import {addToCart,removeFromCart,decreaseQuantity} from "../../../store/reducers/cartReducer";
import CartImageCrousal from "../CartImageCrousal/CartImageCrousal";
import ProdData from "./ProdData";

export class CartPageCard extends Component {
  render() {
    const { item,uniqueKey  } = this.props;
    // const { product } = item;
    return (
      <>
      <Card>
        <ProdData item={item} uniqueKey={uniqueKey}/>
        <CartImageCrousal item={item} uniqueKey={uniqueKey}/>
      </Card>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currencyState: state.currency.currencyState,
    currencySymbol: state.currency.currencySymbol,
    cart: state.cart.cart.cartItems,
  };
};

export default connect(mapStateToProps, {addToCart,decreaseQuantity,removeFromCart})(CartPageCard);
