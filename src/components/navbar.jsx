import { useContext } from "react";
import { Link } from "react-router-dom";
import PictureContext from "../contexts/pictureContext";
import "../styles/navbar.css";

const Navbar = () => {
  const pictureContext = useContext(PictureContext);
  return (
    <>
      <nav
        ref={pictureContext.ref}
        className="navbar navbar-expand-sm navigationBar mb-3"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"search"}>
              SEARCH
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"randomPicture"}>
              EXPLORE
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
