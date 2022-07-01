import React, { Component } from "react";
import { RadioColorBtnWrapper } from './RadioColorBtnStyle'

export class RadioColorBtn extends Component {
  render() {
    const { label, name, value,handleVary,isDisabled,isChecked,size } = this.props;
    return (
      <>
      {isDisabled ? <RadioColorBtnWrapper backgroundColor={value} size={size}>
          {isChecked ? <input type="radio" id={label} name={name} value={label} onChange={(e)=>{handleVary(e)}} checked disabled/>:
          <input type="radio" id={label} name={name} value={label} onChange={(e)=>{handleVary(e)}} disabled/>}
          <label htmlFor={label}></label> 
      </RadioColorBtnWrapper>:
      <RadioColorBtnWrapper backgroundColor={value} size={size}>
          {isChecked ? <input type="radio" id={label} name={name} value={label} onChange={(e)=>{handleVary(e)}} checked/>:
          <input type="radio" id={label} name={name} value={label} onChange={(e)=>{handleVary(e)}}/>}
          <label htmlFor={label}></label> 
      </RadioColorBtnWrapper>}
  </>
      
    );
  }
}

export default RadioColorBtn;
