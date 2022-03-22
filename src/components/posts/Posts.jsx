import React, { useState, useEffect } from 'react';
import './posts.css';

function Posts() {
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React Hooks POST Request' }),
    };
    fetch('https://reqres.in/api/posts', requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id));

    // empty dependency array means this effect will only run once
  }, []);
  return (
    <section className="agency">
      <div className="overlay">
        <h1 className="title"> Chat with Other Travelers </h1>
        <div>Post Id: {postId} </div>
      </div>
    </section>
  );
}

export default Posts;
