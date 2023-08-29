import React from 'react'
import Logo from "./images/ancimartlogo.png";
import './App.css';
import { UserOutlined, HeartOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom"; 
import { Link } from 'react-router-dom';
  
import Registerpage from './registerpage';
   import LogIn from './loginpage';
   import Cards from './Cards';
   import CardCollection from './CardCollection';
   import {  Layout, Menu, theme } from 'antd';
   const { Header, Content,  } = Layout;
  
   
function App() {  

     const {
          token: { colorBgContainer },
        } = theme.useToken();
     return (
 <>
   <Layout className="layout">
      <Header style={{
          
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",}}>
        <div className="icon">
          
        <img className="logo-colect" src={Logo}></img>
        
        <div className="icon-holder">
     
        <UserOutlined />
        <HeartOutlined />
        <ShoppingCartOutlined />
        </div>
        </div>
        
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        /> */}
      </Header>
     
     
    </Layout>
<Router>
<Switch>
     <Route exact path="/register">
          <Registerpage />        
     </Route>
     <Route exact path="/login">
          <LogIn />        
     </Route>
     <Route exact path="/Cards">
          <Cards />        
     </Route>
     <Route exact path= "/CardCollection">
           <CardCollection />
     </Route>
     
     
</Switch>
</Router>
</>
 );
};
export default App;