import React from "react";
import Header from "../../components/header/header";
import MainMenu from "../../components/mainMenu/mainMenu";
import SearchhForm from "../../components/searchForm/searchForm";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import ProductDetails from "./productDetails";
import Products from "../../components/products/products";
import styled from "styled-components";

const Section = styled.section`
	background-color: #E0E0E0;
`

function Detalhes () {
return (
    <Section>
    <Header />
    <main className="main">
        <MainMenu />
            <SearchhForm />
            <ProductDetails />
        <Banner />

        <section className="latest-releases">
            <h2 className="latest-releases__h2 h2">Últimos lançamentos</h2>        
            <Products />
        </section>

    </main>
    <Footer />
    </Section>
)
}

export default Detalhes;