import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const Card = styled.div`
    display: flex;
    border-top: 2px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
    padding: 10px 0px;
    justify-content: space-between;
`;

export const Productdata = styled.div`
  margin:20px 0px;

  & h3{
    font-size: 22px;
  }
  & h4{
    font-size: 20px;
  }
  & p{
    margin:10px 0px;
    font-size: 20px;
  }
`;

export const ProductAttributeDiv = styled.div`

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

export const Attributediv = styled.div`
  margin-top: 10px;
  width: 180px;
  display: flex;
  justify-content: space-between;
`;

export const AttributeInnerDiv = styled.div`
  display: flex;
`;


export const AttributeCard = styled.div`
  & h6{
    font-size: 18px;
    margin:5px 0px;
  }
`;