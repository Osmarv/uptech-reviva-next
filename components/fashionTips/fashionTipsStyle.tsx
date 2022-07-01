import styled from "styled-components";

export const FashionTipsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 1rem 0 1rem;
    @media screen and (max-width:1300px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const FashionTipsBigPost = styled.div`
    margin-right: 2rem;
    @media screen and (max-width:644px) {
        display: none;
    }
`;

export const FashionTipsBigPostText = styled.p`
    margin-top: 10px;
    font-weight: 600;
`;

export const FashionTipsSmallPostText = styled.p`
    margin-left: 10px;
    font-weight: 600;
`;

export const FashionTipsSmallPost = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    
    @media screen and (max-width:768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const FashionTipsBlogPost = styled.div`
    @media screen and (max-width:1300px) {
        margin-top: 1rem;
    }
`;