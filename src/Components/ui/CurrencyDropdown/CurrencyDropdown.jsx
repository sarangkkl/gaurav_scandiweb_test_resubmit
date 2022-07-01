import React, { Component } from "react";
import { SelectWrapper } from "./CurrencyDropdownStyle";
import { getCurrency } from "../../../utls/MakeQuery";
import { SelectInput } from '../../';

export class CurrencyDropdown extends Component {
  constructor() {
    super();
    this.state = {
      currency: [],
      isComponentVisible: true,
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
      this.setState({ isComponentVisible: false });
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
  handleToggleCurrency(value){
    this.props.toggleCurrency(value)
  }
  render() {

    
    
    return <>
        {this.state.isComponentVisible && <SelectWrapper ref={this.state.ref}>
        {this.state.currency ? this.state.currency.map((item,index)=>(
                <SelectInput key={index} value={`${item.label}+${item.symbol}`} label={`${item.symbol} ${item.label}`}/>
            )):""}
    </SelectWrapper>}
    </>;
  }
}

export default  CurrencyDropdown;
