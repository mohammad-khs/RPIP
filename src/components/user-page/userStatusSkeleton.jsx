import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const UserStatusSkeleton = () => {
  return (
    <>
      <div className="row justify-content-center align-items-center container-md p-0 w-100 my-5">
        <div className="d-flex justify-content-end col-2 ms-5">
          <Skeleton
            baseColor="#999"
            highlightColor="#888"
            duration={1}
            circle
            height={150}
            width={150}
          />
        </div>
        <div className="col-5">
          <Skeleton
            className="w-75"
            baseColor="#999"
            highlightColor="#888"
            duration={1}
            height={30}
          />
          <Skeleton
            className="w-75"
            baseColor="#999"
            highlightColor="#888"
            duration={1}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default UserStatusSkeleton;
