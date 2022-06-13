/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Sigh from '../components/Includes/Sigh';

function Signup() {
  return (
    <div>
      <Sigh />
      <section className="divider">
        <div className="container">
          <div className="row pt-30">
            <div className="col-md-6">
              <img src="assets/images/bg/bg2.jpg" alt="ff" />
            </div>
            <div className="col-md-6">

              <h4 className="text-theme-colored mt-0 pt-5"> Signup</h4>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
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
                        Password
                        {' '}
                        <small>*</small>
                      </label>
                      <input name="form_password" className="form-control required" type="password" placeholder="Enter Subject" />
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
                  <input name="form_botcheck" className="form-control" type="hidden" value="" />
                  <button type="submit" className="btn btn-dark btn-theme-colored btn-flat mr-5" data-loading-text="Please wait...">Signup</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Signup;
