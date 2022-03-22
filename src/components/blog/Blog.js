import React, { useContext } from 'react';
import { BlogContext } from '../../contexts/BlogContext';

// import { blogContent } from '../../data/data.json';
// import blogs from './blogs';

//react context API is best used for global data that does not change frequently

const Blog = () => {
  const { blog } = useContext(BlogContext);

  return (
    <section className="category">
      <div className="grid">
        <h1> Hello World</h1>
        <ul className="">
          {blog &&
            blog.map((blog) => {
              return <li key={blog.id}>{blog.title}</li>;
            })}
        </ul>
      </div>
    </section>
  );
};

// const Blog = (props) => {
//   console.log('blogs', blogContent);
//   return (
//     <section className="category">
//       <div className="grid">
//         {blogContent &&
//           blogContent.map((blogContent) => (
//             <blogs
//               key={blogContent.id}
//               cover={blogContent.cover}
//               title={blogContent.title}
//               category={blogContent.category}
//               description={blogContent.description}
//               // author_name={blogContent.author_name}
//               author_avatar={blogContent.author_avatar}
//               created_at={blogContent.created_at}
//             />
//           ))}
//       </div>
//     </section>
//   );
// };
export default Blog;
