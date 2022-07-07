import styled from "styled-components";

export const MiniProductImageContainer = styled.div`
  display: flex;
`;
export const MainProductImg = styled.div`
  width: 100%;
  img {
    width: 100%;
    max-height: 450px;
  }
`;

export const ImageArrayContainer = styled.div`
  width: 8%;
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  img {
    margin: 10px 5px;
    width: 80px;
  }
`;
