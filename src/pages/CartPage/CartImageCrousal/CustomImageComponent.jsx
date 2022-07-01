import React, { Component } from 'react';
import { CustomImage,HideImages } from './CartImageStyle';

export class CustomImageComponent extends Component {
  render() {
    const { item } = this.props;
    return (
      <>
        
        {this.props.type==="DEC" ? <CustomImage src={this.props.src} back/>
        :<CustomImage src={this.props.src} />}

        {/* Doing this because  having delay in loading the images while changing the crousal which 
        was a bad experience for the user it will have display none  */}
        <HideImages>
          {item.map((item,index)=>(
            <img src={item} alt={item} key={index} />
          ))}
        </HideImages>
        
      </>
    )
  }
}

export default CustomImageComponent