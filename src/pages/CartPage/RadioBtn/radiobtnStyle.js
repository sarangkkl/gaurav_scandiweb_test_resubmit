import styled from "styled-components";
import { colors } from '../../../styles/theme'

export const RadioButton = styled.div`
  position: relative;
  width: 35px;
  height: 30px;
  border: 2px solid;
  
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;

  & label{
    font-size: 12px;
  }

  & input[type="radio"] {
    appearance: none;
  }
  & input[type="radio"] + label {
    position: absolute;
    width: 105%;
    height: 105%;
    top: -1px;
    left: -1px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & input[type="radio"]:checked + label {
    background: black;
    color: white;
  }
`;



export const RadioColorBtnWrapper= styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  margin-right: 4px;
  border: 2px solid;
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