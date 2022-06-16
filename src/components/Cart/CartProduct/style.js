import styled from "styled-components";

export const StyledLi = styled.li`
    display: flex;
    flex-direction: row;
    gap: 15px;

    figure {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        background-color: #E0E0E0;
        border-radius: 5px;
    }

    figure img {
        width: 90%;
        height: 90%;
    }

    div {
        display: flex;
        height: 70px;
        flex-direction: column;
        justify-content: space-around;
    }

    h2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        
        color: #333333;
    }

    h3 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        
        color: #828282;
    }

    span {
        margin: 0 10px 0 auto;
        margin-top: 10px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        
        color: #9c9c9c;
    }
`