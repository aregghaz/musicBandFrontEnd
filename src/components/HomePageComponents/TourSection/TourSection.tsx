import React, { useState } from 'react';
import SectionTitle from '../../../Uikit/SectionTitle/SectionTitle';
import './TourSection.scss';
import Button from '../../../Uikit/Button/Button';
import backImage from '../../../assets/img/album/1.jpg'


const tourData = [
  {
    id: 'american',
    title: 'American Tour',
    videoThumbnail: backImage,
    videoLink: 'https://www.youtube.com/watch?v=Gc2en3nHxA4',
    bookingText: 'The American Tour 2018 -',
    events: [
      { date: '14 Mar', location: 'Melbourne, AU', venue: 'Rod Laver Arena', vip: true },
      { date: '10 Apr', location: 'Washington, DC, USA', venue: 'Capital One Arena', vip: false },
    ],
  },
  {
    id: 'european',
    title: 'European Tour',
    videoThumbnail: backImage,
    videoLink: 'https://www.youtube.com/watch?v=Gc2en3nHxA4',
    bookingText: 'The European Tour 2018 -',
    events: [
      { date: '24 Jul', location: 'Stockholm, Sweden', venue: 'Annexet', vip: false },
    ],
  },
];

const TourSection = () => {
  const [activeTab, setActiveTab] = useState(tourData[0].id);

  const handleTabClick = (tabId) => setActiveTab(tabId);

  const activeTour = tourData.find((tour) => tour.id === activeTab);

  return (
    <section id="tours" className="tour main">
      <SectionTitle title="Upcoming tours" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-md-10">
            <ul className="block-tabs list-inline gap-one-bottom-sm text-center">
              {tourData.map(({ id, title }) => (
                <li
                  key={id}
                  className={`list-inline-item ${activeTab === id ? 'active' : ''}`}
                  onClick={() => handleTabClick(id)}
                >
                  <h5 className="uppercase mb-0">{title}</h5>
                </li>
              ))}
            </ul>

            {activeTour && (
              <ul className="block-tab">
                <li className={`active`}>
                  <div className="block-content text-center">
                    <div className="block-video">
                      <img src={activeTour.videoThumbnail} className="background-img mb-0" alt="" />
                      <a className="video-play-but popup-youtube" href={activeTour.videoLink}></a>
                    </div>
                    <p className="mt-3">
                      <span className="opc-70">{activeTour.bookingText}</span>{' '}
                      <a className="link colored-link" href="#">Booking Enquiries</a>
                    </p>
                  </div>

                  <div className="block-content gap-one-top-sm text-left">
                    {activeTour.events.map(({ date, location, venue, vip }, idx) => (
                      <div key={idx} className="block-content">
                        <div className="row">
                          <div className="col-lg-3 col-md-3">
                            <h4 className="switch-fot">{date}</h4>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <h6 className="mb-0 opc-70 uppercase">{location}</h6>
                            <span>{venue}</span>
                          </div>
                          <div className="col-12 col-lg-5 col-md-5 text-md-right">
                            {vip && (
                             <Button bordered>
                                <i className="icon-ticket"></i>VIP
                              </Button>
                            )}
                            <Button className='tour-button-spaced'>
                              <i className="icon-ticket"></i>Buy Ticket
                              </Button>
                          </div>
                        </div>
                        {idx !== activeTour.events.length - 1 && <hr />}
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            )}
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
                    Subscribe for free downloads and <br /> band news updates
                  </p>
                  <form method="get">
                    <div className="form-row justify-content-center">
                      <div className="col-12 col-md-9 col-lg-8 w-100">
                        <div className="form-group">
                          <input className="tour-section-input" name="email" placeholder="Email Address..." type="email" />
                          <span className="text-small mt-2">* We don’t share your information with anyone.</span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary uppercase border-3">Subscribe now</button>
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