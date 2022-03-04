
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TempHearde from "../TempHearde"

import {
  Menu,
  MenuItem,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";
import Login from "../pages/Login";
import Welcome from '../pages/Welcome';
import Logout from "../pages/Logout";
import NotFound from '../pages/NotFound';
import ChkBox from "../pages/ChkBox";
import UImage from "../pages/UImage";
import ImgUp from '../pages/ImgUp';
import WysiwygRteDraft from '../pages/WysiwygRteDraft';
import EditorShow from '../pages/EditorShow';
import DatePick from '../pages/DatePick';
import ParseFormat from '../pages/ParseFormat';
import DialogDriver from "./DialogDriver";
import EmailDriver from "./EmailDriver";
import PosterDriver from "./PosterDriver";
import CreditCardDriver from "./CreditCardDriver";
import Envelope from "./Envelope";
import Tweets from "./Tweets";
import GitHubFileList from "./GitHubFileList/GutHubFileListDriver";
import UpdateUser from "../pages/UpdateUser";
import About from "../pages/About";
import UserInfo from "../pages/UserInfo";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Container } from "reactstrap";
import GetData from "../pages/GetData";
import ShowHide from "../pages/ShowHide";
import Result from "../pages/Result";
import AddtoCart from "../pages/AddtoCart"

const Header = () => {
  return (
    <>
      <div>
        <TempHearde />


        <div style={{   background: "black", height: "85vh", width: "200px", 
        float: "left", padding: "5px",color:"white"  }}>

          <SidebarContent>
            <Menu>
              <MenuItem ><Link exact to="/github-list">Github List</Link></MenuItem>
              <MenuItem ><Link exact to="/dialog">Dialog Test</Link></MenuItem>
              <MenuItem ><Link exact to="/poster">Poster Layout</Link></MenuItem>
              <MenuItem ><Link exact to="/email">Email Layout</Link></MenuItem>
              <MenuItem ><Link exact to="/creditcard">Credit Card Layout</Link></MenuItem>
              <MenuItem ><Link exact to="/envelope">Envelope Layout</Link></MenuItem>
              <MenuItem ><Link exact to="/tweets">Tweets Layout</Link></MenuItem>
            </Menu>
          </SidebarContent>
        </div>
        <div>
          <div style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" ,background:"white" ,color:"black"}}>

            <Container>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/ImgUp" component={ImgUp} />
                <Route exact path="/Welcome" component={Welcome} />
                <Route exact path="/Logout" component={Logout} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/AddtoCart" component={AddtoCart} />
                <Route exact path="/UpdateUser" component={UpdateUser} />
                <Route exact path="/UpdateUser/:id" component={UpdateUser} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Result" component={Result} />
                <Route exact path="/EditorShow" component={EditorShow} />
                <Route exact path="/ChkBox" component={ChkBox} />
                <Route exact path="/UImage" component={UImage} />
                <Route exact path="/DatePick" component={DatePick} />
                <Route exact path="/GetData" component={GetData} />
                <Route exact path="/ParseFormat" component={ParseFormat} />
                <Route exact path="/UserInfo/:id" component={UserInfo} />
                <Route exact path="/ShowHide" component={ShowHide} />
                <Route exact path="/WysiwygRteDraft" component={WysiwygRteDraft} />
                <Route path="/github-list">                  <GitHubFileList></GitHubFileList>               </Route>
                <Route path="/dialog">                  <DialogDriver></DialogDriver>                </Route>
                <Route path="/email">                  <EmailDriver></EmailDriver>                </Route>
                <Route path="/poster">                  <PosterDriver></PosterDriver>                </Route>
                <Route path="/creditcard">                  <CreditCardDriver></CreditCardDriver>                </Route>
                <Route path="/envelope">                  <Envelope></Envelope>                </Route>
                <Route path="/tweets">                  <Tweets></Tweets>                </Route>
                <Route component={NotFound} />
              </Switch>
            </Container>
          </div>
        </div>
        <div style={{background:"black", color: "white", clear: "both", padding: "5px" ,textAlign: "center"}}>
          <SidebarFooter>
            Copyright © FoodyUser.com
          </SidebarFooter>
        </div>



      </div>
    </>
  );
};

export default Header;
