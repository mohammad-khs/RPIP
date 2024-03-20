import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../styles/picSkeleton.css";
const PicSkeleton = () => {
  const arr = Array(10).fill("");

  return (
    <div className="p-0 container-md pic-skeleton">
      {arr.map((a, key) => {
        return (
          <div key={key} style={{ margin: "0 0 5px 0" }}>
            <Skeleton
              baseColor="#999"
              highlightColor="#888"
              duration={1}
              height={Math.floor(Math.random() * (800 - 350 + 1) + 350)}
            />
            <div
              style={{ width: "100%" }}
              className="skeleton-button-container d-md-none"
            >
              <div className="left-btns">
                <Skeleton
                  baseColor="#999"
                  className="mx-2"
                  highlightColor="#888"
                  duration={1}
                  height={35}
                  width={35}
                  count={2}
                  inline="true"
                />
              </div>
              <div className="right-btn">
                <Skeleton
                  baseColor="#999"
                  highlightColor="#888"
                  duration={1}
                  height={35}
                  width={100}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PicSkeleton;
