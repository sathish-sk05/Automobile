import React, { useEffect, useState } from "react";
import { Alert, Space, Spin } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Logo from "./images/ancimartlogo.png";
import "./Cards.css";
// import { UserOutlined, HeartOutlined,ShoppingCartOutlined} from '@ant-design/icons';
 import Carouselmulti from "./Carouselmulti";
//import { Carousel } from 'antd';
import { Link } from "react-router-dom";




export default function Cards() {
  let [collectionData , setCollectionData] = useState([]);

  // mount
  useEffect(()=>{

    async function getCollection(){
      debugger
      let receivingData = await  fetch("https://rcz-backend.onrender.com/api/collectionSetList");
      let formattedData = await receivingData.json();
      setCollectionData(formattedData);
    };
    getCollection();

  },[]);
    const {
        // token: { colorBgContainer },
      } = theme.useToken();
    return (
      <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Spin tip="Loading..." spinning={false}>
    {/* <Layout> */}
      {/* <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >
          <div className="container-header">

          <div
          style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
          }}
        >
            <img className="logo" src={Logo}></img>
        </div>
        <div className="icon-holder">
        <UserOutlined />
        <HeartOutlined />
        <ShoppingCartOutlined />
        </div>
          </div>
       

       
      </Header> */}
      {/* <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      > */}
      
       
        <Breadcrumb
          style={{
            margin: '16px 45px',
            
          }}
        >
          
     
       <Link className="space" to={{
              pathname: "/Cards",}}>   
          <Breadcrumb.Item>Home</Breadcrumb.Item>
       </Link> 
       |
       <Link className="space1" to={{
              pathname: "/register",}}>
          <Breadcrumb.Item>Register</Breadcrumb.Item>
       </Link>
       |
       <Link className="space2" to={{
              pathname: "/login",}}> 
          <Breadcrumb.Item>Login</Breadcrumb.Item>
       </Link>  
          
        </Breadcrumb>
       
        
{/* bootstrap */}
    
<div>
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/msgabanner/desktop-banner-1500-x-470.jpg?rev=fcea44b87a1948f9b0e6b1147abf687f"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>AnciMart</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/msgabanner/alto_k10/altok10_desktop_1500x470-webp.webp?rev=fceb5aca977b4802ab5a2142f6d5e529"
          alt="Second slide" 
        />

        <Carousel.Caption>
          <h3>AnciMart</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/msgabanner/winter-banner/msga-desktop-1500x470-webp.webp?rev=760ac8e6c9ac485a9a9b400781eff627"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>AnciMart</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/msgabanner/brezza_2022/brezza_desktop_1500x470.webp?rev=7423a1db5c55466d9b15e909fe7d0ab4"
          alt="Forth slide"
        />
        <Carousel.Caption>
          <h3>AnciMart</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/msgabanner/xl6-2022/xl6-launch_desktop.webp?rev=0e791ff26f814631b97ca96ef5bdbd29"
          alt="Forth slide"
        />
        <Carousel.Caption>
          <h3>AnciMart</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
      </div>


        <div style={{minHeight: 450,
            background: "white",}}> 
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div id="category-text">
              Categories
          </div>
         
          
        </div>
        <div id="slider">
              Exterior : | Mouldings  |  Wheel covers  |  Alloy Wheels  |  Body styling kit parts  |  Wheel Arc kit
          </div>
        
        <Carouselmulti data ={collectionData} />
     
        </div>
        
        
      {/* </Content> */}
          
    {/* </Layout> */}
    
  </Spin>
  </Space>
        
    );
}
