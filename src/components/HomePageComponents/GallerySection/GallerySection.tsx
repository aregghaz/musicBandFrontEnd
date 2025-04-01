import React, { useState } from 'react';
import GalleryImage from '../../../assets/img/10.jpg';
import SectionTitle from '../../../Uikit/SectionTitle/SectionTitle';
import ImageModal from '../../../Uikit/ImageModal/ImageModal';
import './GallerySection.scss'

const GallerySection = () => {
  const images = [
    GalleryImage,
    GalleryImage,
    GalleryImage,
    GalleryImage,
    GalleryImage,
    GalleryImage,
    GalleryImage,
    GalleryImage,
    GalleryImage,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src:any) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };


  console.log(selectedImage,'qweqw');
  

  return (
    <section id="gallery" className="gallery main">
      {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9">
            <div className="block-content gap-one-bottom-md text-center">
              <h1 className="uppercase indent">Upcoming tours</h1>
              <i className="socicon-camera-7 big-icon adjust-space"></i>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-12 col-md-10 col-lg-9">
            <div className="block-content  gap-one-bottom-md text-center">
              <i className="icon-camera-7 big-icon adjust-space "></i>
            </div>
          </div>
        </div>
      </div>

      {/* <SectionTitle title='Upcoming tours' /> */}

      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="card-gallery image-gallery">
              {images.map((src, index) => (
                // <a href={src} className="popup-image mb-0" key={index}>
                // <img
                //   className="animated"
                //   alt={`Gallery Image ${index + 1}`}
                //   src={src}

                // />

                // </a>

                <div
                  key={index}
                  className="image-container"
                  onClick={() => openModal(src)}
                >
                  <img
                    className="animated"
                    alt={`Gallery Image ${index + 1}`}
                    src={src}
                    
                  />
                </div>
              ))}
            </div>
            <a className="btn btn-primary uppercase with-ico mt-5" href="#">
              <i className="icon-instagram"></i> Follow us @mousiqua
            </a>
          </div>
        </div>
      </div>

      <ImageModal closeModal={closeModal} selectedImage={selectedImage} />
    </section>
  );
};

export default GallerySection;
