import React, { Component } from 'react';
import { ProductDataContainer,ProductBrand,ProductName,AttributeContainer,AttributeTitle,
AttributeDiv,AttributeInnerDiv,PriceText,ProductDescription } from './ProductDataStyle';
import { Radiobtn,RadioColorBtn,Button } from '../../../Components';
import { connect } from "react-redux";

import Parser from "html-react-parser";
import { addToCart } from "../../../store/reducers/cartReducer";


export class ProductData extends Component {

  constructor() {
    super();
    this.state = {
      product: {},
      selected_variation: [],
      quantity:1,
    }
  }

  render() {
    const {product} = this.props;

    // Function that is handling the add to cart functionality
    const handleAddToCart = () => {

      // The selected variation is an array which track the selected attributes but its 
      // order depends on the user click on the attributeswe need to sort them in the order we have 
      // Received from the server because we will create an unique key for the cart item to know if the 
      // Product is alredy in cart with same attributes

      // 😎 example i order shoe with id black-puma with size 42 and color black

      // The id will become black-puma+size=42+color=black now i can track weather this variation product exist

      const order = product.attributes.map((attribute) =>
        this.state.selected_variation.find((v) => v.type === attribute.id)
      );
      
      // Checking if the length of the variation is equal to the length of the attributes
      // This will ensure all the variation is selected
      if (this.state.selected_variation.length ===product.attributes.length) {
        const data = {
          variation: order,
          product: product,
          quantity: this.state.quantity,
          id:`${product.id}+${order.map((item) => `${item.type}=${item.value}`).join("+")}`
        };
        this.props.addToCart(data);
        
      } else {
        alert("Please Select all the variations or The selected variation is already exist in the cart");
      }
    };

    // Function that will handle the variation selection
    const handleVariation = (e) =>{
      let type = e.target.name;
      let value = e.target.value;

      // Checking is the selected attribute exist
      let index = this.state.selected_variation.findIndex((x)=>{
        return x.type === type
      })
       // if not exist then add it
       if(index === -1){
        this.setState({
          selected_variation: [...this.state.selected_variation, {type,value}]
        })
      }else{
        // if exist then update the value
        this.setState(prevState => ({
          selected_variation:prevState.selected_variation.map((el,ind)=> ind=== index ? {...el,value}:el)
        }))
        
      }
    }
    return (
      <ProductDataContainer>
        <ProductBrand>{product.brand}</ProductBrand>
        <ProductName>{product.name}</ProductName>
        
        {/* 😶 here in this section i have just render the prdocut attributes */}
        
        {product.attributes ? <AttributeContainer>
            {product.attributes.map((item,index)=>(
              <AttributeDiv key={index}>
                <AttributeTitle>{item.id}:</AttributeTitle>
                <AttributeInnerDiv >
                {item.items.map((attr,i)=>(
                  <div key={i}>
                    {/* there are two different looking attributes one is color and the rest is all other
                    They all look same so i conditinally render them😁  */}
                    {item.id === "Color" ? 
                    <RadioColorBtn label={attr.value} name={item.id} value={attr.value} handleVary={handleVariation} isDisabled={false} isChecked={false} size={"xl"}/>:
                    <Radiobtn key={i} label={attr.value} name={item.id} handleVary={handleVariation} isDisabled={false} isChecked={false} size={"xl"}/>
                  }
                  </div>
                ))}
                  </AttributeInnerDiv>
              </AttributeDiv>
            ))}
        </AttributeContainer>:""}
        {/* 😶 End of product Attribute section */}
        <PriceText>
          <h6>PRICE:</h6>
          {product.prices ? <p>{this.props.currencySymbol} {product.prices.find(
            (e)=>e.currency.label === this.props.currencyState
          ).amount}</p>:""}
        </PriceText>
          {product.inStock ?<Button onClick={()=>{handleAddToCart()}}>ADD TO CART</Button>:
          <Button onClick={()=>{handleAddToCart()}} disabled>Not In Stock</Button>}
        

        {product.description ? <ProductDescription>
          {Parser(product.description)}
        </ProductDescription>:""}
      </ProductDataContainer>
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


export default connect(mapStateToProps,{addToCart})(ProductData);