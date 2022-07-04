import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
//import { Items } from "../../home/data";
import { Items } from "../../../data/data";
import { useProduct } from "../../../context/ProductContext";
import styled from "styled-components";

const Section = styled.section`
	background-color: #E0E0E0;
`
const ProductDetailsWrapper = styled.div`
	margin: 1.5rem;
	display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProductDetailsImage = styled.div`
  margin-right: 1rem;
`;

const ProductDetailsSideInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductDetailsDescription = styled.div`
	display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProductDetailsDescriptionName = styled.div`
	display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProductDetailsPrice = styled.p`
	margin-top: 0.5rem;
	font-weight: bold;
	color: chocolate;
	align-self: center;
`;

const ProductDetailsDescriptionText = styled.p`
	margin: 0.5rem 0;
`;

const Thumbnails = styled.div`
	display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
`;

const Sizes = styled.div`
	display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Size = styled.label`
	margin: 0.5rem 0.5rem 0.5rem;
  padding: 0.3rem;
  border: 1px solid #C4C4C4;
`;

const DetailRadio = styled.input`
	display: none;
	&:checked{
		+${Size}{
			background-color: #008844;
			color: white;
		}
	}
`;

const AddToBagButton = styled.div`
	color: #FFFFFF;
  background-color: #008844;
  border-radius: 4px;
  display: grid;
	grid-template-columns: auto auto auto auto auto auto auto auto;
	margin: 0.5rem 0;
	perspective: 500px;
`;

const CardInner = styled.div`
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
	display: grid;
	transition: transform 0.8s;
	transform-style: preserve-3d;
	grid-column-start: 1;
	grid-column-end: 8;
`;

const CardFront = styled.div`
	display: grid;
  backface-visibility: hidden;
`;

const CardFrontText = styled.p`
	font-size: 0.8em;
	grid-column-start: 3;
	grid-column-end: 6;
	align-self: center;
`;

const ShoppingCart = styled.button`
	border-radius: 4px;
	background-color: #008844;
	border: none;
	grid-column-start: 8;
`;

import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const idProduct = router.query.id;

  const [product, setProduct] = useState<Items>();
  const { products } = useProduct();

  useEffect(() => {
    const result = products.find((p) => p.id === Number(idProduct));
    if (result) {
      setProduct(result);
    }
  }, []);

  return (
    // <ProductsContext.Consumer>
    // 	{() => (
    <Section id="productDetails">
      <ProductDetailsWrapper>
        <ProductDetailsImage>
          <img
            src={product?.imagens[0].url}          
            alt="Foto do produto "
            width="564px "
            height="593px "
          />
        </ProductDetailsImage>

        <ProductDetailsSideInfos>
          <div>
            <ProductDetailsDescription>
              <ProductDetailsDescriptionName>
                <p>{product?.nome}</p>
                <ProductDetailsPrice>{product?.preco}</ProductDetailsPrice>
                <ProductDetailsDescriptionText>
                  {product?.descricao}
                </ProductDetailsDescriptionText>
              </ProductDetailsDescriptionName>
            </ProductDetailsDescription>

            <Thumbnails>
              <div>
                <img
                  src="/images/cropped.png"
                  alt="crooped preto "
                  width="140px "
                  height="109px "
                />
              </div>
              <div>
                <img
                  src="/images/vestido_longo.png"
                  alt="Vestido longo azul estampado "
                  width="140px "
                  height="109px "
                />
              </div>
              <div>
                <img
                  src="/images/listrada.png"
                  alt="blusa listrada "
                  width="140px "
                  height="109px "
                />
              </div>
              <div>
                <img
                  src={"/images/calca.png"}
                  alt="calça preta "
                  width="140px "
                  height="109px "
                />
              </div>
            </Thumbnails>
          </div>

          <div>
            <div>
              <Sizes>
                <DetailRadio type="radio" id="PP" name="sizes" />
                <Size htmlFor="PP">PP</Size>
                <DetailRadio type="radio" id="P" name="sizes" />
                <Size htmlFor="P">P</Size>
                <DetailRadio type="radio" id="M" name="sizes" />
                <Size htmlFor="M">M</Size>
                <DetailRadio type="radio" id="G" name="sizes" />
                <Size htmlFor="G">G</Size>
                <DetailRadio type="radio" id="GG" name="sizes" />
                <Size htmlFor="GG">GG</Size>
              </Sizes>
            </div>

            <AddToBagButton>
              <CardInner>
                <CardFront>
                  <CardFrontText>ADICIONAR À SACOLA</CardFrontText>
                  <ShoppingCart>
                    <svg
                      width="24 "
                      height="28 "
                      viewBox="0 0 24 28 "
                      fill="none "
                      xmlns="http://www.w3.org/2000/svg "
                    >
                      <path
                        d="M6 5.98944C6 2.68134 8.68393 0 12 0C15.3161 0 18 2.68134 18 5.98944V8.55634H21.4286C22.8482 8.55634 24 9.7061
												24 11.1232V22.2465C24 25.0808 21.6964 27.3803 18.8571 27.3803H5.14286C2.3025 27.3803 0 25.0808 0 22.2465V11.1232C0 9.7061 1.15125 8.55634 2.57143 8.55634H6V5.98944ZM8.57143 8.55634H15.4286V5.98944C15.4286 4.09902 13.8911
												2.5669 12 2.5669C10.1089 2.5669 8.57143 4.09902 8.57143 5.98944V8.55634ZM7.28571 13.6901C7.99821 13.6901 8.57143 13.1179 8.57143 12.4067C8.57143 11.6954 7.99821 11.1232 7.28571 11.1232C6.57321 11.1232 6 11.6954 6 12.4067C6
												13.1179 6.57321 13.6901 7.28571 13.6901ZM16.7143 11.1232C16.0018 11.1232 15.4286 11.6954 15.4286 12.4067C15.4286 13.1179 16.0018 13.6901 16.7143 13.6901C17.4268 13.6901 18 13.1179 18 12.4067C18 11.6954 17.4268 11.1232 16.7143
												11.1232Z "
                        fill="white "
                      />
                    </svg>
                  </ShoppingCart>
                </CardFront>
              </CardInner>
            </AddToBagButton>
          </div>
        </ProductDetailsSideInfos>
      </ProductDetailsWrapper>
    </Section>
    // 	)}
    // </ProductsContext.Consumer>
  );
}

export default ProductDetails;
