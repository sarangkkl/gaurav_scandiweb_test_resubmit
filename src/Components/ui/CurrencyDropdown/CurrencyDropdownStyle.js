import { colors } from '../../../styles/theme'
import styled from 'styled-components';

export const SelectWrapper = styled.div`
  width:114px;
  position: absolute;
  margin-top: 5px;
  right: 63px;
`

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

export const CurrencyBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
