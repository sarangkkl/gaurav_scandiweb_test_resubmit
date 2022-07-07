import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const NavItemContainer = styled.div`
  display: flex;
  margin-top: 24px;
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

export const NavbarSelect = styled.select`
  border: none;
  border-radius: 0px;

  option {
    background: #fff;
    width: 114px;
    height: 45px;
  }
`;

export const CurrencyBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

