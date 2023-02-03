import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import signupImg from "../assets/Ayagigs.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import "./signup.css";

function Register() {
  // const [username, setUsername] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/tasks')
  //     .then(res => res.json())
  //     .then(data => setUsername(data.data))
  //     .catch(error => console.error(error));
  // }, []);
  
  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const endpoint = 'http://localhost:8000/api/v1/users';
    const data = {
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'email',
      password: 'password',
    };

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status === 200) {
          toast.success('Successfully registered');
          setTimeout(() => {
            window.location="/login"
          }, 3000);
          // sessionStorage.setItem('email', email);
        }else
        if (data.errors) {
          setErrors(data.errors);
        }
      });

    
  };
  return (
    <div className="auth_signup">
      <ToastContainer />
      <div>
        <div className="signup-container">
          <div className="hero-container">
            <div className="hero-left">
              <img
                src={signupImg}
                alt="SignupImage"
                className="hero_left-img"
              />
            </div>
            <div className="signup-hero-right">
              <h2>Create Account</h2>
              <p>
                Go ahead and sign up to make your Todo Lists!
              </p>
              <form method="POST" onSubmit={submitHandler}>

              <div className='input-box'>
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  name="firstname"
                  minLength={5}
                  maxLength={15}
                  style={{textIndent: '35px'}}
                />
                <FontAwesomeIcon icon={faUser} style={{ color: '#9CADF2', position:"absolute", top:"8px", left:'8px',borderRight: '1px solid #9CADF2',padding:'5px', paddingRight:'10px' }} />
              </div>

              <div className='input-box'>
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  name="lastname"
                  minLength={5}
                  maxLength={15}
                  style={{textIndent: '35px'}}
                />
                <FontAwesomeIcon icon={faUser} style={{ color: '#9CADF2', position:"absolute", top:"8px", left:'8px',borderRight: '1px solid #9CADF2',padding:'5px', paddingRight:'10px' }} />
              </div>
              
              <div className='input-box'>
              <input type="email" placeholder="Email" name="email" style={{textIndent: '35px'}} />
              <FontAwesomeIcon icon={faEnvelope} style={{ color: '#9CADF2', position:"absolute", top:"8px", left:'8px',borderRight: '1px solid #9CADF2',padding:'5px', paddingRight:'10px' }} />
              </div>

              <div className='input-box'>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  minLength={8}
                  name="password"
                  style={{textIndent: '35px'}}
                />
                <FontAwesomeIcon icon={faLock} style={{ color: '#9CADF2', position:"absolute", top:"8px", left:'8px',borderRight: '1px solid #9CADF2',padding:'5px', paddingRight:'10px' }} />
              </div>
                {errors.password && <p>{errors.password}</p>}
              
              <div className='input-box'> 
              <Link to='/login'><button style={{backgroundColor:"#1A308F"}} className='getstarted-btn'> Create Account </button></Link>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
