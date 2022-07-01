import React from "react";
import { useCart } from "../../../context/CartContext";
import {
  CartWrapper,
  H2,
  H3,
  ItemImage,
  ItemInfo,
  ItemPrice,
  ItemText,
  Payment,
  PaymentButton,
  ProductSizes,
  ProductsSize,
  Quantity,
  QuantityForm,
  QuantityWrapper,
  Section,
  Sizes,
  Subtotal,
  Total,
  TotalValues,
  Valor,
} from "./indexStyles";
const CartProducts: React.FC = () => {
  //   const cart = useRecoilValue(cartSelector);
  const { cart } = useCart();
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
