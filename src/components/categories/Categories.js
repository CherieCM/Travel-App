import React from 'react';
import './categories.css';
// import blog from '../blog/blog';
//must use require to access images. Using import caused errors.
// const image3 = require('../../assets/image3.jpg');
// const image4 = require('../../assets/image4.jpg');
// const image1 = require('../../assets/Image1.jpg');
// const image6 = require('../../assets/image6.jpg');
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
    // <section className="categories">
    //   <h3>Adventure Awaits!</h3>
    //   <div className="grid">
    //     <div>
    //       <img src={image3} alt="destination-1" />
    //       <h3>Book Your Next Trip</h3>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ab nesciunt?
    //         Molestias rem qui sequi!
    //       </p>
    //     </div>

    //     <div>
    //       <img src={image1} alt="travel-tour" />
    //       <h3>Search Travel Group Tours</h3>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ab nesciunt?
    //         Molestias rem qui sequi!
    //       </p>
    //     </div>

    //     <div>
    //       <img src={image6} alt="students" />
    //       <h3>New Exchange Programs</h3>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ab nesciunt?
    //         Molestias rem qui sequi!
    //       </p>
    //     </div>
    //     <div>
    //       <img src={image4} alt="advice-from-travelers" />
    //       <h3>Chat with Other Travelers</h3>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ab nesciunt?
    //         Molestias rem qui sequi!
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Categories;
