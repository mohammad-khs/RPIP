import { useContext } from "react";
import PictureContext from "../../contexts/pictureContext";
import PicSkeleton from "./skeleton";
import "../../styles/pictures.css";
import GoToTop from "./goToTop";
import LoadMore from "./loadMore";
import SearchBar from "./searchBar";
import PicturesLayOut from "./picturesLayOut";

import ErrorImg from "../errorImg";
const SearchPictures = () => {
  const pictureContext = useContext(PictureContext);

  // make if states more user friendly
  // like adding some pics
  // after you should make it downloadable and likable and also make it like an instagram page

  if (
    pictureContext.request === false &&
    pictureContext.pictureQuerys.isFetched === false
  ) {
    return (
      <>
        <SearchBar />
        <h2 className="mt-3 text-center">search something</h2>
      </>
    );
  }

  if (
    pictureContext.pictureQuerys.isLoading ||
    pictureContext.pictureQuerys.isFetching ||
    pictureContext.pictureQuerys.isRefetching
  ) {
    return (
      <>
        <SearchBar />
        <PicSkeleton />
      </>
    );
  }

  if (pictureContext.pictureQuerys.status === "error") {
    return (
      <>
        <SearchBar />
        <h2 className="text-center">
          {pictureContext.pictureQuerys.error.message}
        </h2>
        <ErrorImg />
      </>
    );
  }

  if (pictureContext.pictureQuerys.data.pages[0].data.total < 1) {
    return (
      <>
        <SearchBar />
        <div className="mt-5 text-center">
          <h2>SORRY</h2>
          <h2>NO ITEM FOUND</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <SearchBar />
      <div className="gallery container-md p-0">
        {pictureContext.pictureQuerys.data.pages.map((page) => {
          return page.data.results.map((result) => {
            return <PicturesLayOut key={result.id} result={result} />;
          });
        })}
      </div>
      <LoadMore query={pictureContext.pictureQuerys} />
      <GoToTop />
    </>
  );
};

export default SearchPictures;
