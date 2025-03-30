import React from 'react';

const GallerySection = () => {
  return (
    <section id="gallery" className="gallery main">
      {/* Container */}
      <div className="container">
        {/* Row */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9">
            <div className="block-content gap-one-bottom-md text-center">
              <h1 className="uppercase indent">Upcoming tours</h1>
              <i className="icon-camera-7 big-icon adjust-space"></i>
            </div>
          </div>
        </div>
        {/* End Row */}
      </div>
      {/* End Container */}

      {/* Container for Images */}
      <div className="container">
        {/* Row */}
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="card-gallery image-gallery">
              <a href="img/10.jpg" className="popup-image mb-0">
                <img className="animated" alt="Gallery Image 1" src="img/10.jpg" />
              </a>
              <a href="img/11.jpg" className="popup-image mb-0">
                <img className="animated" alt="Gallery Image 2" src="img/11.jpg" />
              </a>
              <a href="img/12.jpg" className="popup-image mb-0">
                <img className="animated" alt="Gallery Image 3" src="img/12.jpg" />
              </a>
              <a href="img/13.jpg" className="popup-image mb-0">
                <img className="animated" alt="Gallery Image 4" src="img/13.jpg" />
              </a>
              <a href="img/20.jpg" className="popup-image mb-0">
                <img className="animated" alt="Gallery Image 5" src="img/20.jpg" />
              </a>
              <a href="img/14.jpg" className="popup-image mb-0">
                <img className="animated" alt="Gallery Image 6" src="img/14.jpg" />
              </a>
              <a href="img/15.jpg" className="popup-image mb-0">
                <img className="animated" alt="Gallery Image 7" src="img/15.jpg" />
              </a>
              <a href="img/16.jpg" className="popup-image mb-0">
                <img className="animated" alt="Gallery Image 8" src="img/16.jpg" />
              </a>
              <a href="img/17.jpg" className="popup-image mb-0">
                <img className="animated" alt="Gallery Image 9" src="img/17.jpg" />
              </a>
            </div>
            <a className="btn btn-primary uppercase with-ico mt-5" href="#">
              <i className="icon-instagram"></i> Follow us @mousiqua
            </a>
          </div>
        </div>
        {/* End Row */}
      </div>
      {/* End Container */}
    </section>
  );
};

export default GallerySection;
