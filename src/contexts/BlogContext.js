// import React, { createContext, useState, useEffect } from 'react';
// import blogData from '../data/data.json';

// create the context
// export const BlogContext = createContext();

// export const BlogContextProvider = (props) => {
//   const [loading, setLoading] = useState(false);
//   const [blogs, setBlogs] = useState([]);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       setLoading(true);
//       try {
// 'http://localhost:8080/blog';
//         const response = await fetch('http://localhost:8080/blog');
//         console.log(response);
//         const data = await response.json();
//         setBlogs(data);
//       } catch (e) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   const value = {
//     loading,
//     blogs,
//     error,
//   };

//   return <BlogContext.Provider value={value}> {props.children} </BlogContext.Provider>;
// };
// export default BlogContextProvider;
