import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../styles/userStatus.css";
import { faCheck, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import PictureContext from "../../contexts/pictureContext";
import {
  faInstagram,
  faPaypal,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const UserStatus = ({ user }) => {
  // const pictureContext = useContext(PictureContext);
  console.log(user);
  return (
    <>
      <div className="container">
        <div className="d-flex row px-5 user-status my-4 py-3 rounded-3 m-1">
          <div className="col-md-6 pe-4 col-sm-12 mb-5 ps-0 d-flex justify-content-md-end">
            <img
              src={user.profile_image.large}
              className="rounded-circle my-3 user-profile shadow-sm"
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
                  className="btn bg-warning mx-1"
                >
                  <Link
                    target="_blank"
                    to={`${user.portfolio_url}`}
                    className="text-decoration-none text-light"
                  >
                    Portfolio
                  </Link>
                </button>
                <button
                  className="btn btn-primary mx-1"
                  disabled={user.social.paypal_email !== null ? false : true}
                >
                  <Link
                    to={`https://www.paypal.com/${user.social.paypal_email}`}
                    className="text-decoration-none text-light"
                  >
                    <FontAwesomeIcon className="" icon={faPaypal} />
                  </Link>
                </button>
              </div>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="gap3">bio : {user.bio}</div>
              <div className="">
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
                    className="text-decoration-none user-status-links"
                    target="_blank"
                    to={`https://www.google.com/search?q=${user.location}`}
                  >
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faLocationPin}
                    />{" "}
                    {user.location ? user.location : "no location"}
                  </Link>
                </button>
                <button
                  disabled={user.instagram_username !== null ? false : true}
                  className="btn user-status-btn border-0 p-0 d-block mb-2"
                >
                  <Link
                    className="text-decoration-none user-status-links"
                    to={`https://www.instagram.com/${user.instagram_username}/`}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} /> instagram
                  </Link>
                </button>
                <button
                  disabled={user.twitter_username !== null ? false : true}
                  className="btn user-status-btn border-0 p-0 d-block mb-2"
                >
                  <Link
                    className="text-decoration-none user-status-links"
                    to={`https://www.twitter.com/${user.twitter_username}/`}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTwitter} /> twitter
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
