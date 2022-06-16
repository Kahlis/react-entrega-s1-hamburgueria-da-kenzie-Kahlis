import styled from "styled-components";

export const Header = styled.div`
    padding-left: 15px;
    margin: 20px auto 0 auto;
    display: flex;
    height: 35px;
    max-width: 440px;
    width: 90%;
    background-color: #27AE60;
    border-radius: 5px 5px 0px 0px;
    align-items: center;
    justify-content: start;
    gap: 10px;

    span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;

        color: #FFFFFF;
    }
`

export const ContentEmpty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 20px 0;
    width: 90%;
    max-width: 440px;
    background-color: #F5F5F5;
    min-height: 150px;

    h2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;

        text-align: center;
        color: #333333;
    }

    h3 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        
        text-align: center;
        color: #828282;
    }
`

export const ContentFilled = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 90%;
    max-width: 440px;
    background-color: #F5F5F5;
    padding: 10px;
    hr {
        margin: 0 auto;
        width: 100%;
        color: #E0E0E0;
    }

    .row {
        display: flex;
        flex-direction: row;
    }

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        
        color: #333333;
    }

    .price {
        margin: 0 10px 0 auto;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        
        color: #828282;
    }

    button {
        height: 60px;
        width: 100%;
        background: #db4242;
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        color: #ffffff
    }
`

export const StyledDiv = styled.div`
    margin-bottom: 30px;
`