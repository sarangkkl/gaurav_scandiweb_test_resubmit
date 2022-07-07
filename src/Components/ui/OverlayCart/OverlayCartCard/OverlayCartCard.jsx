import React, { Component } from 'react';
import { CartCardWrapper,CartCardHeader,CartCardAction,CartCardImg,
 AttributeCard,CartHeaderWrapper,Attributediv} from './OverlayCartCardStyle';
import { RadioColorBtn,Radiobtn } from '../../../';
import { addToCart,removeFromCart,decreaseQuantity } from '../../../../store/reducers/cartReducer';
import { connect } from 'react-redux';

export class OverlayCartCard extends Component {
  render() {
    const { item,uniqueKey } = this.props;
    // Function handleing the add to cart action
    const add_cart = ()=>{
      this.props.addToCart(item);
    }
    // Function handleing the remove from cart action
    const remove_cart = ()=>{
      this.props.decreaseQuantity(item);
    }

    return (
      <CartCardWrapper>
        <CartHeaderWrapper>
          <CartCardHeader>
              <h6>{item.product.brand}</h6>
              <p>{item.product.name}</p>
              <h5>{this.props.currencySymbol} {(item.product.prices.find(
                (e)=>e.currency.label === this.props.currencyState
              ).amount).toFixed(2)}</h5>
          </CartCardHeader>

                {item.product.attributes.map((attr,index)=>(
                    <div key={index}>

                       {attr.name === "Color" ? <AttributeCard>
                            <h6>{attr.id}:</h6>
                          <Attributediv>

                          {attr.items.map((attrItem,ind)=>(
                            <div key={ind}>
                              {item.variation[index].value===attrItem.value ? <RadioColorBtn label={attrItem.value} name={attr.name} value={attrItem.value} isChecked={true} size="sm"/> 
                              : <RadioColorBtn label={attrItem.value} name={attr.name} value={attrItem.value} isCheck={false} size="sm"/>}
                            </div>
                          ))}
                          </Attributediv>
                       </AttributeCard>
                       :<AttributeCard>
                            <h6>{attr.id}:</h6>
                            <Attributediv>
                              {attr.items.map((attrItem,ind)=>(
                                <div key={ind}>
                                  {item.variation[index].value===attrItem.value ? <Radiobtn label={attrItem.value} name={`${attr.name}${uniqueKey}`} isChecked={true} size="sm" isDisabled={true}/>
                                  :<Radiobtn label={attrItem.value} name={`${attr.name}${uniqueKey}`} isCheck={false} size="sm" isDisabled={true}/>}
                                </div>
                              ))}

                            </Attributediv>
                        </AttributeCard>} 
                    </div>

                    
                ))}        
        </CartHeaderWrapper>
        
        
        <CartCardAction>
          <div>
            <button onClick={()=>{add_cart()}}>+</button>
          </div>
          <div>
            <p>{item.quantity}</p>
          </div>
          <div>
            <button onClick={()=>{remove_cart()}}>-</button>
          </div>
        </CartCardAction>

        <CartCardImg>
          <img src={item.product.gallery[0]} alt="" />
        </CartCardImg>

      </CartCardWrapper>
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

export default connect(mapStateToProps,{addToCart,removeFromCart,decreaseQuantity})(OverlayCartCard);