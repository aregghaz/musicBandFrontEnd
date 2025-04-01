import React from 'react';
import BlogImage from '../../../assets/img/18.jpg';

const NewsSection = () => {
  const blogPosts = [
    {
      date: 'Nov 10, 2017',
      title: 'New Single “Por Favor” feat. Fifth Harmony Out Now!',
      image: BlogImage,
      description:
        "Melbourne is the coastal capital of the southeastern Australian state of Victoria. At the city's centre is the modern Federation Square development, with plazas, bars, and restaurants by the Yarra River.",
      link: '#',
    },
    {
      date: 'Nov 10, 2017',
      title: 'Watch The Official Video for “Options” ft. Stephen Marley',
      image: BlogImage,
      description:
        "Melbourne is the coastal capital of the southeastern Australian state of Victoria. At the city's centre is the modern Federation Square development, with plazas, bars, and restaurants by the Yarra River.",
      link: '#',
    },
  ];

  return (
    <section id="news" className="news main">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9">
            <div className="block-content gap-one-bottom-md text-center">
              <div className="block-title">
                <h1 className="uppercase">On the blog</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="news-list">
          {blogPosts.map((post, index) => (
            <li
              key={index}
              className="row align-items-center justify-content-around"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="col-12 col-md-6 order-md-2">
                    <div className="block-content">
                      <a href={post.link}>
                        <img
                          alt={post.title}
                          className="img-fluid animated"
                          src={post.image}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-5 order-md-1 text-left">
                    <div className="block-content">
                      <span className="mb-2 opc-70">{post.date}</span>
                      <h2>{post.title}</h2>
                      <p className="lead">{post.description}</p>
                      <a href={post.link} className="link colored-link mt-3">
                        Read more ›
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-12 col-md-6 order-1">
                    <div className="block-content">
                      <a href={post.link}>
                        <img
                          alt={post.title}
                          className="img-fluid animated"
                          src={post.image}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-5 order-2 text-left">
                    <div className="block-content">
                      <span className="mb-2 opc-70">{post.date}</span>
                      <h2>{post.title}</h2>
                      <p className="lead">{post.description}</p>
                      <a href={post.link} className="link colored-link mt-3">
                        Read more ›
                      </a>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        <div className="block-content text-center">
          <a className="btn btn-primary with-ico uppercase mt-5" href="#">
            View all blog posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
