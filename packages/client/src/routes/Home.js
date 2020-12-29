import { gql, useQuery } from '@apollo/client';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.movies.map(({ id, medium_cover_image }) => (
    <div key={id}>
      <p>{medium_cover_image}</p>
    </div>
  ));
}

export default Home;
