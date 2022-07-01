import styled from "styled-components";
import { colors } from "../../styles/theme";

export const FooterData = styled.div`
    & h4{
        margin:5px 0px;
        font-size:18px;
        font-weight:500;
    }

    & button{
        background-color:${colors.primary};
        width:279px;
        height:43px;
        color:#fff;
        border:none;
        outline:none;
        margin:10px 0px;
    }
`;