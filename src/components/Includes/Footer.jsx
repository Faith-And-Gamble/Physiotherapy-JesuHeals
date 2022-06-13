/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Applogo from '../image/cut.ico';

function Footer() {
  return (
    <>
      <footer id="footer" className="footer pb-0 bg-black-111">
        <div className="container pt-70 pb-40">
          <div className="row multi-row-clearfix">
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                {' '}
                <img
                  src={Applogo}
                  alt=""
                />
                <p className="font-12 mt-20 mb-10">
                  Get trained and certified in the most burgeoning technologies
                  of the industry. Find the foremost trained team of Experienced
                  and Certified professionals. Exposure to live and practical
                  based training for enhanced experience with On-Premises Global
                  Certification exam facility.
                </p>
                <ul className="styled-icons icon-dark mt-20">
                  <li>
                    <a href="https://www.facebook.com/jobplacementcoursegrras/" data-bg-color="#3B5998">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="/" data-bg-color="#02B0E8">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/" data-bg-color="#05A7E3">
                      <i className="fa fa-skype" />
                    </a>
                  </li>
                  <li>
                    <a href="/" data-bg-color="#A11312">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="/" data-bg-color="#C22E2A">
                      <i className="fa fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <h5 className="widget-title line-bottom">Pages</h5>
                <ul className="list list-border">
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Services</a>
                  </li>
                  <li>
                    <a href="/">Experts</a>
                  </li>
                  <li>
                    <a href="/">Gallery</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <h5 className="widget-title line-bottom">Quick Links</h5>
                <ul className="list-border list theme-colored angle-double-right">
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Donor Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Disclaimer</a>
                  </li>
                  <li>
                    <a href="/">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/">Copyright Notice</a>
                  </li>
                  <li>
                    <a href="/">Media Center</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <h5 className="widget-title line-bottom">Quick Contact</h5>
                <ul className="list list-border">
                  <li>
                    <a href="/">+91-9983340133</a>
                  </li>
                  <li>
                    <a href="/">info@ygrass.com</a>
                  </li>
                  <li>
                    <a href="/" className="lineheight-20">
                      219, Himmat Nagar, Behind Kiran Sweets, Gopalpura Turn,
                      Tonk Road, Jaipur, Rajasthan - 302018
                    </a>
                  </li>
                </ul>
                <p className="text-white mb-5 mt-20">
                  Subscribe to our newsletter
                </p>
                <form
                  id="footer-mailchimp-subscription-form"
                  className="newsletter-form mt-15"
                >
                  <label className="display-block" htmlFor="mce-EMAIL" />
                  <div className="input-group">
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      placeholder="Your Email"
                      className="form-control"
                      data-height="37px"
                      id="mce-EMAIL"
                    />
                    <span className="input-group-btn">
                      <button
                        type="submit"
                        className="btn btn-colored btn-theme-colored font-14 m-0"
                      >
                        <i className="fa fa-paper-plane-o text-white" />
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-nav bg-black-222 p-20">
          <div className="row text-center">
            <div className="col-md-12">
              <p className="text-white font-11 m-0">
                Copyright &copy;2016 ThemeMascot. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
      <a className="scrollToTop" href="/">
        <i className="fa fa-angle-up" />
      </a>
    </>
  );
}

export default Footer;
