import React, { Component } from "react";
import { SelectWrapper,NavbarItem,CurrencyBtn } from "./CurrencyDropdownStyle";
import { getCurrency } from "../../../utls/MakeQuery";
import { connect } from 'react-redux'
import { SelectInput } from '../../';
import { toggleCurrency } from '../../../store/reducers/currencyReducers'

export class CurrencyDropdown extends Component {
  constructor() {
    super();
    this.state = {
      currency: [],
      isComponentVisible: true,
      isActiveCurrency:false,
      ref: React.createRef(null),
    };
  }

  handleHideDropdown = (event) => {
    if (event.key === 'Escape') {
      this.setState({ isComponentVisible: false });
    }
  }

  handleClickOutside = (event) => {
    if (this.state.ref.current && !this.state.ref.current.contains(event.target)) {
      this.setState({
        isActiveCurrency:!this.state.isActiveCurrency
      })
      
    }
  }

  componentDidMount() {
    getCurrency()
      .then((res) => {
        this.setState({
          currency: res.data.currencies,
        });
        this.props.toggleCurrency("USD+$");
      })
      .catch((err) => {
        console.log(err);
      });

      document.addEventListener('keydown', this.handleHideDropdown, true);
      document.addEventListener('click', this.handleClickOutside, true);
  }
  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleHideDropdown, true);
    document.removeEventListener('click', this.handleClickOutside, true);
  }
  // Function That will handle the change of the currency in the state(●'◡'●)
  // Function that will show the currency selector
  
  
  render() {
    const handleCurrencyActive = () =>{
      this.setState({
        isActiveCurrency:!this.state.isActiveCurrency
      })
    }
    
    return <>
          <NavbarItem>
              <CurrencyBtn onClick={()=>{handleCurrencyActive()}}>
                 {this.props.currencySymbol}    {this.state.isActiveCurrency ? "⮝":"⮟"}
              </CurrencyBtn>
                  {this.state.isActiveCurrency && <SelectWrapper ref={this.state.ref}>
                {this.state.currency ? this.state.currency.map((item,index)=>(
                        <SelectInput key={index} value={`${item.label}+${item.symbol}`} label={`${item.symbol} ${item.label}`}/>
                    )):""}
              </SelectWrapper> }
          </NavbarItem>

    </>;
  }
}
const  mapStateToProps = (state) =>{
  return {
      currencyState:state.currency.currencyState,
      currencySymbol:state.currency.currencySymbol,
      cart:state.cart.cart.cartItems
  }
}
export default connect(mapStateToProps,{toggleCurrency}) (CurrencyDropdown);
