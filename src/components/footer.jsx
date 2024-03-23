import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import {
  faGithub,
  faLinkedin,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="text-center">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <Link
              to={
                "https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
              }
              className="btn btn-floating text-white m-1"
              role="button"
            >
              <FontAwesomeIcon className="h2" icon={faLinkedin} />
            </Link>

            <Link
              to={"https://github.com/mohammad-khs"}
              className="btn btn-floating text-white m-1"
              role="button"
            >
              <FontAwesomeIcon className="h2" icon={faGithub} />
            </Link>

            <Link
              to={"https://wa.me/09172275520"}
              className="btn btn-floating text-white m-1"
              role="button"
            >
              <FontAwesomeIcon className="h2" icon={faWhatsapp} />
            </Link>
            <Link
              to={
                "https://t.me/share/url?url=http://mohammad_khsv&text=Find_me_here!"
              }
              className="btn btn-floating text-white m-1"
              role="button"
            >
              <FontAwesomeIcon className="h2" icon={faTelegram} />
            </Link>
          </section>
        </div>

        <div className="text-center text-white p-3">
          Copyright © 2024 Mohammad Khosravani. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
