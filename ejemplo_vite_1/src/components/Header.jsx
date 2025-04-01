import { Link } from "react-router-dom";
import { MenuConstants } from '../text';

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="border-bottom lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <Link className="link-secondary" to="#">
                Subscribe
              </Link>
            </div>
            <div className="col-4 text-center">
              <Link className="blog-header-logo text-body-emphasis text-decoration-none" to="/">
                <img className="reduced_image" src="/captura.svg"  />
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <Link className="link-secondary" to="#" aria-label="Search"></Link>
              <Link className="btn btn-sm btn-outline-secondary" to="#">
                Sign up
              </Link>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-3 border-bottom">
          <nav className="nav nav-underline justify-content-between">
            <Link className="nav-item nav-link link-body-emphasis" to="/" title={MenuConstants.home}>
              {MenuConstants.home}
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/forms" title={MenuConstants.form}>
              {MenuConstants.form}
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/routes" title={MenuConstants.routes}>
              {MenuConstants.routes}
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/about" title={MenuConstants.about}>
              {MenuConstants.about}
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/hooks" title={MenuConstants.hook}>
              {MenuConstants.hook}
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/utils" title={MenuConstants.utility}>
              {MenuConstants.utility}
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/material" title={MenuConstants.material}>
              {MenuConstants.material}
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/storage" title={MenuConstants.storage}>
              {MenuConstants.storage}
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
