import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      genres
      rating
      language
      genres
      medium_cover_image
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      description_intro
      id
      title
      genres
      medium_cover_image
      rating
    }
    suggestions(id: $movieId) {
      title
      rating
      medium_cover_image
    }
  }
`;
