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
const UserStatus = ({ user }) => {
  return (
    <>
      <div className="container">
        <div className="d-flex row px-5 user-status my-4 py-3">
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
              <div className="name col-lg-5 h1">
                {user.first_name} {user.last_name}
              </div>
              <div className="col-lg-6 col-12 mb-2">
                <button className="btn btn-outline-secondary bg-primary mx-1">
                  <Link className="text-decoration-none text-light ">Hire</Link>
                </button>
                <button className="btn btn-outline-secondary mx-1">
                  <Link className="text-decoration-none text-dark">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </Link>
                </button>
                <button className="btn btn-outline-secondary mx-1">
                  <Link className="text-decoration-none text-dark">
                    <FontAwesomeIcon icon={faEllipsis} />
                  </Link>
                </button>
              </div>
            </div>
            <div className="d-flex flex-column gap-2">
              <div className="gap3">{user.bio}</div>
              <div className="d-flex flex-column gap-2 text-secondary">
                {user.for_hire == true ? (
                  <Link to={""} className="text-decoration-none">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="rounded-circle bg-primary text-light"
                    />{" "}
                    Available for hire
                  </Link>
                ) : (
                  user.first_name + " is not for hire"
                )}
                <Link
                  className="text-decoration-none link link-secondary d-block"
                  to={`https://www.google.com/search?q=${user.location}`}
                >
                  <FontAwesomeIcon icon={faLocationPin} /> {user.location}
                </Link>
                <Link
                  to={user.instagram_username}
                  className="text-decoration-none link link-secondary"
                >
                  <FontAwesomeIcon icon={faFontAwesomeLogoFull} /> instagram
                </Link>
              </div>
              <div>interests</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserStatus;
