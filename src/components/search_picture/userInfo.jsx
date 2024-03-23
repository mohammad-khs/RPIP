import { Link } from "react-router-dom";
const UserInfo = ({ result }) => {
  function handleState() {
    if (location.href.endsWith(`/${result.user.id}`)) {
      return null;
    }
    return result.user.id;
  }
  return (
    <>
      <div className="img-btn d-flex align-content-md-center m-2 my-md-0 justify-content-start user-info">
        <Link className="" to={handleState()} state={result.user}>
          <img
            className="rounded-circle"
            src={result.user.profile_image.small}
            alt=""
          />
        </Link>
        <div className="user-name mx-2">
          <Link
            className="text-decoration-none user-id text-white"
            to={handleState()}
            state={result.user}
          >
            {result.user.first_name} {result.user.last_name}
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
