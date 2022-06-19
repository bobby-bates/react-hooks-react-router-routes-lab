import { directors } from "../data";

function Directors() {
  const directorMaker = directors.map(({ name, movies }) => (
    <div key={name}>
      <h2>{name}</h2>
      <h3>Movies:</h3>
      <ul>
        {movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  ))

  return (
    <>
      <h1>Directors Page</h1>
      {directorMaker}
    </>
    )
}

export default Directors;
