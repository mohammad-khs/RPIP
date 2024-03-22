import HomePageHeader from "./homePageHeader";
import "../../styles/home.css";
import Footer from "../footer";

const Home = () => {
  return (
    <>
      <div className="">
        <div>
          <HomePageHeader />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
