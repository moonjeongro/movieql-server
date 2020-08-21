import axios from 'axios';

const LIST_MOVIES_URL = "https://yts.mx/api/v2/list_movies.json"
const MOVIES_DETAIL_URL = "https://yts.mx/api/v2/movie_details.json"

export const getMoveis = async (limit, minimum_rating) => {
  const {
    data: {
      data: {movies}
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating
    }

  })
  return movies;
}

export const getMovie = async id => {
  const {
    data: {
      data: {movie}
    }
  } = await axios(MOVIES_DETAIL_URL, {
    params: {
      movie_id: id
    }

  })
  return movie;
}