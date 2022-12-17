import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthContext } from "../../authContext";
export const Header = () => {

  const {user, setUser, logOut} = useAuthContext();


//setUser({user: 'Nasko', email: 'peter@abv.bg', _id: '35c62d76-8152-4626-8712-eeb96381bea8', accessToken: '40cc7165ccd1308dacae93ed6ac6ad9f798e51c6f39086ec4bcd2563a869d00f'})

  console.log(user);

  let loggedNavigation = (
    <nav>
      <p className="MyHeader_p">
        Hi, <span>{user.email}</span>!
      </p>
      <ul className="MyHeader_ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
        <li>
          <Link to="/articles">Статии</Link>
        </li>
        <li className="cascades">
          Cascade
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
      <ul className="MyHeader_ul">
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

  return (
    <header className="MyHeader">
      <div className="MyHeader_div">
      <h1 className="MyHeader_h1">APEX</h1>
      <ul className="buttons_ul">
        <li><button>Жалби</button></li>
        <li><button>Консултации</button></li>
        <li><button><Link to='/info'>Информация</Link></button></li>
        <li><button>Текуща информация</button></li>
      </ul>
      </div>
      {user.email ? loggedNavigation : guestNavigation}
    </header>
  );
};
