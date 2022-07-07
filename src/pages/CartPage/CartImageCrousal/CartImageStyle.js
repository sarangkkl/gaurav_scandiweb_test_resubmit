import styled, { keyframes } from "styled-components";

const forwardAnimatin = keyframes`
  0%{
    transform:translateX(10%);
  }100%{
    transform:translateX(0); 
  }
`;
const backwardAnimatin = keyframes`
  0%{
    transform:translateX(-10%);
  }100%{
    transform:translateX(0); 
  }
`;

export const ActionContainer = styled.div`
  display: flex;
`;

export const ActionButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & button {
    width: 25px;
    cursor: pointer;
    height: 25px;
    margin: 10px 20px;
    background-color: #fff;
    border: 2px solid #000;
    font-size: 20px;
  }

  & p {
    margin: 10px 20px;
  }
`;

export const ProductImage = styled.div`
  width: 200px;
  height: 288px;
`;
export const CustomImage = styled.img`
  animation: ${(props) => (props.back ? backwardAnimatin : forwardAnimatin)} 1s
    ease-in-out;
  width: 100%;
`;

export const CrousalButtons = styled.div`
  position: relative;
  width: 66px;
  top: -40px;
  left: 140px;

  display: flex;

  & button {
    width: 25px;
    height: 25px;
    background: rgba(0, 0, 0, 0.73);
    color: #fff;
    margin-right: 10px;
  }
`;

export const HideImages = styled.div`
  display: none;
`;