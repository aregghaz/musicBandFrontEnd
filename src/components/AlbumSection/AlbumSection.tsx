import React from "react";

const AlbumSection = () => {
  const albumInfo = {
    label: "Limitless",
    released: "March 23/3/18",
    genre: "Pop/Rock/Techno",
    styles: "Revival/Indie Rock",
  };

  const socialLinks = [
    { icon: "socicon-apple", link: "#" },
    { icon: "socicon-play", link: "#" },
    { icon: "socicon-amazon", link: "#" },
    { icon: "socicon-soundcloud", link: "#" },
    { icon: "socicon-spotify", link: "#" },
    { icon: "socicon-youtube", link: "#" },
  ];

  const tracks = [
    { title: "Love Alive", album: "Limitless", mp3: "mp3/01.mp3" },
    { title: "Hope", album: "Limitless", mp3: "mp3/01.mp3", lyrics: "Liberian girl..." },
    { title: "Bounce Out", album: "Limitless", mp3: "mp3/01.mp3" },
    { title: "Girls Are the Same", album: "Limitless", mp3: "mp3/01.mp3" },
    { title: "My Queen", album: "Limitless", mp3: "mp3/01.mp3", lyrics: "Liberian girl..." },
    { title: "Falling Apart", album: "Limitless", mp3: "mp3/01.mp3" },
  ];

  return (
    <section id="album" className="latest main">
      <div className="container text-center">
        <h1 className="uppercase">Latest Album</h1>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 text-center">
            <ul className="block-album-info">
              {Object.entries(albumInfo).map(([key, value]) => (
                <li key={key}>
                  <h5 className="uppercase list-inline-item">{key}</h5> <span>{value}</span>
                </li>
              ))}
            </ul>
            <ul className="block-social list-inline mt-4">
              {socialLinks.map((social, index) => (
                <li key={index} className="list-inline-item mr-0">
                  <a href={social.link}><i className={social.icon}></i></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="block-tracklist">
              <audio preload="auto" className="album"></audio>
              <div className="block-content pb-0 text-center">
                <img className="mb-0" src="img/album/5.jpg" alt="Album Cover" />
              </div>
              <ol className="playlist">
                {tracks.map((track, index) => (
                  <li key={index}>
                    <div className="as-link" data-src={track.mp3}>
                      <div className="row">
                        <div className="col-md-6">
                          <h6 className="mb-0 opc-70 uppercase">{track.title}</h6>
                          <span>{track.album}</span>
                        </div>
                        <div className="col-md-6 text-md-right">
                          {track.lyrics ? (
                            <button className="btn btn-primary with-ico border-2 toggle-lyrics">
                              <i className="icon-note"></i> Lyrics
                            </button>
                          ) : null}
                          <a href="#" className="btn btn-primary with-ico">
                            <i className="icon-download"></i> Download
                          </a>
                        </div>
                        {track.lyrics && (
                          <div className="col-12 text-center mt-3">
                            <h5 className="mb-4 opc-70 uppercase">{track.title}</h5>
                            <p>{track.lyrics}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumSection;
