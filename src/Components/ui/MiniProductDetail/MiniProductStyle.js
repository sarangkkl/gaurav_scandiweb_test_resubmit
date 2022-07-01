import styled from "styled-components";

export const MiniProductDetailContainer = styled.div`
    position: fixed;
    top: 10%;
    width: 90%;
    left: 5%;
    right: 5%;
    bottom: 10%;
    border:1px solid #ccc;
    z-index: 100;
    height: 80vh;
    background-color: #fff;
    display: flex;
    justify-content: space-between;

`

export const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px;
    font-weight: bold;
    font-size: 40px;
    color:red;
`