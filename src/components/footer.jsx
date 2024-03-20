import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-body-tertiary text-center">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            {/* <!-- Twitter --> */}
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </Link>

            {/* <!-- Google --> */}
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              
              role="button"
            >
              <i className="fab fa-google"></i>
            </Link>

            {/* <!-- Instagram --> */}
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </Link>

            {/* <!-- Linkedin --> */}
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>
            {/* <!-- Github --> */}
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              role="button"
            >
              <i className="fab fa-github"></i>
            </Link>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"

        >
          © 2024 Copyright:
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
};

export default Footer;
