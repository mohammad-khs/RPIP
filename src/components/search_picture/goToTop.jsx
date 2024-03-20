import { useContext } from "react";
import PictureContext from "../../contexts/pictureContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
const GoToTop = () => {
  const pictureContext = useContext(PictureContext);
  const handleGoToTop = () => {
    pictureContext.ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        //   make it disappear when search bar is visible

        // disabled={
        //     pictureContext.ref
        // }
        onClick={handleGoToTop}
        style={{ position: "fixed", bottom: "8%", right: "5%", zIndex: 11 }}
        className="btn fs-5 btn-warning rounded-circle"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  );
};

export default GoToTop;
