import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import "./signup.css";

function Login() {
  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const endpoint = 'https://goldblv.com/api/hiring/tasks/register';
    const data = {
      username: 'userName',
      email: 'userEmail',
      password: 'userPassword',
      password_confirmation: 'confirmUserPassword'
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
            window.location="/welcome"
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
        <div className="signup-container log-container">
          <div className="hero-container">
            <div className="signup-hero-right">
              <h2 className="text-center">Login</h2>
              <p>
                Go ahead and sign In to make your Todo Lists!
              </p>
              <form method="POST" onSubmit={submitHandler}>

              
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
              <Link to='/tasks'><button style={{backgroundColor:"#1A308F"}}> Login </button></Link>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
