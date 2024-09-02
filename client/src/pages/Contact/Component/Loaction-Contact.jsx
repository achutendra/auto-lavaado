import React from 'react';

const ContactUs = () => {
  return (
    <div className='location-body '>
      <div className="container-contact py-40 lg:py-28 ">
        <div className='mx-auto'>
        <h1 style={{ fontSize: "48px" }}>LOCATIONS</h1>
        <div className="locations grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 mx-5">
          <div className="location">
            <h2>AHIMAMAU WORKSHOP</h2>
            <p><span className="emoji">📍</span><span className="text">323 Sultanpur Road, near Prithvi Townhouse and Resort, Ahmamau, Gomti Nagar, Lucknow-226002</span></p>
            <p className="phone"><span className="emoji">📞</span><span className="text">8960721000</span></p>
            <p><span className="emoji">📮</span><span className="text"><a href="mailto:information@office.com">information@office.com</a></span></p>
            <div className="location-footer">
              <hr />
              <a href="#">Find us on map</a>
            </div>
          </div>
          <div className="location">
            <h2>ASHIYANA WORKSHOP</h2>
            <p><span className="emoji">📍</span><span className="text">K-1187, Qila Road, Ashiyana Colony, opposite Ashiyana Police Station, Lucknow-226012</span></p>
            <p className="phone"><span className="emoji">📞</span><span className="text">7800022226</span></p>
            <p><span className="emoji">📮</span><span className="text"><a href="mailto:information@office.com">information@office.com</a></span></p>
            <br/>
            <div className="location-footer">
              <hr />
              <a href="#">Find us on map</a>
            </div>
          </div>
          <div className="location">
            <h2>AUTO LAVAADO THE BODYSHOP</h2>
            <p><span className="emoji">📍</span><span className="text">1186A, Sector M, Ashiyana Colony, near Smriti Plaza, Lucknow 226012</span></p>
            <p className="phone"><span className="emoji">📞</span><span className="text">7800080666</span></p>
            <p><span className="emoji">📮</span><span className="text"><a href="mailto:information@office.com">information@office.com</a></span></p>
            <br/>
            <div className="location-footer">
              <hr />
              <a href="#">Find us on map</a>
            </div>
          </div>
      </div>
        </div>
       </div>
    </div>
  );
}

export default ContactUs;
