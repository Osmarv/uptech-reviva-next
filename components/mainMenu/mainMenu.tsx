import { MainMenuWrapper, MainMenuList, MainMenuLink } from "./mainMenuStyles";
import Link from 'next/link';

function MainMenu () {
return(
    <MainMenuWrapper>
        <MainMenuList>
            <Link href="/"><MainMenuLink>Página Inicial</MainMenuLink></Link>
            <Link href="masculino"><MainMenuLink>Masculino</MainMenuLink></Link>
            <Link href="feminino"><MainMenuLink>Feminino</MainMenuLink></Link>
            <Link href="infantil"><MainMenuLink>Infantil</MainMenuLink></Link>
            <Link href="manual de moda"><MainMenuLink>Manual de Moda</MainMenuLink></Link>
        </MainMenuList>
    </MainMenuWrapper>
)
}

export default MainMenu;