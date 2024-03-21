import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../styles/userStatues.css";
import {
  faCheck,
  faEllipsis,
  faEnvelope,
  faFontAwesomeLogoFull,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import PictureContext from "../../contexts/pictureContext";
const UserStatus = ({ user }) => {
  const pictureContext = useContext(PictureContext);
  console.log(user);
  return (
    <>
      <div className="container">
        <div className="d-flex row px-5 user-status my-4 py-3 m-1">
          <div className="col-md-6 pe-4 col-sm-12 mb-5 ps-0 d-flex justify-content-md-end">
            <img
              src={user.profile_image.large}
              className="rounded-circle my-3 user-profile border"
              alt=""
            />
          </div>

          <div
            className="col-sm-12 ps-4 col-md-6 d-flex"
            style={{ flexDirection: "column" }}
          >
            <div className="row gap-md-3 align-items-center">
              <div className="name col-lg-5 h3">
                {user.first_name} {user.last_name}
              </div>
              <div className="col-lg-6 col-12 mb-2">
                <button
                  disabled={user.portfolio_url !== null ? false : true}
                  className="btn btn-outline-secondary bg-primary mx-1"
                >
                  <Link
                    target="_blank"
                    to={`${user.portfolio_url}`}
                    className="text-decoration-none text-light "
                  >
                    Portfolio
                  </Link>
                </button>
                <button className="btn btn-outline-secondary mx-1">
                  {/* it should get alternated to Link tag  */}
                  <div className="text-decoration-none text-dark">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                </button>
              </div>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="gap3">bio : {user.bio}</div>
              <div className="text-secondary ">
                {user.for_hire == true ? (
                  <div className="text-decoration-none mb-2">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="rounded-circle bg-primary text-light"
                    />{" "}
                    Available for hire
                  </div>
                ) : (
                  <div className="text-decoration-none mb-2">
                    {user.first_name} is not for hire
                  </div>
                )}
                <button
                  disabled={user.location !== null ? false : true}
                  className="btn user-status-btn p-0 border-0 d-block mb-2"
                >
                  <Link
                    className="text-decoration-none link-secondary"
                    target="_blank"
                    to={`https://www.google.com/search?q=${user.location}`}
                  >
                    <FontAwesomeIcon icon={faLocationPin} />{" "}
                    {user.location ? user.location : "no location"}
                  </Link>
                </button>
                <button
                  disabled={user.instagram_username !== null ? false : true}
                  className="btn user-status-btn border-0 p-0 d-block mb-2"
                >
                  <Link
                    target="_blank"
                    to={`https://www.instagram.com/${user.instagram_username}/`}
                    className="text-decoration-none link-secondary"
                  >
                    <FontAwesomeIcon icon={faFontAwesomeLogoFull} /> instagram
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserStatus;
