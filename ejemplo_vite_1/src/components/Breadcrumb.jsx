import {Link} from 'react-router-dom';

const Breadcrumb = ({link, title, description}) => {
  return (
    <>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to={link}>{title}</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {description}
        </li>
      </ol>
    </nav>
    <hr />
    <h1>{description}</h1>
    <hr />
    </>
  )
}

export default Breadcrumb;