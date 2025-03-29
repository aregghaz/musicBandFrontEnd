import React from 'react';

const BandMembers = () => {
  const members = [
    { name: "Joe Walker", role: "Lead vocals, guitars", image: "img/5.jpg" },
    { name: "Andrew Smith", role: "Lead guitar, bass guitar", image: "img/6.jpg" },
    { name: "Jeremy Anderton", role: "Drums, keyboards", image: "img/7.jpg" }
  ];

  return (
    <section id="band" className="band main py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="text-uppercase font-weight-bold">Band Members</h1>
        </div>
        <div className="row justify-content-center">
          {members.map((member, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">
              <div className="card bg-dark text-white">
                <img src={member.image} alt={member.name} className="card-img-top rounded-lg" />
                <div className="card-body text-center">
                  <h6 className="card-title font-weight-bold text-uppercase">{member.name}</h6>
                  <p className="card-text">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BandMembers;
