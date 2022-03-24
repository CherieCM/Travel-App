import React from 'react';
import './youtube.css';
import YoutubeEmbed from './youtubeEmbed';

export default function Youtube() {
  return (
    <section className="youtube-container">
      <div className="overlay">
        <h1 className="overlay-title3">Travel Tips &amp; Tricks</h1>
        <YoutubeEmbed embedId="" />
      </div>
    </section>
  );
}
