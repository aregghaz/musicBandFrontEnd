const albums = [
    { title: "Limitless", image: "img/album/1.jpg" },
    { title: "Set me free", image: "img/album/2.jpg" },
    { title: "How It Feels", image: "img/album/3.jpg" },
    { title: "Tonight", image: "img/album/4.jpg" }
  ];
  
  const Discography = () => {
    return (
      <section id="discography" className="discography main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9">
              <div className="block-content text-center gap-one-bottom-md">
                <div className="block-title">
                  <h1 className="uppercase">Discography</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="container">
          <div className="row">
            {albums.map((album, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <div className="block-album block-content">
                  <h5 className="mb-0 opc-70 uppercase">{album.title}</h5>
                  <a className="link" href="album-single.html">View Album ›</a>
                  <a href="album-single.html">
                    <img className="animated" src={album.image} alt={album.title} />
                  </a>
                  <ul className="block-social list-inline mb-md-3">
                    {['apple', 'play', 'amazon', 'soundcloud'].map((icon, i) => (
                      <li key={i} className="list-inline-item mr-0">
                        <a href="#"><i className={`socicon-${icon}`}></i></a>
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
  