import React from 'react';
import blogCards from '../../data/data.json';
import './blog.css';

const Blog = () => {
  return (
    <div className="categories">
      <h2 className="blogTitle"> Travel Blogs </h2>
      <br />

      {blogCards &&
        blogCards.map((blogs) => {
          return (
            <div className="cards" key={blogs.id}>
              <div className="title">
                <strong>{blogs.title}</strong>
                <br />
                {blogs.category}
                <br />
                {blogs.description}
                <br />
              </div>

              <div className="author">
                {blogs.authorName}
                <br />
                <div>
                  <img alt="user-icon" src={blogs.authorAvatar} />
                </div>
                <br />
                {blogs.createdAt}
                <br />
              </div>

              <br />
            </div>
          );
        })}
    </div>
  );
};

export default Blog;

//react context API is best used for global data that does not change frequently
