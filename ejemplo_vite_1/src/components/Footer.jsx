import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="py-5 text-center text-body-secondary bg-body-tertiary">
        <p>
          Blog template built for{" "}
          <Link to="https://getbootstrap.com/">Bootstrap</Link>.
          by{" "}
          <Link to="https://twitter.com/mdo">@mdo</Link>.
          modified by {" "}
          <Link to="https://github.com/Zeifen/2025">Zeifen</Link>.
        </p>
        <p className="mb-0">
          <Link to="#">Back to top</Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
