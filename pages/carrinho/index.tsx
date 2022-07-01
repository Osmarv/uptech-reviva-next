import React from "react";
import Header from "../../components/header/header";
import MainMenu from "../../components/mainMenu/mainMenu";
import SearchhForm from "../../components/searchForm/searchForm";
import Footer from "../../components/footer/footer";
import CartProducts from "./cartProducts";
import styled from "styled-components";

export const Section = styled.section`
	background-color: #E0E0E0;
`

function Carrinho () {
return (
    <Section>
    <Header />
    <main className="main">
        <MainMenu />
        <SearchhForm />
        <CartProducts />
    </main>
    <Footer />
    </Section>
)
}

export default Carrinho;