import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import Movie from './Movie';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

const Loading = styled.div`
  font-size: 24px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Error = styled.div`
  font-size: 20px;
  color: yellow;
  margin-top: 10px;
`;

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

function Movies() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Error>{error.message}</Error>;

  return (
    <Container>
      {data.movies.map(movie => (
        <Movie
          key={movie.id}
          id={movie.id}
          isLiked={movie.isLiked}
          bg={movie.medium_cover_image}
        />
      ))}
    </Container>
  );
}

export default Movies;
