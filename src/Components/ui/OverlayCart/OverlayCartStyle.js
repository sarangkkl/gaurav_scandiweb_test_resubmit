import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const OverlayContainerWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top:69px;
  right: 0; 
  background: rgba(57, 55, 72, 0.22);
  
`;

export const NavbarItemIcon = styled.img`
  width: 24px;
  cursor: pointer;
`;
export const DisableNavbarItemIcon = styled.img`
  width: 24px;
  cursor: pointer;
`;

export const OverlayCartContainer = styled.div`
  width: 325px;
  position: relative;
  box-sizing: border-box;
  opacity: 1;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  right: -75%;
  background-color: rgb(255, 255, 255);
  max-height: 80vh;
  overflow-y: scroll;
`;

export const OverlayCartHeader = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding: 10px 20px 0px 20px;

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
 
 
  margin: 10px 5px;
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

  & span {
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
`;
