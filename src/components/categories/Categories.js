import React from 'react';
import './categories.css';

import data from '../../data/data1.json';
import CategoryList from './CategoryList';

const Categories = (props) => {
  return (
    <section className="category">
      <div className="grid">
        {data &&
          data.map((post) => (
            <CategoryList
              key={post.id}
              cover={post.cover}
              category={post.category}
              description={post.description}
            />
          ))}
      </div>
    </section>
  );
};

export default Categories;
