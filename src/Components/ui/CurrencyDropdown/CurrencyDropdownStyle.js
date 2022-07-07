import { colors } from '../../../styles/theme'
import styled from 'styled-components';

export const SelectWrapper = styled.div`
  width:120px;
  position: relative;
  margin-top: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  right: 8%;
  z-index: 10;
`

export const SelectWrapperContainer = styled.div`
  position: absolute;
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

export const CurrencyBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

