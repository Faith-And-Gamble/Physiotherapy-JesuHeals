/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Counselor from '../components/Includes/Counselor';

function Aboutus() {
  return (
    <div>
      <Counselor />
      <section>
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-md-4">
                <div className="thumb">
                  <img src="assets/images/team/team-details.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-8">
                <h4 className="name font-24 mt-0 mb-0">Leslie Allen</h4>
                <h5 className="mt-5">Psychaitrist</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Numquam vero expedita fugiat illo quasi doloremque,
                  in unde omnis sint assumenda! Quaerat in,
                  reprehenderit corporis voluptatum natus sequi reiciendis ullam.
                  Quam eaque dolorum voluptates cupiditate explicabo.

                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt culpa dicta quaerat qui recusandae possimus placeat quidem
                  ipsam voluptates similique libero tempore,
                  labore quasi delectus vero alias,
                  consectetur blanditiis eum maxime sunt accusantium ipsa doloribus reiciendis.
                  Ea quod reprehenderit deserunt.
                  Veritatis omnis similique tempora delectus a consequuntur,
                  quis.  Adipisicing elit.

                  Nesciunt culpa dicta quaerat
                  qui recusandae possimus placeat quidem ipsam voluptates
                  similique libero tempore,
                  labore quasi delectus vero alias.

                </p>
                <ul className="styled-icons icon-dark icon-theme-colored icon-sm mt-15 mb-0">
                  <li><a href="/"><i className="fa fa-facebook" /></a></li>
                  <li><a href="/"><i className="fa fa-skype" /></a></li>
                  <li><a href="/"><i className="fa fa-twitter" /></a></li>
                </ul>
              </div>
            </div>
            <div className="row mt-30">
              <div className="col-md-4">
                <h4 className="line-bottom">About Me:</h4>
                <div className="volunteer-address">
                  <ul>
                    <li className="bg-light media border-bottom p-15 mb-20">
                      <div className="media-left">
                        <i className="fa fa-trophy text-theme-colored font-24 mt-5" />
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0 mb-0">Achievement:</h5>
                        <p>
                          Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit.
                          Placeat voluptates porro eaque labore, delectus quos id harum est!

                        </p>
                      </div>
                    </li>
                    <li className="bg-light media border-bottom p-15 mb-20">
                      <div className="media-left">
                        <i className="fa fa-map-marker text-theme-colored font-24 mt-5" />
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0 mb-0">Address:</h5>
                        <p>Village 856 Broadway New York</p>
                      </div>
                    </li>
                    <li className="bg-light media border-bottom p-15">
                      <div className="media-left">
                        <i className="fa fa-phone text-theme-colored font-24 mt-5" />
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0 mb-0">Contact:</h5>
                        <p>
                          <span>Phone:</span>
                          {' '}
                          +262 695 2601
                          <br />
                          <span>Email:</span>
                          {' '}
                          you@yourdomain.com
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <h4 className="line-bottom">Find Location:</h4>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5456.163483134849!2d144.95177475051227!3d-37.81589041361766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121+King+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sbd!4v1556130803137!5m2!1sen!2sbd" width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen />
              </div>
              <div className="col-md-4">
                <div className="clearfix">
                  <h4 className="line-bottom">Quick Contact:</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur, nobis doloribus ab repellendus, voluptatum quae quo soluta est.

                </p>
                <form id="contact-form" className="contact-form-transparent">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Name" id="contact_name" name="contact_name" required="" className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Email" id="contact_email" name="contact_email" className="form-control" required="" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Subject" id="contact_subject" name="contact_subject" className="form-control" required="" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea rows="5" placeholder="Enter Message" id="contact_message" name="contact_message" required className="form-control" />
                  </div>
                  <div className="form-group">
                    <button data-loading-text="Please wait..." className="btn btn-flat btn-dark btn-theme-colored mt-5" type="submit">Send your message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  );
}

export default Aboutus;
