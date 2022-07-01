import styled from "styled-components";

export const OverlayCartContainer = styled.div`
  width: 345px;
  position: absolute;
  z-index: 100;
  border: 1px solid #e6e6e6;
  right: 25px;
  background-color: rgb(255, 255, 255);
  padding: 5px 10px;
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
    font-size: 16px;
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
