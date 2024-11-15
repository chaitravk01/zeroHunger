import React from 'react';
import img1 from "../images/aboutus.png";

const aboutUs = () => {
  return (
    <div>
      <main className='main'>
        {/* <!--=============== About US ===============--> */}
        <section className="about section Home-container" id="about">
          <div className="about__container grid">
            <div className="about__content">
              <h2 className="section__title-center">
                Find Out A Little More <br /> About Us
              </h2>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
                onClick={() => alert('Image clicked')}
              >
                <img className="Home-bg" src={img1} alt="bg" />
              </button>
            </div>
            <p className="about__description">
              Zero Hunger web application has four core functions, they are
              Donation, managing food wastage, exchanging items for food, and
              Educating people about zero hunger. For the donation,
              organizations or donors should create an account as donors, then
              they can donate money or food for needy people from our web
              application. To manage food wastage, restaurants or food shops
              should engage with our system by creating a user account and can
              publish their extra food items for fair prices. At the end of the
              day, they can share their food for free if they have extras.
              Sellers deal with items like source items to make products or
              anything that assists with the seller's needs.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default aboutUs;
