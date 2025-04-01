import React from 'react';
import SectionTitle from '../../../Uikit/SectionTitle/SectionTitle';
import AlbumImg from '../../../assets/img/album/1.jpg';
import './Discography.scss'

const albums = [
  { title: 'Limitless', image: AlbumImg },
  { title: 'Set me free', image: AlbumImg },
  { title: 'How It Feels', image: AlbumImg },
  { title: 'Tonight', image: AlbumImg },
];

const Discography = () => {
  return (
    <section id="discography" className="discography main">

      <SectionTitle title='Discography'  />
     

      <div className="container">
        <div className="row">
          {albums.map((album, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="block-album block-content">
                <h5 className="mb-0 opc-70 uppercase">{album.title}</h5>
                <a className="link colored-link" href="album-single.html" >
                  View Album ›
                </a>
                <a href="album-single.html">
                  <div className='album-image-wrapper'>
                    <img
                      className="animated"
                      src={album.image}
                      alt={album.title}
                    />
                  </div>
                </a>
                <ul className="block-social list-inline mb-md-3 mt-3">
                  {['apple', 'play', 'amazon', 'soundcloud'].map((icon, i) => (
                    <li key={i} className="list-inline-item mr-0">
                      <a href="#">
                        <i className={`socicon-${icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discography;
