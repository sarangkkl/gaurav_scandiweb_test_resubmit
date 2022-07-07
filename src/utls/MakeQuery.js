import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";
import {gql} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});

export const getProducts = async()=>{
    const data = await client.query({query:gql`
    query Query {
      categories {
        name
        products {
          id
          name
          attributes {
            id
            name
            type
            items {
              displayValue
              value
              id
            }
          }
          inStock
          gallery
          description
          category
          prices {
            currency {
              symbol
              label
            }
            amount
          }
          brand
        }
      }
    }
    `})
    return data;
}

export const getProductDetail = async(id)=>{
  const data = await client.query({
    query:gql`
  query ($productId: String!) {
    product(id:$productId) {
      id,
      name,
      inStock,
      gallery,
      description,
      category,
      attributes{
        id,
        name,
        type,
        items{
          displayValue,
          value,
          id,
        }
      },prices {
        amount,
        currency {
          label,
          symbol
        }
      },brand
  
    } 
}

  
    `
  ,variables:{productId:id}})
  return data;
}

export const getCurrency = async()=>{
  const data = await client.query({
    query:gql`
    query currencyQuery {
      currencies {
        label
        symbol
      }
    }
    `
  })
  return data;
}

export const getProductByCategories = async(category)=>{
  const data = await client.query({
    query:gql`
    query Category($input: CategoryInput) {
      category(input: $input) {
        name
        products {
          name
          id
          inStock
          gallery
          description
          category
          attributes {
            id
            name
            type
            items {
              displayValue
              value
              id
            }
          }
          prices {
            currency {
              label
              symbol
            }
            amount
          }
          brand
        }
      }
    }
    `
  ,variables:{
    "input": {
      "title": `${category}`,
    }
  }})
  return data;
}