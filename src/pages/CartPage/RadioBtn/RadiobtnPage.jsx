import React, { Component } from 'react'
import { RadioButton } from './radiobtnStyle'
export class RadiobtnPage extends Component {
  render() {
    const {label,name,isCheck} = this.props;
    return (
        <div>
              
            <RadioButton>

              {isCheck ? <input type="radio" id={label} value={label} checked disabled/>:
              <input type="radio" id={label} name={name} value={label} disabled/>}
                <label htmlFor={name}>{label}</label>
            </RadioButton>
        </div>
    )
  }
}

export default RadiobtnPage;