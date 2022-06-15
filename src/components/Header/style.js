import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 10px 0;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;

    img {
        width: 40%;
        max-width: 180px;
        height: auto;
        margin: 10px auto;
    }
`

export const SearchField = styled.div`
    margin: 0 auto;
    padding: 7px 5px 5px 5px;
    background-color: #ffffff;
    height: 45px;
    width: 90%;
    gap: 10px;

    border-radius: 4px;
    button {    
        margin: 0;
        padding: 0;
        width: 76px;
        height: 85%;
        
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 0.8rem;
        line-height: 17px;

        color: #E0E0E0;
        background: #27AE60;
        /* color-primary */

        border: 2px solid #27AE60;
        border-radius: 4px;
    }

    input {
        margin: 0;
        padding: 0;
        width: calc(100% - 76px);
        height: 85%;

        outline: none;
        border: none;
        padding-left: 5px;
    }

    input::placeholder {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #E0E0E0;
    }
`