import { Button, Box, Tabs, Tab } from '@mui/material';
import React, {Component} from 'react'
import './Login.css'
import RequestPage from '../RequestPage/RequestPage';

class LogIn extends Component {
    authenticate() {
        window.location.assign("https://sso.gatech.edu/cas/login?service=http://cpms.cc.gatech.edu/AuthenticationPage/");
        var link = window.location.href;
        var ticket = link.substring(link.indexOf("ticket"));
        console.log(ticket);
    }

    render() {
        return (
            <div className="home_page">
                <div className="header">
                    <div className="header_utils">
                        <h1 className="title_text"> Client Project Management System </h1>
                    </div>
                </div>

                <div className="main_content">
                    <div className="login_buttons">
                    <div>
                    <button id="loginbutton" onClick={this.authenticate}> 
                        Authorize
                    </button>
                    </div>
                    <button id="requestaccessbutton" onClick={event =>  
                        window.location.href='http://cpms.cc.gatech.edu/RequestPage/'}>
                        Request Access
                    </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default LogIn;