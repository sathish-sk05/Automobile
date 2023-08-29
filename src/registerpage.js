import React from 'react'
import './registerpage.css';
import { Space , Spin } from 'antd';
import { useState } from "react";
import {useHistory  } from 'react-router-dom'

function Registerpage() {


  let historyUsage = useHistory()
  let [formdata, setdata] = useState({
    firstname: "",
    firstnameClicked: false,
    firstnameHasError: false,
    lastname: "",
    lastnameClicked: false,
    lastnameHasError: false,
    email: "",
    emailClicked: false,
    emailHasError: false,
    phonenumber: "",
    phonenumberClicked: false,
    phonenumberHasError: false,
    password: "",
    passwordClicked: false,
    passwordHasError: false,
    confirmpassword: "",
    confirmpasswordClicked: false,
    confirmpasswordHasError: false,
    City: "",
    CityClicked: false,
    CityHasError: false,
    state: "",
    stateClicked: false,
    stateHasError: false,
    address: "",
    addressClicked: false,
    addressHasError: false,
    PinCode: "",
    PinCodeClicked: false,
    PinCodeHasError: false,
  });

   
let [isSpinVisible,setIsSpinVisible]=useState(false)
  // submit

  async function registerFunction(e){
    e.preventDefault();
 setIsSpinVisible(true);
 let dataSentOrNot =  await fetch ('https://rcz-backend.onrender.com/api/addUserRegistrationAnciMart',{
    method :'POST',
    headers : {
      'content-type' : 'application/json'
    },
    body : JSON.stringify({...formdata, userId : formdata.email, userPass : formdata.password, collectionId : "sathish batch11"})
  });
  if(dataSentOrNot){
    historyUsage.push("/cards");
    setIsSpinVisible(false);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  //  console.log(obj);
}

  // first name

  function firstname(value) {
    debugger
    let num = false
    value.split("").map(function (e) {
      if (!isNaN(value)) {
        num = true
      }
    })
    if (num === true) {
      return true
    }
    else {
      return false
    }
  }

  // last name

  function lastname(value) {
    debugger
    let num = false
    value.split("").map(function (e) {
      if (!isNaN(value)) {
        num = true
      }
    })
    if (num === true) {
      return true
    }
    else {
      return false
    }
  }

  // phone number 

  function phonenumber(value) {
    debugger
    let number = false
    value.split("").map(function () {
      if (isNaN(value)) {
        number = true

      }

    })
    if (number === true) {
      return true
    }
    else {
      return false
    }
  }

  // city

  function City(value) {
    debugger
    let number = false
    value.split("").map(function () {
      if (!isNaN(value)) {
        number = true
      }
    })
    if (number === true) {
      return true
    }
    else {
      return false
    }
  }

  // state

  function state(value) {
    debugger
    let number = false
    value.split("").map(function () {
      if (!isNaN(value)) {
        number = true
      }
    })
    if (number === true) {
      return true
    }
    else {
      return false
    }
  }

  // pincode

  function PinCode(value) {
    debugger
    let number = false
    value.split("").map(function () {
      if (isNaN(value)) {
        number = true
      }
    })
    if (number === true) {
      return true
    }
    else {
      return false
    }
  }

  return (

    <div className="main-details">
 <Space
     direction="vertical"
     style={{
        width:'100%',
     }}
    >
<Spin tip="Loading..." spinning={isSpinVisible}>
    </Spin>

      <div id="container">
        <div class="title">Register Form</div>
        <form action="#">
          <div class="user-details">
            <div class="input-box">
              <label class="details">First Name</label>
              <input onChange={function (e) {
                debugger

                let HasError = false;
                if (!e.target.value.length) {
                  HasError = true;
                }

                setdata({ ...formdata, firstname: e.target.value, firstnameClicked: true, firstnameHasError: HasError })
              }}
                type="text" placeholder="Enter your name" required></input>
              {formdata.firstnameClicked && formdata.firstnameHasError || firstname(formdata.firstname) ? <h5 style={{ color: "red" }}>Plese check the error !</h5> : <p></p>}
            </div>

            <div class="input-box">
              <label class="details">Last Name</label>
              <input onChange={function (e) {
                debugger

                let HasError = false;
                if (!e.target.value.length) {
                  HasError = true;
                }

                setdata({ ...formdata, lastname: e.target.value, lastnameClicked: true, lastnameHasError: HasError })
              }}
                type="text" placeholder="Enter your name" required></input>
              {formdata.lastnameClicked && formdata.lastnameHasError || lastname(formdata.lastname) ? <h5 style={{ color: "red" }}>Plese check the error !</h5> : <p></p>}
            </div>



            <div class="input-box">
              <label class="details">Email</label>
              <input onChange={function (e) {
                debugger

                let HasError = false;
                if (!e.target.value.length || !e.target.value.includes("@") || !e.target.value.includes(".") || !e.target.value.includes("com")) {
                  HasError = true;
                }

                setdata({ ...formdata, email: e.target.value, emailClicked: true, emailHasError: HasError })
              }}

                type="email" placeholder="Enter your email" required ></input>
              {formdata.emailClicked && formdata.emailHasError ? <h5 style={{ color: "red" }}> Plese check the error !</h5> : <p></p>}
            </div>

            <div class="input-box">
              <span class="details">Phone Number</span>
              <input onChange={function (e) {
                debugger

                let HasError = false;
                if (!e.target.value.length) {
                  HasError = true;
                }

                setdata({ ...formdata, phonenumber: e.target.value, phonenumberClicked: true, phonenumberHasError: HasError })
              }}
                type="text" placeholder="Enter your number" required ></input>
              {formdata.phonenumberClicked && formdata.phonenumberHasError || phonenumber(formdata.phonenumber) ? <h5 style={{ color: "red" }}>Plese check the error !</h5> : <p></p>}

            </div>

            <div class="input-box">
              <label class="details">Password</label>
              <input onChange={function (e) {
                debugger

                let HasError = false;
                if (!e.target.value.length) {
                  HasError = true;
                }

                setdata({ ...formdata, password: e.target.value, passwordClicked: true, passwordHasError: HasError })
              }}
                type="type" placeholder="Enter your password" required ></input>
              {formdata.passwordClicked && formdata.passwordHasError ? <h5 style={{ color: "red" }}> Plese check the error !</h5> : <p></p>}
            </div>

            <div class="input-box">
              <label class="details">Confirm Password</label>
              <input onChange={function (e) {
                debugger

                let HasError = false;
                if (!e.target.value.length) {
                  HasError = true;
                }

                setdata({ ...formdata, confirmpassword: e.target.value, confirmpasswordClicked: true, confirmpasswordHasError: HasError })
              }}
                type="type" placeholder="Confirm your password" required ></input>
              {formdata.confirmpasswordClicked && formdata.confirmpasswordHasError ? <h5 style={{ color: "red" }}> Plese check the error !</h5> : <p></p>}
            </div>

            <div class="input-box">
              <label class="details">City</label>
              <input onChange={function (e) {
                debugger

                let HasError = false;
                if (!e.target.value.length) {
                  HasError = true;
                }

                setdata({ ...formdata, City: e.target.value, CityClicked: true, CityHasError: HasError })
              }}
                type="text" placeholder="Enter your City" required></input>
              {formdata.CityClicked && formdata.CityHasError || City(formdata.City) ? <h5 style={{ color: "red" }}>Plese check the error !</h5> : <p></p>}

            </div>

            <div class="input-box">
              <label class="details">State</label>
              <input onChange={function (e) {
                debugger

                let HasError = false;
                if (!e.target.value.length) {
                  HasError = true;
                }

                setdata({ ...formdata, state: e.target.value, stateClicked: true, stateHasError: HasError })
              }}
                type="text" placeholder="Enter your state" required ></input>
              {formdata.stateClicked && formdata.stateHasError || state(formdata.state) ? <h5 style={{ color: "red" }}>Plese check the error !</h5> : <p></p>}

            </div>

            <div class="input-box">
              <label class="details">Address</label>
              <input onChange={function (e) {
                debugger

                let HasError = false;
                if (!e.target.value.length) {
                  HasError = true;
                }

                setdata({ ...formdata, address: e.target.value, addressClicked: true, addressHasError: HasError })
              }}
                type="text" placeholder="Enter your Address" required ></input>
              {formdata.addressClicked && formdata.addressHasError ? <h5 style={{ color: "red" }}>Plese check the error !</h5> : <p></p>}

            </div>

            <div class="input-box">
              <label class="details">PinCode</label>
              <input onChange={function (e) {
                debugger

                let HasError = false;
                if (!e.target.value.length) {
                  HasError = true;
                }

                setdata({ ...formdata, PinCode: e.target.value, PinCodeClicked: true, PinCodeHasError: HasError })
              }}
                type="type" placeholder="Enter your PinCode" required ></input>
              {formdata.PinCodeClicked && formdata.PinCodeHasError || PinCode(formdata.PinCode) ? <h5 style={{ color: "red" }}> Plese check the error !</h5> : <p></p>}
            </div>
          </div>

          <div class="button">
            <button onClick={registerFunction}>Submit</button>
          </div>
        </form>
      </div>
      </Space>
    </div>
  );
}
export default Registerpage;

