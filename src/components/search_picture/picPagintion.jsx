import { useContext } from "react";
import PictureContext from "../../contexts/pictureContext";

const PicPagination = () => {
  const pictureContext = useContext(PictureContext);

  return (
    <>
      <div>
        <button
          onClick={(e) => {
            pictureContext.setPage(1), pictureContext.setRequest(true);
          }}
        >
          {"<<"}
        </button>
        <button
          onClick={(e) => {
            pictureContext.pervPage(), pictureContext.setRequest(true);
          }}
        >
          perv
        </button>
        <button
          onClick={(e) => {
            pictureContext.nextPage(), pictureContext.setRequest(true);
          }}
        >
          next
        </button>
        <button
          onClick={(e) => {
            pictureContext.setPage(
              pictureContext.totalPages >= 201 ? 200 : pictureContext.totalPages
            ),
              pictureContext.setRequest(true);
          }}
        >
          {">>"}
        </button>
      </div>
    </>
  );
};

export default PicPagination;
