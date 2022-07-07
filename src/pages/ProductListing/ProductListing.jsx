import React, { Component } from 'react';
import { PageTitle } from '../../Components/basicui/basicui';
import { ProductCard,Loader } from '../../Components';
import { connect } from 'react-redux';
import { ProductListingContainer } from './ProductListingStyle';
import { getProductByCategories } from '../../utls/MakeQuery'

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
    
    getProductByCategories(id).then(res=>{
      this.setState({products:res.data.category.products,loading:false})
      
    })
  }
  render() {
    return (
      <>
        {this.state.categoryId ? <PageTitle>{this.state.categoryId[0].toUpperCase()+this.state.categoryId.substring(1)}</PageTitle>:""}
        {this.state.loading ? <Loader/> : 
        <ProductListingContainer>
          {this.state.products && this.state.products.map((item,index)=>(
            <ProductCard key={index} product={item}/>
          ))}
        </ProductListingContainer>}
        
          
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