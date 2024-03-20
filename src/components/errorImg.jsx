import errorImg from "../imgs/error_img.svg";
const ErrorImg = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-md-5 col-lg-4">
            <img src={errorImg} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorImg;
