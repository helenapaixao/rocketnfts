import { Title, TitleSecond, Container, ContainerCard,Content } from "./styles";
import { CardPrimary } from "../CardPrimary";
import { CardSecondary } from "../CardSecondary";



export const BetterArtists = () => {
  return (
    <>
      <Container>
        <Title>Melhores</Title>
        <TitleSecond>artistas</TitleSecond>
      </Container>
      <Content>
      <ContainerCard>
      <CardPrimary />
      <CardSecondary />
      </ContainerCard>

      </Content>
 
      
    </>
  );
};
