import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080',
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        const myMovie = {
          __typename: 'Movie',
          id,
          isLiked,
        };

        cache.modify({
          id: cache.identify(myMovie),
          fields: { isLiked: cached => !cached },
        });
      },
    },
  },
});

export default client;
