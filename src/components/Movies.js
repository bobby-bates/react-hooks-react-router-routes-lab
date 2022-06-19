import { movies } from "../data";

function Movies() {
  const movieMaker = movies.map(({ title, time, genres }) => (
    <div key={[title, time].join()}>
      <h2>{title}</h2>
      <h3>Runtime: {time} minutes</h3>
      <h4>Genres:</h4>
      <ul>
        {genres.map(genre => <li key={[title, genre].join()}>{genre}</li>)}
      </ul>
    </div>
  ))

  return (
    <>
      <h1>Movies Page</h1>
      {movieMaker}
    </>
    )
}

export default Movies;
