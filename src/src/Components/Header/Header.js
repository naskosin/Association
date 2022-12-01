import { Link } from "react-router-dom";
import "./Header.css";
export const Header = ({ logOut, user }) => {
  console.log(user);

  let loggedNavigation = (
    <nav>
      <p className="greeting">
        Hi, <span>{user.email}</span>!
      </p>
      <ul className="ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li className="cascades"  >Cascade  
    
      <ul className="cascade">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
        
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
  
 </li>
        <li>
          <button href="#" className="button" onClick={logOut}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );

  let guestNavigation = (
    <nav>
      <ul className="ul" >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
        <li>
        
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );

  return <header>
    <h1>APEX</h1>
    {user.email ? loggedNavigation : guestNavigation}</header>;
};
