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
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  & input[type="radio"]:checked + label {
    border:2px solid ${colors.primary}
  }
`;

