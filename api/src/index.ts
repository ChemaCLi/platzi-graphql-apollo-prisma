import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    info: String!
    "Retrieves all the avocatos we know"
    avocados: [Avocado!]!
    avocado(id: ID!): Avocado
  }

  type Mutation {
    addAvocado(avocado: AddAvocadoInput!): AddAvocadoResponse
  }

  type AddAvocadoResponse {
    code: Int!
    success: Boolean!
    message: String!
    avocado: Avocado
  }

  input AddAvocadoInput {
    name: String!
    picture: String
    price: Float
    unitMeasurement: String
  }

  "An univer gift"
  type Avocado {
    id: ID!
    name: String!
    "Picture URL"
    picture: String
    price: Float
    unitMeasurement: String
  }
`;

const resolvers = {
  Query: {
    info: () => 'This is my API'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server
  .listen()
  .then(({ url }) => console.log(`Server is running on ${url}`))
