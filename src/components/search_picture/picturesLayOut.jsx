import ImgButtons from "./imgButtons";
import UserInfo from "./userInfo";
import "../../styles/pictures.css";
const PicturesLayOut = ({ result }) => {
  return (
    <div className="pics-card" key={result.id}>
      <div className="img-container">
        <div className="img-overlay" aria-label={result.alt_description}>
          <ImgButtons result={result} />
          <UserInfo result={result} />
        </div>
        <div className="d-md-none">
          <UserInfo result={result} />
        </div>
        <img
          className="pics"
          src={result.urls.small}
          alt={result.alt_description}
        />
        <div className="d-md-none">
          <ImgButtons result={result} />
        </div>
      </div>
    </div>
  );
};

export default PicturesLayOut;
