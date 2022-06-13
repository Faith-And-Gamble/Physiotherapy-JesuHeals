import React from 'react';
import { Link } from 'react-router-dom';
import backgrounddivider from '../image/bg5.jpg';

function Physio() {
  return (
    <div>
      <section className="inner-header divider parallax layer-overlay overlay-dark-5" style={{ backgroundImage: `url(${backgrounddivider})` }}>
        <div className="container pt-70 pb-50">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <h4 className="title text-white">Physiotherapist Details</h4>
                <ul className="breadcrumb white">
                  <li><Link to="/" className="text-white">Home</Link></li>
                  <li className="active">Seevice Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Physio;
