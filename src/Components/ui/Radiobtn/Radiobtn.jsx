import React, { Component } from 'react'
import { RadioButton } from '../../basicui/basicui'
export class Radiobtn extends Component {
  render() {
    const {label,name,handleVary,isDisabled,isChecked,size} = this.props;
    return (
        <div>
            {isDisabled ?<RadioButton size={size}>
                {isChecked ? <input type="radio" id={`${name}${label}`} name={name} value={label} disabled checked/>:
                <input type="radio" id={`${name}${label}`} name={name} value={label} disabled/>}  
                <label htmlFor={`${name}${label}`}>{label}</label> 
            </RadioButton>:
            <RadioButton size={size}>
                {isChecked ? <input type="radio" id={`${name}${label}`} name={name} value={label} onChange={(e)=>handleVary(e)} checked/>:
                <input type="radio" id={`${name}${label}`} name={name} value={label} onChange={(e)=>handleVary(e)}/>}
                <label htmlFor={`${name}${label}`}>{label}</label> 
        </RadioButton>}
            
        </div>
    )
  }
}

export default Radiobtn