import React from 'react';

const Sponsors = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Sponsors</h1>

      {/* Platinum Sponsors */}
      <div className="mb-5">
        <h2 className="text-center text-primary">Platinum Sponsors</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <img
              src="/assets/logos/platinum1.png"
              alt="Platinum Sponsor 1"
              className="img-fluid mb-3"
              style={{ maxWidth: '200px' }}
            />
            <p>Platinum Sponsor 1</p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="/assets/logos/platinum2.png"
              alt="Platinum Sponsor 2"
              className="img-fluid mb-3"
              style={{ maxWidth: '200px' }}
            />
            <p>Platinum Sponsor 2</p>
          </div>
        </div>
      </div>

      {/* Gold Sponsors */}
      <div className="mb-5">
        <h2 className="text-center text-warning">Gold Sponsors</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <img
              src="/assets/logos/gold1.png"
              alt="Gold Sponsor 1"
              className="img-fluid mb-3"
              style={{ maxWidth: '150px' }}
            />
            <p>Gold Sponsor 1</p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="/assets/logos/gold2.png"
              alt="Gold Sponsor 2"
              className="img-fluid mb-3"
              style={{ maxWidth: '150px' }}
            />
            <p>Gold Sponsor 2</p>
          </div>
        </div>
      </div>

      {/* Silver Sponsors */}
      <div className="mb-5">
        <h2 className="text-center text-secondary">Silver Sponsors</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <img
              src="/assets/logos/silver1.png"
              alt="Silver Sponsor 1"
              className="img-fluid mb-3"
              style={{ maxWidth: '100px' }}
            />
            <p>Silver Sponsor 1</p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="/assets/logos/silver2.png"
              alt="Silver Sponsor 2"
              className="img-fluid mb-3"
              style={{ maxWidth: '100px' }}
            />
            <p>Silver Sponsor 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;