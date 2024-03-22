import { Link } from "react-router-dom";
import Logo from "../logo";

const HomePageHeader = () => {
  return (
    <>
      <div className="slide-bar-img w-100 d-flex text-center justify-content-center">
        <div className="display-1 text-white align-self-center">
          <Logo />
          <div className="mb-4">gallery</div>
          <button className="rounded-5 lets-start-btn btn btn-lg">
            <div className="h1 m-0">
              <Link
                className="text-decoration-none text-white"
                to={"/RPIP/search"}
              >
                lets start
              </Link>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePageHeader;
