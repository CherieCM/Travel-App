import React from 'react';
import './posts.css';

const Posts = () => {
  return (
    <section className="agency login">
      <div className="overlay">
        <h2 className="title2"> Suggestion Box </h2>
        <h2 className="title2"> A penny for your thoughts!</h2> <br />
        <div>
          <form className="form" action="https://www.freecatphotoapp.com/submit-cat-photo">
            <input type="text" required placeholder="Your Answer Here" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Posts;

// function Posts() {
//   const [postId, setPostId] = useState(null);

//   useEffect(() => {
//     // POST request using fetch inside useEffect React hook
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title: 'React Hooks POST Request' }),
//     };
//     fetch('https://reqres.in/api/posts', requestOptions)
//       .then((response) => response.json())
//       .then((data) => setPostId(data.id));

//     // empty dependency array means this effect will only run once
//   }, []);
//   return (
//     <section className="agency">
//       <div className="overlay">
//         <h1 className="title"> Chat with Other Travelers </h1>
//         <div>Post Id: {postId} </div>
//       </div>
//     </section>
//   );
// }
