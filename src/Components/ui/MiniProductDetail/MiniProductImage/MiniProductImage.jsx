import React, { Component } from 'react'
import { MiniProductImageContainer,ImageArrayContainer,MainProductImg } from './MiniProductImageStyle'
export class MiniProductImage extends Component {
  render() {
    const {gallery} = this.props.product;

    // Function that is handling the change of the image
    const handleImageChange = (value) => {
        var x = document.getElementById("main__img");
        x.src = value;
      };
    return (
      <MiniProductImageContainer>
        <MainProductImg>
          <div >
            <img src={gallery[0]} alt="" id='main__img'/>

          </div>
        </MainProductImg>
        <ImageArrayContainer>
            {gallery.map((item,index)=>(
                <img key={index} src={item} alt="" onClick={(e)=>{
                    handleImageChange(e.target.src)
                }}/>
            ))}
        </ImageArrayContainer>

      </MiniProductImageContainer>
    )
  }
}

export default MiniProductImage