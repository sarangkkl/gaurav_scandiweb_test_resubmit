import styled from "styled-components";
import { colors } from "../../../styles/theme";
export const ProductDataContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const RadioButton = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;

  & input[type="radio"] {
    appearance: none;
  }
  & input[type="radio"] + label {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & input[type="radio"]:checked + label {
    background: black;
    color: white;
  }
`;

export const ProductBrand = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: ${colors.blackColor};
`;

export const ProductName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  margin-top: 16px;
  line-height: 27px;
  color: ${colors.blackColor};
`;

export const AttributeContainer = styled.div`
  margin-top: 30px;
`;

export const AttributeTitle = styled.p`
  font-family: "Roboto Condensed";
  margin-bottom: 10px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: ${colors.blackColor};
`;

export const AttributeDiv = styled.div`
  margin-top: 10px;
`;

export const AttributeInnerDiv = styled.div`
  display: flex;
`;

export const PriceText = styled.div`
  margin-top: 35px;

  & h6 {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
  }

  & p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    margin-top: 10px;
    line-height: 18px;
  }
`;


export const ProductDescription = styled.div`
  margin-top: 40px;
`