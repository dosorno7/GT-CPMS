import { Button, Box, Tabs, Tab } from '@mui/material';
import React, {Component, Suspense, useEffect, useState} from 'react'
import '../RejectionPage/RejectionPage.css'


class AuthenticationPage extends Component {
    
    authenticate() {
        var link = window.location.href;
        var ticket = link.substring(link.indexOf("ticket") + 7);
        console.log(ticket);

        //Replace with proper identification when OIT gives access
        if(ticket.substring(0, 2) === "ST") {
            window.location.assign("http://localhost:3000/HomePage/");
            localStorage.setItem('valid_token', "true")
            return true;
        } else {
            window.location.assign("http://localhost:3000/RejectionPage/");
            localStorage.setItem('valid_token', "false")
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
                        <h1 className="title_text"> Client Project Management System </h1>
                    </div>
                </div>
                <div className="main_content">
                    <div className="login_buttons">
                    <div>
                        <div className="not_auth">
                            Authenticating
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthenticationPage;