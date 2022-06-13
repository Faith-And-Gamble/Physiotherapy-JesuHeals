import React from 'react';
import backgrounddivider from '../image/bg5.jpg';

function Divider() {
  return (
    <section className="divider parallax layer-overlay ooverlay-dark-6" style={{ backgroundImage: `url(${backgrounddivider})` }} data-parallax-ratio="0.7">
      <div className="container pt-90 pb-90">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-12 text-center">
              <h2 className="text-white font-28">
                For Emergency
                <span className="text-theme-colored font-weight-600"> Consulting</span>
                {' '}
                Please
                {' '}
                <span className="text-theme-colored font-weight-600"> Contact</span>
              </h2>
              <h3 className="font-30 text-white">(+0088 011-224-363)</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Divider;
