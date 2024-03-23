import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PictureContext from "../../contexts/pictureContext";
import UserStatus from "./userStatus";
import PicturesLayOut from "../search_picture/picturesLayOut";
import "../../styles/pictures.css";
import PicSkeleton from "../search_picture/skeleton";
import UserStatusSkeleton from "./userStatusSkeleton";
import GoToTop from "../search_picture/goToTop";
import UserLoadMore from "./userLoadMore";
import ErrorImg from "../errorImg";

const UserPage = () => {
  const handleGoToTop = () => {
    pictureContext.ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const location = useLocation();
  const pictureContext = useContext(PictureContext);
  useEffect(() => {
    handleGoToTop();
  }, []);
  const userQuery = useInfiniteQuery({
    // there is a problem with queryKey
    queryKey: ["user", [location.state.id]],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axios.get(
        `${location.state.links.photos}?${pictureContext.myKey}&page=${pageParam}`
      );
      return response;
    },
    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },
  });
  if (userQuery.isError) {
    return (
      <>
        <h2 className="text-center">{userQuery.error.message}</h2>
        <ErrorImg />
      </>
    );
  }

  return (
    <>
      {userQuery.isLoading ? (
        <>
          <div>
            <UserStatusSkeleton />
            <PicSkeleton />
          </div>
        </>
      ) : (
        <div className="">
          <UserStatus user={userQuery.data.pages[0].data[0].user} />
          <div className="gallery container-md p-0">
            {userQuery.data.pages.map((page) => {
              return page.data.map((pic) => {
                return <PicturesLayOut key={pic.id} result={pic} />;
              });
            })}
            <GoToTop />
          </div>
          <UserLoadMore query={userQuery} />
        </div>
      )}
    </>
  );
};

export default UserPage;
