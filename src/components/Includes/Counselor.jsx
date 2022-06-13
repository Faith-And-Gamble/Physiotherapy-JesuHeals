import React from 'react';
import backgrounddivider from '../image/bg5.jpg';

function Counselor() {
  return (
    <div>
      <section className="inner-header divider parallax layer-overlay overlay-dark-5" style={{ backgroundImage: `url(${backgrounddivider})` }}>
        <div className="container pt-70 pb-50">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <h4 className="title text-white">Counselor Details</h4>
                <ul className="breadcrumb white">
                  <li><a className="text-white" href="index-mp-layout1.html">Home</a></li>
                  <li className="active">Counselor Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Counselor;
