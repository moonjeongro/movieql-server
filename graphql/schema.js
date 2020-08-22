import {gql} from 'apollo-server-express';

const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
    rating: Float!
    summary: String!
    language: String!
    medium_cover_image: String!
  }

  type MovieDetail {
    id: Int!
    title: String!
    rating: Float!
    runtime: Int!
    genres: [String]
    description_intro: String!
    medium_cover_image: String!
  }

  type Query {
    movies(limit: Int, minimum_rating: Float): [Movie]!
    movie(id: Int!): MovieDetail!
  }
`;

export default typeDefs;