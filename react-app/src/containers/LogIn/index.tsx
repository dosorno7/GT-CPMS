import { Button, Box, Tabs, Tab } from '@mui/material';
import React, {Component} from 'react'
import './Login.css'

class LogIn extends Component {

    render() {
        return (
            <div className="home_page">
                <div className="header">
                    <div className="header_utils">
                        <h1 className="title_text"> Client Project Management System </h1>
                    </div>
                </div>

                <div className="main_content">
                    <div className="login_button">
                    <div>
                    <button id="loginbutton" onClick={event =>  
                        window.location.href='https://sso.gatech.edu/cas/login?service=http://localhost:3000/HomePage'}> 
                        Authorize
                    </button>
                    </div>

                        </div>
                </div>
            </div>
        )
    }

}

export default LogIn;