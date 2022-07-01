import styled from "styled-components"

export const ProductList = styled.div`
    margin: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width:1300px) {
        display: flex;
        flex-wrap: wrap;
    }
`
export const ProductListListItens = styled.div`
    border: 1px solid #C4C4C4;
    border: none;
`
export const ProductListSizes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0.3rem;
`
export const ProductListSizesItems = styled.p`
    padding: 0.3rem;
    border: 1px solid #C4C4C4;
    margin: 0.3rem 0 0.3rem 0.3rem;
`
export const ItemText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ItemPrice = styled.p`
    margin-top: 0.5rem;
    font-weight: bold;
    color: chocolate;
`
export const AddToBagButton = styled.div`
    color: #FFFFFF;
    background-color: #008844;
    border-radius: 4px;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    margin: 0.5rem 0;
    perspective: 500px;
    :hover {
        opacity: 0.7;
        cursor: pointer;
    }
`
export const CardInner = styled.div`
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    display: grid;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    grid-column-start: 1;
    grid-column-end: 8;
`
export const CardFront = styled.div`
    grid-column-start: 1;
    grid-column-end: 8;
    display: grid;
    backface-visibility: hidden;
`
export const CardFrontText = styled.p`
    font-size: 0.8em;
    grid-column-start: 3;
    grid-column-end: 6;
    align-self: center;
    display: flex;
    justify-content: flex-end;
`
export const ShoppingCart = styled.button`
    border-radius: 4px;
    background-color: #008844;
    border: none;
    grid-column-start: 8;
`