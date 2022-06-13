/* eslint-disable react/button-has-type */
import React from 'react';
import AppCarousel from '../components/Includes/AppCarousel';
import Divider from '../components/Includes/Divider';
import Service from '../components/Includes/Service';
import Query from './Query';

function Home() {
  return (
    <div className="main-content">
      <AppCarousel />
      <section className="bg-theme-colored">
        <div className="container pt-0 pb-0">
          <div className="row">
            <div className="call-to-action sm-text-center p-0 pt-30 pb-20">
              <div className="col-md-9">
                <h3 className="mt-5 text-white">Best Psychology &  World Physiotherapy Association (WPA) Ever!</h3>
              </div>
              <div className="col-md-3 text-right flip sm-text-center">
                <a href="/" className="btn btn-default btn-circled btn-lg mt-5">
                  Book Now
                  <i className="fa fa-angle-double-right font-16 ml-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-md-6">
                <h2 className="text-uppercase font-weight-600 mt-0 font-28 line-bottom">World Best Counselling</h2>
                <h4 className="text-theme-colored">Lorem ipsum dolor sit amet soluta saepe odit error, maxime praesentium sunt udiandae! soluta saepe odit errored Counselling sunt udiandae!</h4>
                <p>
                  {' '}
                  <i className="fa fa-hand-o-right text-theme-colored font-15" />
                  {' '}
                  Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit maxime praesentium sunt
                  udiandae soluta saepe dolor sit amet
                </p>
                <p>
                  {' '}
                  <i className="fa fa-hand-o-right text-theme-colored font-15" />
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit maxime praesentium.
                </p>
                <p>
                  {' '}
                  <i className="fa fa-hand-o-right text-theme-colored font-15" />
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit maxime
                </p>
                <a className="btn btn-theme-colored btn-flat btn-lg mt-10 mb-sm-30" href="/">Know More →</a>
              </div>
              <div className="col-md-6">
                <div className="row mb-10">
                  <div className="col-sm-6 col-md-6 pr-5 pr-sm-15 mb-sm-10">
                    <img className="img-fullwidth" src="assets/images/about/ab1.jpg" alt="" />
                  </div>
                  <div className="col-sm-6 col-md-6 pl-5 pl-sm-15">
                    <img className="img-fullwidth" src="assets/images/about/ab2.jpg" alt="" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-6 pr-5 pr-sm-15 mb-sm-10">
                    <img className="img-fullwidth" src="assets/images/about/ab3.jpg" alt="" />
                  </div>
                  <div className="col-sm-6 col-md-6 pl-5 pl-sm-15">
                    <img className="img-fullwidth" src="assets/images/about/ab4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Service />
      <Divider />
      <Query />
    </div>
  );
}

export default Home;
