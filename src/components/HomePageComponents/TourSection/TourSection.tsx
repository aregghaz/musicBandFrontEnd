import React, { useState } from 'react';
import SectionTitle from '../../../Uikit/SectionTitle/SectionTitle';

const TourSection = () => {
  const [activeTab, setActiveTab] = useState('american');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="tour" className="tour main">
      <SectionTitle title="Upcoming tours" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-md-10">
            <ul className="block-tabs list-inline gap-one-bottom-sm text-center">
              <li
                className={`list-inline-item ${
                  activeTab === 'american' ? 'active' : ''
                }`}
                onClick={() => handleTabClick('american')}
              >
                <h5 className="uppercase mb-0">American Tour</h5>
              </li>
              <li
                className={`list-inline-item ${
                  activeTab === 'european' ? 'active' : ''
                }`}
                onClick={() => handleTabClick('european')}
              >
                <h5 className="uppercase mb-0">European Tour</h5>
              </li>
            </ul>

            <ul className="block-tab">
              {activeTab === 'american' && (
                <li>
                  <div className="block-content text-center">
                    <div className="block-video">
                      <img
                        src="img/8.jpg"
                        className="background-img mb-0"
                        alt=""
                      />
                      <a
                        className="video-play-but popup-youtube"
                        href="https://www.youtube.com/watch?v=Gc2en3nHxA4"
                      ></a>
                    </div>
                    <p className="mt-3">
                      <span className="opc-70">The American Tour 2018 -</span>{' '}
                      <a className="link" href="#">
                        Booking Enquiries
                      </a>
                    </p>
                  </div>

                  <div className="block-content gap-one-top-sm text-left">
                    <div className="block-content">
                      <div className="row">
                        <div className="col-lg-3 col-md-3">
                          <h4 className="switch-fot">14 Mar</h4>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <h6 className="mb-0 opc-70 uppercase">
                            Melbourne, AU
                          </h6>
                          <span>Rod Laver Arena</span>
                        </div>
                        <div className="col-12 col-lg-5 col-md-5 text-md-right">
                          <a
                            className="btn-s uppercase btn btn-primary with-ico border-2"
                            href="#"
                          >
                            <i className="icon-ticket"></i>VIP
                          </a>
                          <a
                            className="btn-s uppercase btn btn-primary with-ico"
                            href="#"
                          >
                            <i className="icon-ticket"></i>Buy Ticket
                          </a>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="block-content">
                      <div className="row">
                        <div className="col-lg-3 col-md-3">
                          <h4 className="switch-fot">10 Apr</h4>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <h6 className="mb-0 opc-70 uppercase">
                            Washington, DC, USA
                          </h6>
                          <span>Capital One Arena</span>
                        </div>
                        <div className="col-12 col-lg-5 col-md-5 text-md-right">
                          <a
                            className="btn-s uppercase btn btn-primary with-ico"
                            href="#"
                          >
                            <i className="icon-ticket"></i>Buy Ticket
                          </a>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </li>
              )}

              {activeTab === 'european' && (
                <li>
                  <div className="block-content text-center">
                    <div className="block-video">
                      <img
                        src="img/9.jpg"
                        className="background-img mb-0"
                        alt=""
                      />
                      <a
                        className="video-play-but popup-youtube"
                        href="https://www.youtube.com/watch?v=Gc2en3nHxA4"
                      ></a>
                    </div>
                    <p className="mt-3">
                      <span className="opc-70">The European Tour 2018 -</span>{' '}
                      <a className="link" href="#">
                        Booking Enquiries
                      </a>
                    </p>
                  </div>

                  <div className="block-content gap-one-top-sm text-left">
                    <div className="block-content">
                      <div className="row">
                        <div className="col-lg-3 col-md-3">
                          <h4 className="switch-fot">24 Jul</h4>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <h6 className="mb-0 opc-70 uppercase">
                            Stockholm, Sweden
                          </h6>
                          <span>Annexet</span>
                        </div>
                        <div className="col-12 col-lg-5 col-md-5 text-md-right">
                          <a
                            className="btn-s uppercase btn btn-primary with-ico"
                            href="#"
                          >
                            <i className="icon-ticket"></i>Buy Ticket
                          </a>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row display-flex justify-content-center">
          <div className="col-12 col-lg-8 col-md-10">
            <div className="block-content gap-one-top-sm">
              <div className="card border-dashed">
                <div className="card-body p-5 block-subscribe">
                  <p className="uppercase text-center mb-4">
                    Subscribe for free downloads and <br />
                    band news updates
                  </p>
                  <form method="get">
                    <div className="form-row justify-content-center">
                      <div className="col-12 col-md-9 col-lg-8">
                        <div className="form-group">
                          <input
                            className="form-control form-control-lg"
                            name="email"
                            placeholder="Email Address..."
                            type="email"
                          />
                          <span className="text-small mt-2">
                            * We don’t share your information with anyone.
                          </span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <button
                          type="submit"
                          className="btn btn-primary uppercase border-3"
                        >
                          Subscribe now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
