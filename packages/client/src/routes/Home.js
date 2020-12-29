import styled from 'styled-components';
import Movies from '../components/Movies';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background: #8e0e00;
  background: linear-gradient(to top, #1f1c18, #8e0e00);
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  margin-bottom: 30px;
`;

function Home() {
  return (
    <Container>
      <Header>
        <Title>Apollo Movie</Title>
        <Subtitle>Carrot Cold</Subtitle>
      </Header>
      <Movies />
    </Container>
  );
}

export default Home;
