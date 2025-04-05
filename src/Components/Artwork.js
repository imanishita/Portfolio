import React from 'react';
import './CreativeGallery.css';

const artworkItems = [
  { title: 'Broken Wings', image: '/images/a1.jpg', medium: 'Oil' },
  { title: 'Nari', image: '/images/a11.jpg', medium: 'Acrylic' },
  { title: 'Women', image: '/images/a3.jpg', medium: 'Acrylic' },
  { title: 'Rabindranath Tagore', image: '/images/a4.jpg', medium: 'Acrylic' },
  { title: 'Women Flower', image: '/images/a5.jpg', medium: 'Pen' },
  { title: 'Tree', image: '/images/a6.jpg', medium: 'Watercolour' },
  { title: 'Birds of Feather', image: '/images/a8.jpg', medium: 'Watercolour' },
  { title: 'Birds', image: '/images/a9.jpg', medium: 'Watercolour' },
  { title: 'Frog', image: '/images/a10.jpg', medium: 'Watercolour' },
  { title: 'Whisper of Heart', image: '/images/a2.jpg', medium: 'Acrylic' },
  { title: 'Body', image: '/images/a12.jpg', medium: 'Pencil' },
  { title: 'Pain', image: '/images/a13.jpg', medium: 'Charcoal' },
  { title: 'G.O.A.T', image: '/images/a14.jpg', medium: 'Acrylic' },
  { title: 'Wings', image: '/images/a15.jpg', medium: 'Charcoal' },
  { title: 'Tears', image: '/images/a16.jpg', medium: 'Charcoal' },
  { title: 'Blindfold', image: '/images/a17.jpg', medium: 'Charcoal' },
  { title: 'Smokey', image: '/images/a18.jpg', medium: 'Charcoal' },
  { title: 'Bookmarks', image: '/images/a19.jpg', medium: 'Acrylic' },
  { title: 'Heart <3', image: '/images/a20.jpg', medium: 'Pen' },
];

const Artwork = () => {
  return (
    <div className="gallery-page">
      <h2>My Artwork</h2>
      <p className="gallery-description">
        I’ve been painting since I was a four-year-old kid. Like most, I started with crayons and gradually transitioned to watercolours, then acrylics, followed by charcoal, and most recently, oil paints.
        Painting has always been more than a hobby — it's been my escape, my therapy, and my favorite way to express what words can’t.
      </p>
      <div className="gallery-grid">
        {artworkItems.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <span className="medium-badge">Medium: {item.medium}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artwork;
