import React, { Component } from 'react';
import { ProductImageWrapper,ProductImage,ProductImageContainer,ProductMainImage } from './ProductImageCrousalStyle';

export class ProductImageCrousal extends Component {
    render() {
    const { images } = this.props;

    // Function that is handling the change of the image
    const handleImageChange = (value) => {
        var x = document.getElementById("main__img");
        x.src = value;
      };


    return (
        <ProductImageContainer>
            <ProductImageWrapper>
                {images && images.map((item,index)=>(
                    <ProductImage  key={index}>
                        <img src={item} alt="" onClick={(e)=>{
                            handleImageChange(e.target.src)
                        }}/>
                    </ProductImage>
                ))}
            </ProductImageWrapper>
            <ProductMainImage>
                {images ? <img src={images[0]} alt="" id='main__img'/> : null}
                {/* <img src={images[0]} alt=""/> */}
            </ProductMainImage>

        </ProductImageContainer>
    )
  }
}

export default ProductImageCrousal