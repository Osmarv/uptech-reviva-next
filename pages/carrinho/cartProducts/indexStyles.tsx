import styled from "styled-components";

export const Section = styled.section`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #E0E0E0;
`
export const H2 = styled.h2`
    font-size: 1.5em;
    margin-left: 2rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    font-weight: bold;
`
export const H3 = styled.h3`
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 0.3rem;
`
export const CartWrapper = styled.div`
    display: flex;
    margin: 0 2rem 0 3rem;
    justify-content: space-between;
    @media screen and (max-width:768px) {
        flex-direction: column;
    }
`
export const Payment = styled.div`
    background-color: #C4C4C4;;
    width: 30%;
    margin-bottom: 1rem;
    padding: 1rem;
    @media screen and (max-width:680px) {
        width: auto;
    }
`
export const ItemInfo = styled.div`
    display: flex;
    @media screen and (max-width:570px) {
        flex-direction: column;
    }
`
export const ItemImage = styled.div`
    margin-right: 1rem;
    margin-bottom: 1rem;
`
export const ItemText = styled.div`
    margin-right: 1rem;
`
export const Sizes = styled.div`
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
`
export const ProductSizes = styled.div`
    display: flex;
`
export const ProductsSize = styled.p`
    margin: 0.5rem 0 0.5rem 0.5rem;
    padding: 0.3rem;
    border: 1px solid #C4C4C4;
`
export const ItemPrice = styled.p`
    font-weight: bold;
    color: chocolate;
`
export const Quantity = styled.input`
    width: 1.5rem;
    text-align: center;
    align-self: center;
`
export const QuantityForm = styled.form`
    text-align: center;
`
export const PaymentButton = styled.button`
    background-color: #008844;
    color: white;
    border: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
`
export const Total = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const TotalValues = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
`
export const Valor = styled.div`
    margin-right: 1rem;
    margin-bottom: 1rem;
`
export const QuantityWrapper = styled.div`
    margin-right: 1rem;
    margin-bottom: 1rem;
`
export const Subtotal = styled.div`
    margin-right: 1rem;
    margin-bottom: 1rem;
`