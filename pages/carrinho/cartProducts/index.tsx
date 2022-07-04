import React from "react";
import { useCart } from "../../../context/CartContext";
import styled from "styled-components";

const Section = styled.section`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #E0E0E0;
`
const H2 = styled.h2`
    font-size: 1.5em;
    margin-left: 2rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    font-weight: bold;
`
const H3 = styled.h3`
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 0.3rem;
`
const CartWrapper = styled.div`
    display: flex;
    margin: 0 2rem 0 3rem;
    justify-content: space-between;
    @media screen and (max-width:768px) {
        flex-direction: column;
    }
`
const Payment = styled.div`
    background-color: #C4C4C4;;
    width: 30%;
    margin-bottom: 1rem;
    padding: 1rem;
    @media screen and (max-width:680px) {
        width: auto;
    }
`
const ItemInfo = styled.div`
    display: flex;
    @media screen and (max-width:570px) {
        flex-direction: column;
    }
`
const ItemImage = styled.div`
    margin-right: 1rem;
    margin-bottom: 1rem;
`
const ItemText = styled.div`
    margin-right: 1rem;
`
const Sizes = styled.div`
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
`
const ProductSizes = styled.div`
    display: flex;
`
const ProductsSize = styled.p`
    margin: 0.5rem 0 0.5rem 0.5rem;
    padding: 0.3rem;
    border: 1px solid #C4C4C4;
`
const ItemPrice = styled.p`
    font-weight: bold;
    color: chocolate;
`
const Quantity = styled.input`
    width: 1.5rem;
    text-align: center;
    align-self: center;
`
const QuantityForm = styled.form`
    text-align: center;
`
const PaymentButton = styled.button`
    background-color: #008844;
    color: white;
    border: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
`
const Total = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const TotalValues = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
`
const Valor = styled.div`
    margin-right: 1rem;
    margin-bottom: 1rem;
`
const QuantityWrapper = styled.div`
    margin-right: 1rem;
    margin-bottom: 1rem;
`
const Subtotal = styled.div`
    margin-right: 1rem;
    margin-bottom: 1rem;
`

const CartProducts: React.FC = () => {
  //   const cart = useRecoilValue(cartSelector);
  const { cart } = useCart();

  console.log("cart")
  console.log(cart);
  
  return (
    <Section id="sacola">
      <H2>Minha sacola</H2>
      <CartWrapper>
        <div>
          {cart.map((item) => (
            <ItemInfo key=''>
              <ItemImage>
                <img
                  src={process.env.PUBLIC_URL + item.imagens[0].url}
                  alt={item.imagens[0].descricao}
                  width="189px "
                  height="146px "
                />
              </ItemImage>

              <ItemText>
                <H3>Produto</H3>
                <p>{item.nome}</p>
              </ItemText>

              <Sizes>
                <div>
                  <H3>Tamanho escolhido</H3>
                </div>

                <ProductSizes>
                  <ProductsSize>{item.tamanhos_disponiveis[0]}</ProductsSize>
                  <ProductsSize>{item.tamanhos_disponiveis[1]}</ProductsSize>
                  <ProductsSize>{item.tamanhos_disponiveis[2]}</ProductsSize>
                </ProductSizes>
              </Sizes>

              <Valor>
                <H3>Valor</H3>
                <ItemPrice id="undValue">{item.preco}</ItemPrice>
              </Valor>

              <QuantityWrapper>
                <H3>Quantidade</H3>
                <QuantityForm id="myForm" action="#">
                  <Quantity type="number" name="quantity" value="2" id="qntd" />
                </QuantityForm>
              </QuantityWrapper>

              <Subtotal>
                <H3>Subtotal</H3>
                <label id="total">R$ 39,90</label>
              </Subtotal>
            </ItemInfo>
          ))}
        </div>

        <Payment>
          <Total>
            <TotalValues>
              <p>Total</p>
              <p>R$ 159,70</p>
            </TotalValues>
            <TotalValues>
              <label htmlFor="quantity" id="qntdPayment1">
                {" "}
              </label>
              <label htmlFor="quantity" id="qntdPayment2">
                {" "}
              </label>
            </TotalValues>

            <PaymentButton>ir para pagamento</PaymentButton>
          </Total>
        </Payment>
      </CartWrapper>
    </Section>
  );
};

export default CartProducts;
