/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Contact from '../components/Includes/Contact';

function Contactus() {
  return (
    <div>
      <Contact />
      <section className="divider">
        <div className="container">
          <div className="row pt-30">
            <div className="col-md-5">
              <h3 className="line-bottom mt-0 mb-30">Interested in discussing?</h3>
              <form id="contact_form" name="contact_form" className="" action="" method="post">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Name
                        {' '}
                        <small>*</small>
                      </label>
                      <input name="form_name" className="form-control" type="text" placeholder="Enter Name" required="" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Email
                        {' '}
                        <small>*</small>
                      </label>
                      <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Subject
                        {' '}
                        <small>*</small>
                      </label>
                      <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone</label>
                      <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea name="form_message" className="form-control required" rows="5" placeholder="Enter Message" />
                </div>
                <div className="form-group">
                  <input name="form_botcheck" className="form-control" type="hidden" value="" />
                  <button type="submit" className="btn btn-dark btn-theme-colored btn-flat mr-5" data-loading-text="Please wait...">Send your message</button>
                </div>
              </form>

            </div>
            <div className="col-md-7">
              <div className="row">
                <h3 className="line-bottom mt-0 mb-50 ml-15">Our Location</h3>
                <div className="col-md-12">
                  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="icon-box media bg-deep p-30 mb-20">
                    {' '}
                    <a className="media-left pull-left flip" href="/">
                      {' '}
                      <i className="pe-7s-map-2 text-theme-colored" />
                    </a>
                    <div className="media-body">
                      <h5 className="mt-0">Our Office Location</h5>
                      <p>#405, Lan Streen, USA</p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="icon-box media bg-deep p-30 mb-20">
                    {' '}
                    <a className="media-left pull-left flip" href="/">
                      {' '}
                      <i className="pe-7s-call text-theme-colored" />
                    </a>
                    <div className="media-body">
                      <h5 className="mt-0">Contact Number</h5>
                      <p>+325 12345 65478</p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="icon-box media bg-deep p-30 mb-20">
                    {' '}
                    <a className="media-left pull-left flip" href="/">
                      {' '}
                      <i className="pe-7s-mail text-theme-colored" />
                    </a>
                    <div className="media-body">
                      <h5 className="mt-0">Email Address</h5>
                      <p>supporte@yourdomin.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="icon-box media bg-deep p-30 mb-20">
                    {' '}
                    <a className="media-left pull-left flip" href="/">
                      {' '}
                      <i className="fa fa-skype text-theme-colored" />
                    </a>
                    <div className="media-body">
                      <h5 className="mt-0">Make a Video Call</h5>
                      <p>ThemeMascotSkype</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
