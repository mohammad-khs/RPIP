import { useContext } from "react";
import PictureContext from "../../contexts/pictureContext";

const SearchBar = () => {
  const pictureContext = useContext(PictureContext);

  return (
    <>
      <div className="p-2 text-center">
        <input
          type="text"
          value={pictureContext.item}
          disabled={pictureContext.request}
          onChange={(e) => pictureContext.setItem(e.target.value)}
          autoFocus
          autoCorrect="true"
          name="search-bar"
          className="m-2 btn btn-dark"
          onKeyDown={(e) =>
            e.key === "Enter"
              ? [
                  pictureContext.setItemToSearch(e.target.value),
                  pictureContext.setRequest(true),
                ]
              : null
          }
        />
      </div>
    </>
  );
};

export default SearchBar;
