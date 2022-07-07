import React, { Component } from 'react';
import { MiniProductDetailContainer } from './MiniProductStyle';
import MiniProductData from './MiniProductData/MiniProductData';
import MiniProductImage from './MiniProductImage/MiniProductImage';

export class MiniProductDetail extends Component {
    constructor(){
        super();
        this.state={
          isComponentVisible: true,
          ref: React.createRef(null),
        }
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
        document.addEventListener('keydown', this.handleHideDropdown, true);
      document.addEventListener('click', this.handleClickOutside, true);
      }
    
      componentWillUnmount(){
        document.removeEventListener('keydown', this.handleHideDropdown, true);
        document.removeEventListener('click', this.handleClickOutside, true);
      }
  render() {
    const {hide} = this.props;
    return (
      <>
        {this.state.isComponentVisible && <MiniProductDetailContainer ref={this.state.ref}>

          <MiniProductImage product={this.props.product}/>
          <MiniProductData product={this.props.product} hide={hide}/>
          
      </MiniProductDetailContainer>}
      </>
    )
  }
}

export default MiniProductDetail