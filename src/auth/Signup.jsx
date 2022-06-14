/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React ,{ useState } from 'react';
import { connect } from "react-redux";
import { signUp } from '../redux/actions';
import { Link } from 'react-router-dom';
import Sigh from '../components/Includes/Sigh';



const  Signup = ({ signUp }) => {
  const [state,setState] = useState({

    username: '',
    password: '',
    email: '',
    phone: ''

  });
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = "http://localhost:5000/register";
    signUp(url, state);
  };
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
              <form id="contact_form" name="nameff" className="" action="" method="post">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Name
                        {' '}
                        <small>*</small>
                      </label>
                      <input name="username" 
                      className="form-control" 
                      type="text" placeholder="Enter Username"
                      required="" 
                      onChange={(e) => handleChange(e)}
                      value={state.username}
                       />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Email
                        {' '}
                        <small>*</small>
                      </label>
                      <input 
                      name="email" 
                      className="form-control required email" 
                      type="email" 
                      placeholder="Enter Email"
                      onChange={(e) => handleChange(e)}
                      value={state.email} 
                      />
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
                      <input name="password"
                       className="form-control required" 
                       type="password" 
                       placeholder="Enter Password" 
                       onChange={(e) => handleChange(e)}
                       value={state.password}
                       />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone</label>
                      <input name="phone" 
                      className="form-control" 
                      type="text" 
                      placeholder="Enter Phone" 
                      onChange={(e) => handleChange(e)}
                      value={state.phone}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-dark btn-theme-colored btn-flat mr-5" data-loading-text="Please wait..." onClick={handleSubmit}>Signup</button>
                </div>
                <div className="clear text-center pt-10">
                Already User Login ?
                  <Link className="text-theme-colored font-weight-600 font-12" to="/login">Already User Login</Link>
                  
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapDispatchToProps = {
  signUp,
};

export default connect(null, mapDispatchToProps)(Signup);
