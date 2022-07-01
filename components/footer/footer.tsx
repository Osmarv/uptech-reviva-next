import {
  Foiter,
  FooterContact,
  FooterContactP,
  FooterContactText,
  FooterHeaderWrapper,
  FooterMedias,
  FooterMediasImg,
  FooterMenu,
  FooterMenuItens,
  FooterMenuLink,
  FooterMenuList,
  FooterNewsletter,
  FooterNewsletterButton,
  FooterNewsletterDiv,
  FooterNewsletterEmail,
  FooterTelephone,
  FooterWhatsapp,
  FooterWrapper,
  ContentBrand,
  ContentBrandH1,
  ContentBrandP,
  H3,
} from "./footerStyle";

function Footer() {
  return (
    <Foiter>
      <FooterHeaderWrapper>
        <ContentBrand>
          <ContentBrandH1>Reviva Fashion</ContentBrandH1>
          <ContentBrandP>by RCHLO</ContentBrandP>
        </ContentBrand>
        <div></div>
      </FooterHeaderWrapper>

      <FooterWrapper>
        <FooterMenu>
          <nav>
            <H3>Menu</H3>
            <FooterMenuList>
              <FooterMenuItens>
                <FooterMenuLink href=" ">Página Inicial</FooterMenuLink>
              </FooterMenuItens>
              <FooterMenuItens>
                <FooterMenuLink href=" ">Masculino</FooterMenuLink>
              </FooterMenuItens>
              <FooterMenuItens>
                <FooterMenuLink href=" ">Feminino</FooterMenuLink>
              </FooterMenuItens>
              <FooterMenuItens>
                <FooterMenuLink href=" ">Infantil</FooterMenuLink>
              </FooterMenuItens>
              <FooterMenuItens>
                <FooterMenuLink href=" ">Manual de Moda</FooterMenuLink>
              </FooterMenuItens>
            </FooterMenuList>
          </nav>
        </FooterMenu>

        <FooterMedias>
          <H3>Siga-nos nas redes sociais</H3>
          <div>
            <FooterMediasImg
              src="/images/facebook-logo.png"
              alt="logo do facebook "
            />
            <FooterMediasImg
              src="/images/twitter-logo.png"
              alt="logo do twitter "
            />
            <FooterMediasImg
              src="/images/instagram-logo.png"
              alt="logo do instagram "
            />
            <FooterMediasImg
              src="/images/youtube-logo.png"
              alt="logo do youtube "
            />
          </div>
        </FooterMedias>

        <FooterContact>
          <H3>Entre em contato</H3>
          <FooterContactP>Contato</FooterContactP>
          <FooterContactP>reviva@rchlo.com.br</FooterContactP>
          <FooterWhatsapp>
            <FooterContactText>Whatsapp</FooterContactText>
            <img
              src={process.env.PUBLIC_URL + "/images/whatsapp-logo.png"}
              alt="logo do whatsapp "
            />
          </FooterWhatsapp>
          <FooterTelephone>
            <FooterContactText>11 2123-3321</FooterContactText>
            <img
              src={process.env.PUBLIC_URL + "/images/telephone-logo.png"}
              alt="logo do telefone "
            />
          </FooterTelephone>
        </FooterContact>

        <FooterNewsletter>
          <H3>Assine nossa newsletter</H3>
          <FooterNewsletterDiv>
            <FooterNewsletterEmail
              type="email "
              id="email "
              placeholder="Digite seu email "
              defaultValue="Search..."
            />
            <FooterNewsletterButton type="submit " value="CADASTRAR " />
          </FooterNewsletterDiv>
        </FooterNewsletter>
      </FooterWrapper>
    </Foiter>
  );
}

export default Footer;
