import { Link } from "react-router-dom";
import WhiteParticles from "./particles";

const AboutUs = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center flex-column align-items-center"
        style={{ height: "90vh" }}
      >
        <WhiteParticles />
        <div className="z-1 col-10 col-sm-7 col-md-6">
          <div className="text-white h1 text-center saira-stencil display-1 ">
            Mohammad-khs Project
          </div>
          <div className="text-white text-center pb-3 border-bottom">
            I am a web development engineer and I use react TypeScript to
            develop pages. RPIP stands for React Project Infinite Picture Which
            is a project that i have built with the help of Unsplash api and
            tanstack-React-Query it basically is a gallery like Pinterest or
            Unsplash
          </div>
          <div className="d-flex justify-content-center gap-5 mt-3">
            <button className="btn btn-success rounded-0">
              <Link to={"https://github.com/mohammad-khs/RPIP"} className="text-white text-decoration-none">Project</Link>
            </button>
            <button className="btn btn-secondary rounded-0">
              <Link to={"https://github.com/mohammad-khs"} className="text-white text-decoration-none">Github</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
