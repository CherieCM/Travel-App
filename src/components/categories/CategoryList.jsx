import './categories.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryList = ({ cover, category, description }) => {
  return (
    <section className={'categories'}>
      <div className={'grid'}>
        <img src={cover} alt={'travel pics'} />
        <Link style={{ textDecoration: 'none' }} to="/search">
          <h1>{category}</h1>
        </Link>
        <p>{description}</p>
      </div>
    </section>
  );
  // prop-types validation
};
CategoryList.propTypes = {
  cover: PropTypes.string,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default CategoryList;
