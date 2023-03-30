import React from "react";
import "./signup.css";

function Signup() {
  function myFunction() {
    var x = document.getElementById("signup_password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function handlesignup() {
    let name = document.getElementById("signup_name").value;
    let email = document.getElementById("signup_email").value;
    let password = document.getElementById("signup_password").value;
    if (email === "" || password === "") {
      alert("please fill all the credentials");
    } else {
      let obj = { name, email, password };
      console.log(obj);
    }
  }
  return (
    <>
      <div id="signup_container">
        <div id="signup_form">
          <h1>Sign Up</h1>
          <label for="">User Name</label>
          <br />
          <input id="signup_name" type="text" placeholder="Enter Your Name" />
          <br />
          <br />
          <label for="">Email</label>
          <br />
          <input id="signup_email" type="text" placeholder="Enter Your Email" />
          <br />
          <br />
          <label for="">Password</label>
          <br />
          <input
            id="signup_password"
            type="password"
            placeholder="Enter Your Password"
          />
          <br />
          <div id="fp">
            <p>
              <input type="checkbox" onClick={myFunction} />
              Show Password
            </p>
            <p>Forget Password?</p>
          </div>
          <button id="signup_btn" onClick={handlesignup}>
            Sign Up
          </button>
          <div id="continue_div">
            <p>or</p>
            <h3>Continue With</h3>
            <div id="auth">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                alt=""
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div id="signup_img">
          <img
            src="https://img.freepik.com/free-vector/doctor-measuring-blood-pressure-male-patient-female-physician-sitting-table-clinic-hospital-checking-arterial-pressure-sick-man-flat-vector-illustration-cardiology-health-concept_74855-24496.jpg?w=2000"
            alt=""
          />
          <h1>Sign Up</h1>
        </div>
      </div>
    </>
  );
}

export default Signup;
