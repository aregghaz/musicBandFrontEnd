import React from 'react';
import SectionTitle from '../../Uikit/SectionTitle/SectionTitle';
import MemberImage from '../../assets/img/6.jpg';

const BandMembers = () => {
  const members = [
    { name: 'Joe Walker', role: 'Lead vocals, guitars', image: MemberImage },
    {
      name: 'Andrew Smith',
      role: 'Lead guitar, bass guitar',
      image: MemberImage,
    },
    { name: 'Jeremy Anderton', role: 'Drums, keyboards', image: MemberImage },
  ];

  return (
    <section id="band" className="band main py-5">
      <SectionTitle title="Band Members" className="mt-5" />
      <div className="container">
        <div className="row justify-content-center">
          {members.map((member, index) => (

            <div className='col-md-4 col-lg-4'>
 <div className="block-member" key={index}>
              <img src={member.image} alt="" />
              <div className="member-info">
                <h6 className="uppercase mb-0 ">{member.name}</h6>
                <span className=" mt-0"> {member.role}</span>
              </div>
            </div>
            </div>
            // <div key={index} className="col-12 col-md-4 mb-4">
            //   <div className="card bg-dark text-white">
            //     <img
            //       src={member.image}
            //       alt={member.name}
            //       className="card-img-top rounded-lg"
            //     />
            //     <div className="card-body text-center">
            //       <h6 className="card-title font-weight-bold text-uppercase">
            //         {member.name}
            //       </h6>
            //       <p className="card-text">{member.role}</p>
            //     </div>
            //   </div>
            // </div>

           
          ))}
        </div>
      </div>
    </section>
  );
};

export default BandMembers;
