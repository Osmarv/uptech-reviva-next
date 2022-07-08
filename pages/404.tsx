import Link from 'next/link';
import Header from '../components/header/header'
import styled from 'styled-components'
import React from 'react';

const Main = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
const TextH3 = styled.h3`
    font-size: 1.75rem;
    text-align: center;
    font-weight: 500;
    margin-bottom: 8px;
`
const TextP = styled.p`
    font-size: 1.75rem;
    text-align: center;
    font-weight: 500;
    margin-bottom: 8px;
`
const PaymentButton = styled.button`
    background-color: black;
    color: white;
    border: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    margin-left: 3rem;
`

function NotFound() {
return (
    <>
        <Header />
        <Main>
            <div>
                <TextH3>Desculpe-nos!</TextH3>
                <TextP>Esta página não existe mais</TextP>
                <Link href='/'><PaymentButton>VOLTAR PARA A PÁGINA INICIAL </PaymentButton></Link>
            </div>
            <img src='https://midia.fotos-riachuelo.com.br/spa-storefront/public/error_image.svg' alt='page not found' />
        </Main>
    </>
)
}

export default NotFound;