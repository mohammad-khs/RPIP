import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PictureContext from "../contexts/pictureContext";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo";
const Navbar = () => {
  const pictureContext = useContext(PictureContext);
  const [isOpen, setIsOpen] = useState(false);
  const sideBarRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
  return (
    <>
      <nav
        ref={pictureContext.ref}
        className="navbar navigationBar p-0 navbar-expand-lg"
      >
        <div className="collapse navbar-collapse align-items-center">
          <ul className="d-flex m-0 align-items-center w-100 justify-content-center">
            <li className="nav-item ms-3 me-auto">
              <Link className="h1 text-decoration-none text-white " to={"/RPIP/"}>
                <Logo />
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link text-white p-3" to={"/RPIP/search"}>
                SEARCH
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white p-3" to={"/RPIP/randomPicture"}>
                EXPLORE
              </Link>
            </li>{" "}
            <li className="nav-item ">
              <Link className="nav-link text-white p-3 pe-5" to={"/RPIP/aboutUs"}>
                ABOUT US
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={(e) => setIsOpen(!isOpen)}
          className="btn ms-auto me-3 my-2 d-lg-none"
        >
          <FontAwesomeIcon className="h1 m-0 text-white" icon={faBars} />
        </button>
      </nav>
      <div
        ref={sideBarRef}
        className={`navigationBar h-100 side-bar ${isOpen ? "" : "side-close"}`}
      >
        <div className="mt-4">
          <Link
            className="h1 text-center text-decoration-none text-white "
            to={"/RPIP/"}
          >
            <Logo />
          </Link>
        </div>

        <button
          onClick={(e) => setIsOpen(!isOpen)}
          className="btn d-flex m-2 ms-auto"
        >
          <FontAwesomeIcon className="h3 m-0 text-white" icon={faXmark} />
        </button>
        <ul className="d-lg-none me-3 mt-3 me-5">
          <li className="nav-item mb-3 me-5">
            <Link className="nav-link" to={"/RPIP/"}>
              HOME
            </Link>
          </li>
          <li className="nav-item mb-3 me-5">
            <Link className="nav-link" to={"/RPIP/search"}>
              SEARCH
            </Link>
          </li>
          <li className="nav-item mb-3 me-5">
            <Link className="nav-link" to={"/RPIP/randomPicture"}>
              EXPLORE
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
