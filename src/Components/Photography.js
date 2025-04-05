import React from 'react';
import './CreativeGallery.css';

const photoItems = [
  { title: 'Serenity On River', image: '/images/p1.jpg' },
  { title: 'Light in the Dark ', image: '/images/p2.jpg' },
  { title: 'Camera....Films', image: '/images/p3.jpg' },
  { title: 'Sky', image: '/images/p4.jpg' },
  { title: 'Goldenhour', image: '/images/p5.jpg' },
  { title: 'My Sky', image: '/images/p6.jpg' },
  { title: 'Red Sky ', image: '/images/p7.jpg' },
  { title: 'Lights All Around ', image: '/images/p8.jpg' },
  { title: 'Drifting Conversation', image: '/images/p10.jpg' },
  { title: 'Pen', image: '/images/p11.jpg' },
  { title: 'Flower', image: '/images/p12.jpg' },
  { title: 'Mountain....River', image: '/images/p16.jpg' },
  { title: 'Lion', image: '/images/p17.jpg' },
  { title: 'Cloud', image: '/images/p18.jpg' },
  { title: 'More Cloud', image: '/images/p19.jpg' },
  { title: 'My Light', image: '/images/p9.jpg' },
  { title: 'Maa', image: '/images/p14.jpg' },
  { title: 'Peek-a-Boo!', image: '/images/p15.jpg' },
  { title: 'Potrait', image: '/images/p20.jpg' },
  { title: 'Blurry Vision', image: '/images/p21.jpg' },
  
]
const Photography = () => {
  return (
    <div className="gallery-page">
        <h2>My Photographies</h2>
        <p className="gallery-description">
        I love clicking pictures — especially the ones that tell a story. There’s something magical about capturing a fleeting moment and making it timeless. I use a Canon 1300D as my camera. Whether it's nature, street life, or candid emotions, photography helps me see the world with a more thoughtful, appreciative eye.
        </p>
      <div className="gallery-grid">
        {photoItems.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;
