import styled from "styled-components";
import { colors } from "../../styles/theme";

export const BodyWrapper = styled.div`
  width: 100%;
`;
export const ContentWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
`;
export const PageTitle = styled.h1`
  font-size: 42px;
  font-weight: 400;
  margin-top: 40px;
`;

export const RadioButton = styled.div`
  position: relative;
  width: ${props =>props.size==="sm" ? "25px":"50px"};
  height: ${props =>props.size==="sm" ? "20px":"40px"};
  border: 2.2px solid;
  margin-right:${props =>props.size==="sm" ? "4px":"12px"};
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;

  & label{
    font-size: ${props =>props.size==="sm" ? "8px":"14px"};
  }

  & input[type="radio"] {
    appearance: none;
  }
  & input[type="radio"] + label {
    position: absolute;
    width: 114%;
    height: 114%;
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

export const Button = styled.button`
  width: 292px;
  background: ${colors.primary};
  font-weight: 600;
  font-size: 16px;
  color: white;
  border: none;
  margin-top: 20px;
  height: 50px;
`;

export const InputWrapper = styled.div`
  width: 114px;
  height: 45px;
  padding-left: 10px;
  cursor: pointer;
  display: flex;
  z-index: 100;
  align-items: center;
  background: #fff;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;

  & label{
    width: 100%;
    cursor: pointer;
  }

  & input[type="radio"] {
    appearance: none;
  }

  :hover {
    background-color: #eeeeee;
  }
`;
