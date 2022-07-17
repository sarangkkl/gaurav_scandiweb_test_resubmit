import React, { Component } from 'react';
import { InputWrapper } from '../../basicui/basicui';
import { connect } from 'react-redux';
import { toggleCurrency } from '../../../store/reducers/currencyReducers'

export class SelectInput extends Component {


  
  render() {
      const { label,value,hide } = this.props;
      //  Function That will change the currency state globally
  const handleToggleCurrency =(value)=>{
    this.props.toggleCurrency(value)
    hide()
  }
    return (
      <InputWrapper>
            <input type="radio" value={value} id={label} name='cate' onChange={(e)=>{handleToggleCurrency(e.target.value)}}/>
            <label htmlFor={label}>{label}</label>
      </InputWrapper>
    )
  }
}

const  mapStateToProps = (state) =>{
  return {
      currencyState:state.currency.currencyState,
  }
}

export default connect(mapStateToProps,{toggleCurrency})(SelectInput)