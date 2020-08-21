import { getMoveis, getMovie } from './db'

const resolvers = {
    Query: {
        movies: (_, {limit, minimum_rating}) => getMoveis(limit, minimum_rating),
        movie: (_, {id}) => getMovie(id)
    }
};

export default resolvers;