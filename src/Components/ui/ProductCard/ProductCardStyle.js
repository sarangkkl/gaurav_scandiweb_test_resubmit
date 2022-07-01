import styled from "styled-components";
import { colors } from "../../../styles/theme";
export const ProductCardBody = styled.div`
  width: 370px;
  margin: 10px auto;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;
export const ProductCardContainer = styled.div`
  width: 354px;
  margin: 0 auto;
  img {
    height: 330px;
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
  top: -170px;
  left: 325px;
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
