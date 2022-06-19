import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink to='/movies'>Movies</NavLink>
      <NavLink to='/directors'>Directors</NavLink>
      <NavLink to='/actors'>Actors</NavLink>
    </>
  )
}

export default NavBar;
