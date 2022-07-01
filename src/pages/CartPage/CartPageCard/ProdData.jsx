import React, { Component } from 'react';
import {Productdata,AttributeCard,Attributediv,} from "./CartPageCardStyle";
import RadioColorBtnPage from "../RadioBtn/RadioColorBtnPage";
import RadiobtnPage from "../RadioBtn/RadiobtnPage";
import { connect } from "react-redux";

export class ProdData extends Component {
  render() {
    const { item,uniqueKey } = this.props;
    const { product } = item;
    
    return (
      <>
        <Productdata>
          <h3>{product.name}</h3>
          <h4>{product.brand}</h4>
          <p>
            {this.props.currencySymbol}
            {" "}{this.props.currencyState &&
              product.prices.find(
                (e) => e.currency.label === this.props.currencyState
              ).amount
            }
          </p>
          {/* 😶 Attribute render section start here */}
          
          {product.attributes.map((attr, index) => (
            <div key={index}>
              {attr.name === "Color" ? (
                <AttributeCard>
                  <h6>{attr.id}:</h6>
                  <Attributediv>
                    {attr.items.map((attrItem, ind) => (
                      <div key={ind}>
                        {item.variation[index].value === attrItem.value ? (
                          <RadioColorBtnPage label={attrItem.value} name={attr.name} value={attrItem.value} isCheck={true}
                          />
                        ) : (
                          <RadioColorBtnPage label={attrItem.value} name={attr.name} value={attrItem.value} isCheck={false}/>
                        )}
                      </div>
                    ))}
                  </Attributediv>
                </AttributeCard>
              ) : (
                <AttributeCard>
                  <h6>{attr.id}:</h6>
                  <Attributediv>
                    {attr.items.map((attrItem, ind) => (
                      <div key={ind}>
                        {item.variation[index].value === attrItem.value ? (
                          <RadiobtnPage label={attrItem.value} name={`${attr.name}${index}`} isCheck={true}/>
                        ) : (
                          <RadiobtnPage label={attrItem.value} name={`${attr.name}${uniqueKey}`} isCheck={false}/>
                        )}
                      </div>
                    ))}
                  </Attributediv>
                </AttributeCard>
              )}
            </div>
          ))}
        {/* 😶 Attribute render section start here */}
        </Productdata>
      </>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      currencyState: state.currency.currencyState,
      currencySymbol: state.currency.currencySymbol,
      cart: state.cart.cart.cartItems,
    };
  };

export default connect(mapStateToProps)(ProdData);