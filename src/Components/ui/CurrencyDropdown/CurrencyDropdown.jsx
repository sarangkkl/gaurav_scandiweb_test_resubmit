import React, { Component } from "react";
import { SelectWrapper,NavbarItem,CurrencyBtn,SelectWrapperContainer } from "./CurrencyDropdownStyle";
import { getCurrency } from "../../../utls/MakeQuery";
import { connect } from 'react-redux'
import { SelectInput } from '../../';
import { toggleCurrency } from '../../../store/reducers/currencyReducers'

export class CurrencyDropdown extends Component {
  constructor() {
    super();
    this.state = {
      currency: [],
      isActiveCurrency:false,
      ref: React.createRef(null),
    };
  }

  handleHideDropdown = (event) => {
    if (event.key === 'Escape') {
      this.setState({ isActiveCurrency: false });
    }
  }

  handleClickOutside = (event) => {
    if (this.state.ref.current && !this.state.ref.current.contains(event.target)) {
      
      this.setState({
        isActiveCurrency:false
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
  
  
  render() {
    const handleCurrencyActive = () =>{
      this.setState({
        isActiveCurrency:!this.state.isActiveCurrency
      })
    }
    
    return <>
          <NavbarItem ref={this.state.ref}>
              <CurrencyBtn onClick={()=>{handleCurrencyActive()}}>
                 <p>{this.props.currencySymbol}    {this.state.isActiveCurrency ? "⮝":"⮟"}</p> 
              </CurrencyBtn>
                  {this.state.isActiveCurrency && <SelectWrapperContainer> <SelectWrapper >
                  {this.state.currency ? this.state.currency.map((item,index)=>(
                        <SelectInput key={index} value={`${item.label}+${item.symbol}`} label={`${item.symbol} ${item.label}`} hide={handleCurrencyActive}/>
                    )):""}
              </SelectWrapper> </SelectWrapperContainer>}
          </NavbarItem>

    </>;
  }
}
const  mapStateToProps = (state) =>{
  return {
      currencySymbol:state.currency.currencySymbol,
  }
}
export default connect(mapStateToProps,{toggleCurrency}) (CurrencyDropdown);
