import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import PictureContext from "../../contexts/pictureContext";
import { useContext } from "react";
import PicturesLayOut from "../search_picture/picturesLayOut";
import "../../styles/pictures.css";
import PicSkeleton from "../search_picture/skeleton";
import ErrorImg from "../errorImg";
import UserLoadMore from "../user-page/userLoadMore";

const RandomPicture = () => {
  const pictureContext = useContext(PictureContext);
  const randomQuery = useInfiniteQuery({
    queryKey: ["randomPictures"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?&${pictureContext.myKey}&count=10`
      );
      return response;
    },
    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },
    retry: 3,
  });



  if (randomQuery.isLoading) {
    return (
      <div>
        <PicSkeleton />
      </div>
    );
  }

  if (randomQuery.isError) {
    return (
      <div>
        <h2 className="text-center">{randomQuery.error.message}</h2>
        <ErrorImg />
      </div>
    );
  }
  return (
    <>
      <div className="gallery container-md p-0">
        {randomQuery.data.pages.map((page) => {
          return page.data.map((pic) => {
            return <PicturesLayOut key={pic.id} result={pic} />;
          });
        })}
      </div>
      <UserLoadMore query={randomQuery} />
    </>
  );
};

export default RandomPicture;
