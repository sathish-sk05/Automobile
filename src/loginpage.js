import React from 'react'
import './loginpage.css';
import { Space, Spin } from 'antd';
import { useState } from "react";
import { useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';

function LogIn() {
   let historyUsage = useHistory()
   let [formdata, setdata] = useState({
      Email: "",
      EmailClicked: false,
      EmailHasError: false,
      Password: "",
      PasswordClicked: false,
      PasswordHasError: false
   });
  
   let [isSpinVisible , setIsSpinVisible] = useState(false)
   // submit

   async function loginFunction(e){
      e.preventDefault();
    setIsSpinVisible(true);
   let dataSentOrNot =  await fetch ('https://rcz-backend.onrender.com/api/anciMartLogin',{
      method :'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify({...formdata, userId : formdata.Email, userPass : formdata.Password, collectionId : "sathish batch11"})
    });
    if(dataSentOrNot){
      dataSentOrNot.json().then(f=>{
           setIsSpinVisible(false);
      historyUsage.push("/register");
    
      setTimeout(() => {
         window.location.reload();
      }, 100);
   }).catch(e=>{
        alert("we dont have such user")
        setIsSpinVisible(false);
   })
    }
    //  console.log(obj);
  }

  

   return (
     
      <div id="imageDetails">
         <Space
     direction="vertical"
     style={{
        width:'100%',
     }}
    >
    <Spin tip="Loading..." spinning={isSpinVisible}>
    </Spin> 
   
    <div className="main-image">
         <div class="loginn-box">
            <img src="https://cdn.pixabay.com/photo/2016/04/01/11/10/automobile-1300231_1280.png" class="ancimart"></img>
            <h1>Login</h1>
            <form>

               <p>Email</p>
               <input onChange={function (e) {
                  debugger

                  let HasError = false;
                  if (!e.target.value.length || !e.target.value.includes("@") || !e.target.value.includes(".") || !e.target.value.includes("com")) {
                     HasError = true;
                  }
                  setdata({ ...formdata, Email: e.target.value, EmailClicked: true, EmailHasError: HasError })
               }}
                  type="email" name="username" placeholder=" email"></input>
               {formdata.EmailClicked && formdata.EmailHasError ? <h5 style={{ color: "red" }}> Plese check the error !</h5> : <p></p>}

               <p>Password</p>
               <input onChange={function (e) {
                  debugger

                  let HasError = false;
                  if (!e.target.value.length) {
                     HasError = true;
                  }

                  setdata({ ...formdata, Password: e.target.value, PasswordClicked: true, PasswordHasError: HasError })
               }}
                  type="password" name="password" placeholder="password"></input>

               {formdata.PasswordClicked && formdata.PasswordHasError ? <h5 style={{ color: "red" }}> Plese check the error !</h5> : <p></p>}
               <button onClick={loginFunction}>Register</button>
               <Link to={{
              pathname: "/Cards"
               }}>
               <h6 id="alreadyuser">Already a user ?</h6>
               </Link>
            </form>

         </div>
         </div>
        
</Space>
</div>
   );
}

export default LogIn;

