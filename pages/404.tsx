import Link from 'next/link';
import Header from '../components/header/header'
import {
    Main,
    TextH3,
    TextP,
    PaymentButton
} from './404styles'

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