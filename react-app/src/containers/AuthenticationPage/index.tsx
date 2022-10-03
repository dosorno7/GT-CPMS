import { Button, Box, Tabs, Tab } from '@mui/material';
import React, {Component, useEffect} from 'react'
import './AuthenticationPage.css'
import RequestPage from '../RequestPage/RequestPage';

class AuthenticationPage extends Component {
    authenticate() {
        var link = window.location.href;
        var ticket = link.substring(link.indexOf("ticket") + 7);
        console.log(ticket);

        //Replace with proper identification when OIT gives access
        if(ticket.substring(0, 2) === "ST") {
            window.location.assign("http://localhost:3000/HomePage/");
        }
    }

    componentDidMount(): void {
        this.authenticate();
    }

    render() {
        return (
            <div className="home_page" >
                <div className="header">
                    <div className="header_utils">
                        <h1 className="title_text" onLoad={this.authenticate}> Client Project Management System </h1>
                    </div>
                </div>

                <div className="main_content">
                    <div className="login_buttons">
                    <div>
                        <div className="not_auth">
                            It seems that you are not an authorized user, would you like to request access?
                        </div>
                        <button id="requestaccessbutton" onClick={event =>  
                        window.location.href='http://localhost:3000/RequestPage/'}>
                            Request Access
                        </button>
                    </div>
                    
                    </div>
                </div>
            </div>
        )
    }

}

export default AuthenticationPage;