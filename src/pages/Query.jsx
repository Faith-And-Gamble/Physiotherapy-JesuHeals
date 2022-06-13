import React, { useState } from 'react';
import postApi from '../service_methods/post_method';

function Query() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    duration_days: '',
    message: '',
  });
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(setFormData);
  }
  const payload = {};
  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:8080/api/contact_us';
    postApi(url, payload);
  };
  return (
    <section id="contact" className="bg-silver-light">
      <div className="container pb-sm-10">
        <div className="row">
          <div className="col-md-5">
            <div className="contact-details bg-white border-theme-color-1px p-30 pt-40 pr-20 pb-60">
              <h3 className="font-24 mb-20">
                If You have any query
                {' '}
                <span className="text-theme-colored">get in touch</span>
                {' '}
                with
                us
              </h3>
              <p>
                B4, Second Floor, Bhaskar Flyover, opposite Dainik Bhaskar,
                Vivek Vihar, Bajaj Nagar, Jaipur, Rajasthan 302015
              </p>
              <ul className="list-icon theme-colored square mt-30">
                <li>
                  <i className="fa fa-map-marker text-white" />
                  <span className="font-weight-600 text-black-222">
                    Address:
                    {' '}
                  </span>
                  B4, Second Floor, Bhaskar Flyover Jaipur
                </li>
                <li>
                  <i className="fa fa-phone text-white" />
                  <span className="font-weight-600 text-black-222">
                    Phone:
                    {' '}
                  </span>
                  +91-9983340133
                </li>
                <li>
                  <i className="fa fa-envelope-o text-white" />
                  <span className="font-weight-600 text-black-222">
                    Email:
                    {' '}
                  </span>
                  info@ygrras.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            <h3 className="line-bottom mt-0 mb-20 mt-sm-30">
              Leave Your
              {' '}
              <span className="text-theme-colored">Query</span>
              {' '}
              Here
            </h3>
            <p className="mb-20">
              We are always looking for suggestions and feedback.
            </p>

            <form
              id="contact_form"
              name="contact_form"
              className=""
              action=""
              method="post"
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      name="name"
                      className="form-control"
                      type="text"
                      placeholder="Enter Name"
                      required=""
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      name="form_email"
                      className="form-control required email"
                      type="email"
                      placeholder="Enter Email"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      name="subject"
                      className="form-control required"
                      type="text"
                      placeholder="Enter Subject"
                      onChange={handleChange}
                      value={formData.subject}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      name="mobile"
                      className="form-control"
                      type="text"
                      placeholder="Enter Phone"
                      onChange={handleChange}
                      value={formData.mobile}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control required"
                  rows="5"
                  placeholder="Enter Message"
                  onChange={handleChange}
                  value={formData.message}
                />
              </div>
              <div className="form-group">
                <input
                  name="form_botcheck"
                  className="form-control"
                  type="hidden"
                  value=""
                />
                <button
                  type="submit"
                  className="btn btn-flat btn-theme-colored text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px"
                  data-loading-text="Please wait..."
                  onClick={handleSubmit}
                >
                  Send your message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Query;
