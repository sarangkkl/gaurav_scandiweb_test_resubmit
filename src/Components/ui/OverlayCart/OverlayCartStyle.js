import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const OverlayContainerWrapper = styled.div`
  position: absolute;
  width: 1px;

`;


export const OverlayCartContainer = styled.div`
  width: 345px;
  position: relative;
  z-index: 100;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  right: 330px;
  background-color: rgb(255, 255, 255);
  
  border-radius: 10px;
  max-height: 80vh;
  overflow-y: scroll;
`;

export const OverlayCartHeader = styled.p`
  font-size: 20px;
  font-weight: 600;

  span {
    font-size: 18px;
    font-weight: 400;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  padding: 0px 10px;
  margin: 10px 0px;
  justify-content: space-between;

  & p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
  }

  & h6 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
  }
`;

export const ActionSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ViewBagButton = styled.button`
  width: 140px;
  height: 43px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #1d1f22;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #1d1f22;
`;

export const CheckoutButton = styled.button`
  width: 140px;
  height: 43px;
  outline: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  background: #5ece7b;
`;

export const CartCount = styled.div`
  position: relative;
  top: -36px;
  right: -11px;
  background-color: black;
  color: white;
  border-radius: 100%;
  width: 17px;
  height: 17px;

  & span{
    font-size: 12px;
    display: flex;
    margin-left: -1px;
    justify-content: center;
    cursor: pointer;
  }
`;

export const NavbarItem = styled.div`
  margin-right: 32px;
  font-weight: 600;
  font-size: 16px;
  a {
    color: ${colors.blackColor};
  }

  img {
    width: 24px;
    cursor: pointer;
  }
`;