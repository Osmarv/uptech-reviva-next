import styled from "styled-components";

export const Foiter = styled.footer`
    background-color: #D6BBA3;
`;
export const FooterHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5em 3em;
`;
export const ContentBrand = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ContentBrandH1 = styled.h1`
    display: flex;
    justify-content: flex-end;
    font-size: 2.5em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
`;
export const ContentBrandP = styled.h1`
    display: flex;
    justify-content: flex-end;
    font-size: 1.5em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
`;
export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 3em 3em 3em;
    flex-wrap: wrap;
`;
export const FooterMenu = styled.div`
    @media screen and (max-width:768px) {
        margin-top: 2rem;
    }
`
export const FooterMenuList = styled.ul`
    display: flex;
    flex-direction: column;
`;
export const FooterMenuItens = styled.ul`
    margin: 0.5rem 0;
`
export const FooterMenuLink = styled.a`
    text-decoration: none;
`
export const FooterMedias = styled.div`
    @media screen and (max-width:768px) {
        margin-top: 2rem;
    }
`
export const FooterMediasImg = styled.img`
    margin: 0.5rem 0.5rem 0 0;
`
export const FooterContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (max-width:768px) {
        margin-top: 2rem;
    }
`
export const FooterContactP = styled.p`
    display: flex;
    margin: 0.3rem 0;
`

export const FooterWhatsapp = styled.div`
    display: flex;
    margin: 0.3rem 0;
`
export const FooterContactText = styled.div`
    margin-right: 0.3rem;
`
export const FooterTelephone = styled.div`
    display: flex;
    margin: 0.3rem 0;
`
export const FooterNewsletter = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width:768px) {
        margin-top: 2rem;
    }
`
export const FooterNewsletterDiv = styled.div`
    margin: 0.5rem 0;
    display: flex;
    flex-direction: column;
`
export const FooterNewsletterEmail = styled.input`
    border-radius: 0.2rem;
`
export const FooterNewsletterButton = styled.input`
    margin-top: 0.3rem;
    border-radius: 0.3rem;
    text-align: center;
    background-color: black;
    color: white;
    font-weight: 500;
`

export const H3 = styled.h3`
    font-size: 1em;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`