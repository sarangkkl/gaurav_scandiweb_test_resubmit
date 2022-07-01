// I created this file in order to use the isComponenetVisible from here only but i was not able to do that 
// But it is possible so i have this code here to use it in the future
import React, { Component } from 'react'

export class useComponentVisible extends Component {
  constructor() {
    super()
    this.state = {
      isComponentVisible: false,
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

  componentDidMount(){
    document.addEventListener('keydown', this.handleHideDropdown, true);
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleHideDropdown, true);
    document.removeEventListener('click', this.handleClickOutside, true);
  }
  render() {
    return {
      ref: this.state.ref,isComponentVisible: this.state.isComponentVisible,
    }
  }
}

export default useComponentVisible