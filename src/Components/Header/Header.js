import { Link } from "react-router-dom";
import "./Header.css";
import { useNotifyContext } from "../../notifyContext";
import { useAuthContext } from "../../authContext";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { user, logOut } = useAuthContext();
  const { notification } = useNotifyContext();
  const { pathname } = useLocation();

  //setUser({user: 'Nasko', email: 'peter@abv.bg', _id: '35c62d76-8152-4626-8712-eeb96381bea8', accessToken: '40cc7165ccd1308dacae93ed6ac6ad9f798e51c6f39086ec4bcd2563a869d00f'})
  console.log(pathname);
  console.log(user);

  let loggedNavigation = (
    <nav>
      <p className="MyHeader_p">
        Здравей, <span>{user.email}</span>!
      </p>
      <ul className="MyHeader_ul">
        <li>
          <Link
            to="/"
            style={
              pathname === "/"
                ? { borderBottom: "solid 2px white" }
                : { color: "black" }
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/contacts"
            style={
              pathname === "/contacts"
                ? { borderBottom: "solid 2px white" }
                : { color: "black" }
            }
          >
            Contacts
          </Link>
        </li>
        <li>
          <Link
            to="/forum"
            style={
              pathname === "/forum"
                ? { borderBottom: "solid 2px white" }
                : { color: "black" }
            }
          >
            Forum
          </Link>
        </li>
        <li>
          <Link
            to="/articles"
            style={
              pathname === "/articles"
                ? { borderBottom: "solid 2px white" }
                : { color: "black" }
            }
          >
            Articles
          </Link>
        </li>
        <li className="cascades">
          Cascade
          <ul className="cascade">
            <li>
              <Link to="/">Home
              <ul className="cascadeSub">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          </Link> </li>

            <li>
              <Link to="/procedures">Procedures</Link>
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
          <Link
            to="/"
            style={
              pathname === "/"
                ? { borderBottom: "solid 2px white" }
                : { color: "black" }
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/articles"
            style={
              pathname === "/articles"
                ? { borderBottom: "solid 2px white" }
                : { color: "black" }
            }
          >
            Articles
          </Link>
        </li>
        <li>
          <Link
            to="/forum"
            style={
              pathname === "/forum"
                ? { borderBottom: "solid 2px white" }
                : { color: "black" }
            }
          >
            Forum
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            style={
              pathname === "/register"
                ? { borderBottom: "solid 2px white" }
                : { color: "black" }
            }
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            style={
              pathname === "/login"
                ? { borderBottom: "solid 2px white" }
                : { color: "black" }
            }
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className="MyHeader">
      {notification ? (
        <p className="notification">
          <span className="notification_span">{notification}</span>
        </p>
      ) : (
        ""
      )}

      <div className="MyHeader_div">
        <h1 className="MyHeader_h1">APEX</h1>
        <ul className="buttons_ul">
          <li>
            <button style={
                pathname === "/claims"
                  ? { backgroundColor: "#9c4b9e" }
                  : { backgroundColor: "" }
              } > <Link to="/claims">Жалби</Link></button>
          </li>
          <li>
            <button
              style={
                pathname === "/consultation"
                  ? { backgroundColor: "#9c4b9e" }
                  : { backgroundColor: "" }
              }
            >
              <Link to="/consultation">Консултации</Link>
            </button>
          </li>
          <li>
            <button
              style={
                pathname === "/info"
                  ? { backgroundColor: "#9c4b9e" }
                  : { backgroundColor: "" }
              }
            >
              <Link to="/info">Информация</Link>
            </button>
          </li>
          <li>
            <button
              style={
                pathname === "/currentInfo"
                  ? { backgroundColor: "#9c4b9e" }
                  : { backgroundColor: "" }
              }
            >
              {" "}
              <Link to="/currentInfo">Текуща информация</Link>
            </button>
          </li>
        </ul>
      </div>
      {user.email ? loggedNavigation : guestNavigation}
    </header>
  );
};
