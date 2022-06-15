import styled from "styled-components";

export const ProductItem = styled.li`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: auto;
    gap: 15px;

    border: 2px solid #E0E0E0;
    border-radius: 5px;

    span {
        display: block;
    }

    figure {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70vw;
        min-width: 220px;
        max-width: 300px;
        height: 177px;
        background-color: #F5F5F5;
    }

    figure img {
        object-fit: none;
        object-position: center;
    }
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 20px;

    h2 {
        width: 80%;
        height: auto;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;

        color: #333333;
    }

    h3 {
        width: 80%;
        height: auto;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;

        color: #828282;
    }

    span {
        width: 80%;
        height: auto;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        
        color: #27AE60;
    }

    button {
        box-sizing: content-box;
        padding: 2px;
        height: 30px;
        width: 100px;

        background: #27AE60;
        border: 2px solid #27AE60;
        border-radius: 8px;
        color: #ffffff;
    }
`