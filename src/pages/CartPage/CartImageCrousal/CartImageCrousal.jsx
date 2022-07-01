import React, { Component } from 'react';
import { ActionContainer,ActionButtonDiv,ProductImage,CrousalButtons, } from './CartImageStyle';
import { connect } from 'react-redux';
import { addToCart,decreaseQuantity } from '../../../store/reducers/cartReducer';
import CustomImageComponent from './CustomImageComponent';


export class CartImageCrousal extends Component {
  
  constructor() {
    super();
    this.state = {
      type: "",
      index__count: 0,
    };
  }

  render() {
    const { item  } = this.props;
    const {gallery} = this.props.item.product;

    // THis function handle addto cart functionality
    const add_cart = () => {
      this.props.addToCart(item);
    };

    // This function handle decrease quantity functionality
    const remove_cart = () => {
      this.props.decreaseQuantity(item);
    };


    // This function handle change image change functionality I am just changing the image in the source using
    // index__count variable The type is also a state variable which i am passing as a props to 
    //govern which direction i need to show animation
    const toggleImg = (type) => {
      if (type === "INC")
      {
        if(this.state.index__count === item.product.gallery.length - 1){
          this.setState({
            index__count: 0,
            type:"INC",
          })
        }else{
            this.setState({
              type:"INC",
              index__count: this.state.index__count + 1,
            })
        }
      } else if (type === "DEC") {
        if(this.state.index__count === 0){
          this.setState({
            index__count: item.product.gallery.length - 1,
            type:"DEC",
          })
        }else{
          this.setState({
            index__count: this.state.index__count - 1,
            type:"DEC",
          });

        }
      }
    };
    return (
      <ActionContainer>
        <ActionButtonDiv>
          <div>
            <button onClick={()=>{add_cart()}}>+</button>
          </div>
          <div>
            <p>{item.quantity}</p>
          </div>
          <div>
            <button onClick={()=>{remove_cart()}}>-</button>
          </div>
        </ActionButtonDiv>


        <div>
            <ProductImage>
              {/* IF type Dec i will pass prop type which will make the animation
               backside else the animation will be forward */}
              {this.state.type==="DEC" ?<CustomImageComponent src={gallery[this.state.index__count]} key={this.state.index__count} type="DEC" item={gallery}/>:
              <CustomImageComponent src={gallery[this.state.index__count]} key={this.state.index__count} item={gallery}/>}
              

              {/* REnder button only if image more than one */}
            {item.product.gallery.length > 1 && <CrousalButtons>
              <button onClick={() => toggleImg("DEC")}>˂</button>
              <button onClick={() => toggleImg("INC")}>˃</button>
            </CrousalButtons>} 
            </ProductImage>
        </div>
      </ActionContainer>
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
export default connect(mapStateToProps, {addToCart,decreaseQuantity}) (CartImageCrousal)