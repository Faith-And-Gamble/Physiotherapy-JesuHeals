import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function AppCarousel() {
  return (
    <div>
      <Carousel>
        <div>
          <img src="assets/images/bg/bg5.jpg" alt="ff" />
          <p className="legend">Best in care !</p>
        </div>
        <div>
          <img src="assets/images/bg/bg2.jpg" alt="ff" />
          <p className="legend">Patients are priority !</p>
        </div>
        <div>
          <img src="assets/images/bg/bg3.jpg" alt="ff" />
          <p className="legend">We are here to help !</p>
        </div>
      </Carousel>
    </div>
  );
}

export default AppCarousel;
