import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(to bottom, #1f1c18, #8e0e00);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Poster = styled.div`
  width: 30%;
  height: 60%;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
`;

const Loading = styled.div`
  font-size: 24px;
  color: yellow;
`;

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      language
      rating
      description_intro
      isLiked @client
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

function Detail() {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });

  if (loading) {
    return (
      <Container>
        <Loading>Loading...</Loading>
      </Container>
    );
  }

  console.log(data.movie);
  return (
    <Container>
      <Column>
        <Title>
          {data?.movie?.title}
          {data?.movie?.isLiked ? '💖' : '😞'}
        </Title>
        <Subtitle>{`${data?.movie?.language} · ${data?.movie?.rating}`}</Subtitle>
        <Description>{data?.movie?.description_intro}</Description>
      </Column>
      <Poster bg={data?.movie?.medium_cover_image}></Poster>
    </Container>
  );
}

export default Detail;
