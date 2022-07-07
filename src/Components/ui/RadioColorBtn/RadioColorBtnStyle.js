import styled from "styled-components"
import { colors } from '../../../styles/theme'

export const RadioColorBtnWrapper= styled.div`
  position: relative;
  width:${props =>props.size==="sm" ? "20px":"32px"};
  height:${props =>props.size==="sm" ? "20px":"32px"};
  margin-right:${props =>props.size==="sm" ? "4px":"12px"};
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
  background-color: ${props => props.backgroundColor || "white"};

  & label {
    margin:-2px;
  }

  & input[type="radio"] {
    appearance: none;
  }
  & input[type="radio"] + label {
    position: absolute;
    width: 101%;
    height: 101%;
    top: -1px;
    left: -1px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  & input[type="radio"]:checked + label {
    border:3px solid ${colors.primary}
  }
`;

