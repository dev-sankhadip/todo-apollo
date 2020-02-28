import { ApolloServer,gql } from 'apollo-server';

import { resolver as resolvers, schema as typeDefs } from './graphql/schema/index';


const server = new ApolloServer({ typeDefs, resolvers, cors:true });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});