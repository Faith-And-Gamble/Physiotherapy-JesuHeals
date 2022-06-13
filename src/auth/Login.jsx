/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Log from '../components/Includes/Log';

function Login() {
  return (
    <div>
      <Log />
      <section className="divider">
        <div className="container">
          <div className="row pt-30">
            <div className="col-md-6">
              <img src="assets/images/bg/bg2.jpg" alt="ff" />
            </div>
            <div className="col-md-6">

              <h4 className="text-theme-colored mt-0 pt-5"> Login</h4>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              <form name="login-form" className="clearfix">
                <div className="row">
                  <div className="form-group col-md-12">
                    <label htmlFor="form_username_email">Username/Email</label>
                    <input id="form_username_email" name="form_username_email" className="form-control" type="text" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label htmlFor="form_password">Password</label>
                    <input id="form_password" name="form_password" className="form-control" type="text" />
                  </div>
                </div>
                <div className="checkbox pull-left mt-15">
                  <label htmlFor="form_checkbox">
                    <input id="form_checkbox" name="form_checkbox" type="checkbox" />
                    Remember me
                    {' '}

                  </label>
                </div>
                <div className="form-group pull-right mt-10">
                  <button type="submit" className="btn btn-default btn-sm">Login</button>
                </div>
                <div className="clear text-center pt-10">
                  <a className="text-theme-colored font-weight-600 font-12" href="/">Forgot Your Password?</a>
                </div>

              </form>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
