import { Title, TitleSecond, Container, Content, LogoContainer } from "./styles";
import Button from "../Button";
export const Head = () => {
  return (
    <div>
       
      <Container>
        <LogoContainer>
        <Title>Rocket</Title>
         <TitleSecond>NFTs</TitleSecond>
        </LogoContainer>

  
        <a>Comprar NFTs</a>
        <a>Sobre</a>
        <a>FAQ</a>
        <Button>Conectar carteira</Button>
      </Container>

      <Content>
        <div>
        <h4>Mercado digital para colecionáveis em criptos e tokens não fungível
        (NFT). Compre, venda e descubra ativos digitais exclusivos para você.</h4>
          </div>
          <h1>Descubra a verdadeira arte digital e colecione diversas NFTs </h1>

       
      </Content>
    </div>
  );
};
