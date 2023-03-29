import React, { useEffect, useState } from "react";
import './login.css';

function Login(){
  // const [emaillogin,setEmaillogin] = useState("empty");
  // const [emailpassword,setpasswordlogin] = useState("empty");
    // function handleemail(e){
    //   //console.log(e.target.value);
    //   setEmaillogin(e.target.value);

    // }
    // function handlepassword(e){
    //   setpasswordlogin(e.target.value);
    // }
    function myFunctionlogin() {
        var x = document.getElementById("login_password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
      
       function handlelogin(){
         let email = document.getElementById("login_email").value;
         let password = document.getElementById("login_password").value;
         if(email===""||password===""){
          alert("please fill all the credentials")
         }else{
         let obj = {email,password};
         console.log(obj);
         }
       }
      
    return(<>
      <div id="login_container">
        <div id="login_img">
            <img src="https://theuniqueacademy.co.in/assets/images/test.png" alt=""/>
            <h1>login</h1>
        </div>
        <div id="login_form">
            <h1>Login</h1>
            <label for="">Email</label><br/>
            <input id="login_email" type="text" placeholder="Enter Your Email" /><br/><br/>
            <label for="">Password</label><br/>
            <input id="login_password" type="password" placeholder="Enter Your Password" /><br/>
            <div id="lfp">
                <p><input type="checkbox" onClick={myFunctionlogin}/>Show Password</p>
                <p>Forget Password?</p>
            </div>
            <button id="login_btn" onClick={handlelogin}>login</button>
            <div id="continue_div_login">
                <p>or</p>
                <h3>Continue With</h3>
                <div id="auth_login"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt=""/>
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt=""/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
                </div>
            </div>
        </div>
       
    </div>
    </>)
}

export default Login;