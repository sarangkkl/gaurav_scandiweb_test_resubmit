import React, { Component } from 'react'
import { MiniProductImageContainer,MainProductImg } from './MiniProductImageStyle'
export class MiniProductImage extends Component {
  render() {
    const {gallery} = this.props.product;
    return (
      <MiniProductImageContainer>
        <MainProductImg>
          <div >
            <img src={gallery[0]} alt="" id='main__img'/>

          </div>
        </MainProductImg>
      </MiniProductImageContainer>
    )
  }
}

export default MiniProductImage