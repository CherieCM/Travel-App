import React, { createContext, useState, useEffect } from 'react';
import blogData from '../data/data.json';

// create the context
export const BlogContext = createContext();

export const BlogContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        // 'http://localhost:8080/blog';
        const response = await fetch(blogData);
        console.log(response);
        const data = await response.json();
        setBlogs(data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const value = {
    loading,
    blogs,
    error,
  };

  return <BlogContext.Provider value={value}> {props.children} </BlogContext.Provider>;
  /*blogData.map(blogData => {
      //return (
        //<div key={blogData.id}>{blogData.title}</div>
      )
    })*/
  // };

  // export default BlogContextProvider;
  // const BlogContextProvider = (props) => {
  //   //returns the data itself and the function
  //   const [blogPosts, setBlogPosts] = useState([
  //     {
  //       id: 1,
  //       title: 'Cras non velit nec nisi vulputate nonummy. ',
  //       category: 'leo maecenas pulvinar',
  //       description:
  //         'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat',
  //       author: 'Elysha Igoe',
  //       authorAvatar: 'https://robohash.org/aliquamdistinctiodolor.jpg?size=50x50&set=set1',
  //       createdAt: '3/15/2022',
  //     },
  //     {
  //       id: 2,
  //       title: 'Proin eu mi. ',
  //       category: 'phasellus id sapien in sapien',
  //       description:
  //         'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat Vestibulum ac est lacinia nisi venenatis tristique.',
  //       author: 'Shellie Aspy',
  //       authorAvatar: 'https://robohash.org/quofugiatodit.jpg?size=50x50&set=set1',
  //       createdAt: '2/3/2022',
  //     },
  //     {
  //       id: 3,
  //       title: 'Cras non velit nec nisi vulputate nonummy. ',
  //       category: 'leo maecenas pulvinar',
  //       description:
  //         'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat',
  //       author: 'Elysha Igoe',
  //       authorAvatar: 'https://robohash.org/aliquamdistinctiodolor.jpg?size=50x50&set=set1',
  //       createdAt: '3/15/2022',
  //     },
  //     {
  //       id: 4,
  //       title: 'Cras non velit nec nisi vulputate nonummy. ',
  //       category: 'leo maecenas pulvinar',
  //       description:
  //         'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat',
  //       author: 'Elysha Igoe',
  //       authorAvatar: 'https://robohash.org/aliquamdistinctiodolor.jpg?size=50x50&set=set1',
  //       createdAt: '3/15/2022',
  //     },
  //     {
  //       id: 5,
  //       title: 'Cras non velit nec nisi vulputate nonummy. ',
  //       category: 'leo maecenas pulvinar',
  //       description:
  //         'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat',
  //       author: 'Elysha Igoe',
  //       authorAvatar: 'https://robohash.org/aliquamdistinctiodolor.jpg?size=50x50&set=set1',
  //       createdAt: '3/15/2022',
  //     },
  //     {
  //       id: 6,
  //       title: 'Cras non velit nec nisi vulputate nonummy. ',
  //       category: 'leo maecenas pulvinar',
  //       description:
  //         'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat',
  //       author: 'Elysha Igoe',
  //       authorAvatar: 'https://robohash.org/aliquamdistinctiodolor.jpg?size=50x50&set=set1',
  //       createdAt: '3/15/2022',
  //     },
  //   ]);
  //   return <BlogContext.Provider value={{ blogPosts }}>{props.children}</BlogContext.Provider>;
};
export default BlogContextProvider;

// ;
