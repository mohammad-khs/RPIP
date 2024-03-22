import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });

  return (
    <>
      <div className="text-white h1 m-3">404 not found</div>
    </>
  );
};

export default NotFound;
