import axios from "axios";
import { useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import PictureContext from "./contexts/pictureContext";
import "./styles/app.css";
import { Route, Routes } from "react-router-dom";
import UserPage from "./components/user-page/userPage";
import NotFound from "./components/notFound";
import RandomPicture from "./components/random_picture/randomPicture";
import SearchPictures from "./components/search_picture/pictures";
import Home from "./components/home-page/home";
import NavigationBar from "./components/navbar";

function App() {
  const [item, setItem] = useState("");
  const [itemToSearch, setItemToSearch] = useState(null);
  const [request, setRequest] = useState(false);
  const ref = useRef(null);
  const myKey = "client_id=GvoOb3F8RT3ABngy7ADZpk-9yiAPrUoXaJfej89nZjs";
  const pictureQuerys = useInfiniteQuery({
    queryKey: ["pictures", [itemToSearch]],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${itemToSearch}&${myKey}&page=${pageParam}`
      );

      setRequest(false);
      return response;
    },
    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },
    enabled: request,
    retry: 3,
  });

  return (
    <>
      <PictureContext.Provider
        value={{
          item,
          request,
          itemToSearch,
          setItem,
          setRequest,
          setItemToSearch,
          pictureQuerys,
          myKey,
          ref,
        }}
      >
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="randomPicture">
            <Route index element={<RandomPicture />} />
            <Route path=":userId" element={<UserPage />} />
          </Route>
          <Route path="search">
            <Route index element={<SearchPictures />} />
            <Route path=":userId" element={<UserPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PictureContext.Provider>
    </>
  );
}

export default App;
