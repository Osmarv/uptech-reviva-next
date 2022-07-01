import styled from "styled-components";

export const Section = styled.section`
	background-color: #E0E0E0;
`
export const ProductDetailsWrapper = styled.div`
	margin: 1.5rem;
	display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductDetailsImage = styled.div`
  margin-right: 1rem;
`;

export const ProductDetailsSideInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductDetailsDescription = styled.div`
	display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductDetailsDescriptionName = styled.div`
	display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductDetailsPrice = styled.p`
	margin-top: 0.5rem;
	font-weight: bold;
	color: chocolate;
	align-self: center;
`;

export const ProductDetailsDescriptionText = styled.p`
	margin: 0.5rem 0;
`;

export const Thumbnails = styled.div`
	display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const Sizes = styled.div`
	display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Size = styled.label`
	margin: 0.5rem 0.5rem 0.5rem;
  padding: 0.3rem;
  border: 1px solid #C4C4C4;
`;

export const DetailRadio = styled.input`
	display: none;
	&:checked{
		+${Size}{
			background-color: #008844;
			color: white;
		}
	}
`;

export const AddToBagButton = styled.div`
	color: #FFFFFF;
  background-color: #008844;
  border-radius: 4px;
  display: grid;
	grid-template-columns: auto auto auto auto auto auto auto auto;
	margin: 0.5rem 0;
	perspective: 500px;
`;

export const CardInner = styled.div`
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
	display: grid;
	transition: transform 0.8s;
	transform-style: preserve-3d;
	grid-column-start: 1;
	grid-column-end: 8;
`;

export const CardFront = styled.div`
	display: grid;
  backface-visibility: hidden;
`;

export const CardFrontText = styled.p`
	font-size: 0.8em;
	grid-column-start: 3;
	grid-column-end: 6;
	align-self: center;
`;

export const ShoppingCart = styled.button`
	border-radius: 4px;
	background-color: #008844;
	border: none;
	grid-column-start: 8;
`;