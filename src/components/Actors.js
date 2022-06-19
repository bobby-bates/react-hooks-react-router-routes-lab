import { actors } from "../data";

function Actors() {
  const actorMaker = actors.map(({ name, movies }) => (
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
      <h1>Actors Page</h1>
      {actorMaker}
    </>
    )
}

export default Actors;
