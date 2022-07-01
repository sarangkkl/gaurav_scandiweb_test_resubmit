import React, { Component } from "react";
import { RadioColorBtnWrapper } from './radiobtnStyle'

export class RadioColorBtnPage extends Component {
  render() {
    const { label, name, value,isCheck } = this.props;
    return (
      <RadioColorBtnWrapper backgroundColor={value}>
        {isCheck ? <input type="radio" id={label} value={label} checked disabled/>:
        <input type="radio" id={label} name={name} value={label} disabled/>}
        <label htmlFor={label}></label> 
      </RadioColorBtnWrapper>
    );
  }
}

export default RadioColorBtnPage;
