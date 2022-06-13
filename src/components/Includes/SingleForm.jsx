/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import postApi from '../../service_methods/post_method';

function Form() {
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
  }
  const payload = {};
  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:8080/api/contact_us';
    postApi(url, payload);
  };
  return (
    <section className="bg-lighter">
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col">
              <div className="border-1px p-30 mb-0">
                <h3 className="text-theme-colored mt-0 pt-5">Register here</h3>
                <hr />
                <form
                  id="job_apply_form"
                  name="job_apply_form"
                  method="post"
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          Name
                          <small>*</small>
                        </label>
                        <input
                          name="name"
                          type="text"
                          placeholder="Enter Name"
                          required=""
                          onChange={handleChange}
                          value={formData.name}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          Email
                          <small>*</small>
                        </label>
                        <input
                          name="email"
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
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          Mobile
                          <small>*</small>
                        </label>
                        <input
                          name="mobile"
                          className="form-control required email"
                          type="number"
                          placeholder="Enter Mobile Number"
                          onChange={handleChange}
                          value={formData.mobile}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          Choose The Duration Of Your Internship
                          <small>*</small>
                        </label>
                        <select
                          name="duration_days"
                          className="form-control required"
                          onChange={handleChange}
                          value={formData.duration_days}
                        >
                          <option value="30">30 Days</option>
                          <option value="45">45 Days</option>
                          <option value="60">2 Month</option>
                          <option value="90">3 Month</option>
                          <option value="120">4 Month</option>
                          <option value="180">6 Month</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>
                      Message
                      <small>*</small>
                    </label>
                    <textarea
                      name="message"
                      className="form-control required"
                      rows="5"
                      onChange={handleChange}
                      value={formData.message}
                      placeholder="Your cover letter/message sent to the employer"
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
                      className="btn btn-block btn-dark btn-theme-colored btn-sm mt-20 pt-10 pb-10"
                      onClick={handleSubmit}
                    >
                      Apply Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
