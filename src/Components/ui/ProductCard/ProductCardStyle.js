import styled from "styled-components";
import { colors } from "../../../styles/theme";
export const ProductCardBody = styled.div`
  width: 370px;
  margin: 10px auto 10px 0px;
  :hover {
    box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
  }
`;
export const ProductCardContainer = styled.div`
  width: 354px;
  margin: 0 auto;
  img {
    width: 100%;
    align-self: center;
    object-fit: contain;
    
    max-height: 354px;
  }
`;

export const ProductCardTitle = styled.p`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  a {
    color: ${colors.blackColor};
  }
`;
export const ProductCardPrice = styled.p`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  a {
    color: ${colors.blackColor};
  }
`;

export const ProductBuyLogo = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${colors.primary};
  position: relative;
  top: -60px;
  left: 320px;
  border: none;
  outline: none;
  border-radius: 100%;
  cursor: pointer;
  opacity: 0;

  ${ProductCardBody}:hover & {
    opacity: 1;
  }
`;
export const ProductBuyImage = styled.img`
  width: 24px;
  margin-top: 6px;
  margin-right: 3px;
  color: #fff;
`;

export const DisableContainer = styled.div`
  & img {
    height: 330px;
    opacity: 0.5;
  }

  & h4 {
    position: relative;
    top: -162px;
    left: 70px;
    width: 200px;
    color: #8d8f9a;
    font-weight: 400;
    font-size: 24px;
  }

  
`;
