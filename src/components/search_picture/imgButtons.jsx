import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import PictureContext from "../../contexts/pictureContext";

const ImgButtons = ({ result }) => {
  const pictureContext = useContext(PictureContext);
  const [likeColor, setLikeColor] = useState("black");
  const handleLike = async () => {
    if (likeColor === "black") {
      setLikeColor("red");
    } else {
      setLikeColor("black");
    }
  };
  return (
    <>
      <div className="img-btns d-flex justify-content-between m-2 mb-4 mb-sm-5 m-md-0">
        <button className="img-btn download-img-btn btn btn-light">
          <Link
            to={
              `https://unsplash.com/photos/${result.id}/download?force=true` +
              "?" +
              pictureContext.myKey
            }
            rel="nofollow"
            target="_blank"
            download
          >
            <FontAwesomeIcon color="black" icon={faArrowDown} />
          </Link>
        </button>
        <button onClick={handleLike} className="img-btn like-btn btn btn-light">
          {/* it should get alternated to Link tag  */}
          <div style={{ color: likeColor }}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </button>
      </div>
    </>
  );
};

export default ImgButtons;
