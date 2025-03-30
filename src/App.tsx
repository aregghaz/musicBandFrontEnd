
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.scss';
import HeroSection from './components/HeroSection/HeroSection';
import AlbumSection from './components/AlbumSection/AlbumSection';
import AboutSection from './components/AboutSection/AboutSection';
import Discography from './components/Discography/Discography';
import DividerSection from './components/DividerSection/DividerSection';
import BandMembers from './components/BandMembers/BandMembers';
import TourSection from './components/TourSection/TourSection';
import PreSaleSection from './components/PreSaleSection/PreSaleSection';
import GallerySection from './components/GallerySection/GallerySection';
import NewsSection from './components/NewsSection/NewsSection';
import TwitterSection from './components/TwitterSection/TwitterSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="wrapper">
      <div className="block-search-form">
        <div className="block-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <form method="get">
                  <div className="card bg-danger">
                    <div className="card-body d-flex align-items-center p-4">
                      <div className="flex-shrink-0">
                        <i className="icon-search text-white text-xl"></i>
                      </div>
                      <div className="flex-grow-1">
                        <input
                          className="form-control form-control-lg border-0 w-100 p-2 rounded-lg"
                          placeholder="Type a keyword..."
                          type="search"
                        />
                      </div>
                      <div className="flex-shrink-0">
                        <button
                          type="submit"
                          className="btn btn-primary text-uppercase border-3 px-4 py-2 bg-blue-600 text-white rounded-lg"
                        >
                          Search now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <HeroSection />

      <AlbumSection />

      <AboutSection />

      <Discography />

      <DividerSection />

      <BandMembers />

      <TourSection />

      <PreSaleSection />

      <GallerySection />

      <NewsSection />

      <TwitterSection />

      <ContactSection />

      <Footer />

      <a className="block-top scroll" href="#wrapper">
        <i className="icon-angle-up"></i>
      </a>
    </div>
  );
};

export default App;
