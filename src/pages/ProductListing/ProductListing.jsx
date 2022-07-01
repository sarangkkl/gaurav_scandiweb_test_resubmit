import React, { Component } from 'react';
import { PageTitle } from '../../Components/basicui/basicui';
import { ProductCard } from '../../Components';
import { connect } from 'react-redux';
import { ProductListingContainer } from './ProductListingStyle';

export class ProductListing extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      loading: true,
      products:[],
      categoryId:"",
    }
  }

  componentDidMount(){
    const currentUrl = window.location.pathname;
    const id = currentUrl.replace("/", "");
    this.setState({categoryId:id})
  }
  render() {
    return (
      <>
        {this.state.categoryId ? <PageTitle>{this.state.categoryId[0].toUpperCase()+this.state.categoryId.substring(1)}</PageTitle>:""}
        
        <ProductListingContainer>
          {this.props.product ? this.props.product.map((item,index)=>(
            <ProductListingContainer key={index}>
              {item.name === this.state.categoryId ? item.products.map((item,index)=>(
                
                <ProductCard key={index} product={item} />
              )):""}
            </ProductListingContainer>
          )):""}
        </ProductListingContainer>
          
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.category,
  };
};
export default connect(mapStateToProps,{})(ProductListing);