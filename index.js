import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers,
});

const port = process.env.PORT || 8080;

server.start({ port }, () =>
  console.log(`🚀 GraphQL Server is running on http://localhost:${port}`),
);
