import styled from "styled-components";
import { colors } from "../../../../styles/theme";
export const MiniProductDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.4;
  border: 1px solid ${colors.blackColor};
`;



export const ProductBrand = styled.div`
  display: flex;
  & p {
    font-weight: 600;
    font-size: 30px;
    margin: 5px 10px;

    color: ${colors.blackColor};
  }
`;

export const ProductName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  & p {
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    margin: 0px 10px;
    color: ${colors.blackColor};
  }
`;

export const AttributeContainer = styled.div``;

export const AttributeTitle = styled.div`
  display: flex;
  align-items: center;
  & p {
    font-family: "Roboto Condensed";
    margin: 5px 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: ${colors.blackColor};
  }
`;

export const AttributeDiv = styled.div``;

export const AttributeInnerDiv = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const PriceText = styled.div`
  margin-top: 5px;
  margin-left: 10px;
  display: flex;

  & p{
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }

`;

export const ProductDescription = styled.div`
  margin-top: 40px;
`;


export const PriceTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
  
  `;

  export const ButtonWrapper = styled.div`
  display: flex;
  margin:5px 10px; 
  `;