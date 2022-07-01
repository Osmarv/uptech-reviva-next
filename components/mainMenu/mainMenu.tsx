import { MainMenuWrapper, MainMenuList, MainMenuLink } from "./mainMenuStyles";

function MainMenu () {
return(
    <MainMenuWrapper>
        <MainMenuList>
            <MainMenuLink href="/"><li>Página Inicial</li></MainMenuLink>
            <MainMenuLink href="/masculino"><li>Masculino</li></MainMenuLink>
            <MainMenuLink href="/feminino"><li>Feminino</li></MainMenuLink>
            <MainMenuLink href="/infantil"><li>Infantil</li></MainMenuLink>
            <MainMenuLink href="/manual de moda"><li>Manual de Moda</li></MainMenuLink>
        </MainMenuList>
    </MainMenuWrapper>
)
}

export default MainMenu;