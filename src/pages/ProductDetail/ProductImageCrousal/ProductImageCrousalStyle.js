import styled from 'styled-components';

export const ProductImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
`;

export const ProductImage = styled.div`
    margin-top: 10px;
    img{
        width:80px;
        height:80px;
        cursor:pointer;
    }
`

export const ProductImageContainer = styled.div`
    display: flex;
    flex:0.8;
    justify-content: space-between;
`

export const ProductMainImage = styled.div`
    padding-right:10px;
    img{
        max-width:100%;
        height:511px;
        opacity:${props => props.outOfStock ? 0.6 : 1};
    }
    & h1{
        position:absolute;
        top: 63%;
        right: 55%;
        color:#8D8F9A;
    }
`