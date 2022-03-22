import './categories.css';
import PropTypes from 'prop-types';

const CategoryList = ({ cover, category, description }) => {
  return (
    <section className={'categories'}>
      <div className={'grid'}>
        <img src={cover} alt={'travel pics'} />
        <h1>{category}</h1>
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
