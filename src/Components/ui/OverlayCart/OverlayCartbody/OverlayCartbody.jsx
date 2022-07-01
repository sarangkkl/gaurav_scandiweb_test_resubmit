import React, { Component } from 'react';
import OverlayCartCard from '../OverlayCartCard/OverlayCartCard';
import { OverlayCartBodyWrapper } from './OverlayCartbodyStyle'
export class OverlayCartbody extends Component {
  render() {
    const { cartItem } = this.props;
    return (
      <OverlayCartBodyWrapper>
        {cartItem.map((item,index)=>(
          <OverlayCartCard key={index} item={item} uniqueKey={index}/>
        ))}
        
      </OverlayCartBodyWrapper>
    )
  }
}

export default OverlayCartbody