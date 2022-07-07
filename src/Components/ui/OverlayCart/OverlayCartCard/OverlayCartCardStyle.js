import styled from "styled-components";

export const CartCardWrapper = styled.div`
  width: 95%;
  margin: 20px auto;
  display: flex;
  padding: 10px 0px;
  border-top: 1px solid #e6e6e6;

  
`;

export const CartCardHeader = styled.div`
& h6 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    width:136px;
  }

  & p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    width:136px;
  }

  & h5{
    margin-top: 10px;
    font-size: 16px;
  }

  
`;

export const CartCardAction = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: space-between;

  & button{
    width:24px;
    height:24px;
    font-size:20px;
    cursor:pointer;
    border:1px solid black;
    background:white;
    
  }
`;

export const CartCardImg = styled.div`
  & img{
    width:100%;
  }
`;

export const CartHeaderWrapper = styled.div`
    padding: 0px 10px;
`;

export const AttributeCard = styled.div`
  & h6{
    margin:5px 0px;
  }
`;

export const AttributeColor = styled.div`
    display: flex;
`;

export const Attributediv  = styled.div`
  margin-top: 10px;
  display: flex;
`;