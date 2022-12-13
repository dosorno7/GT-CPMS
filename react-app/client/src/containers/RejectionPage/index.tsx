import { Button, Box, Tabs, Tab } from '@mui/material';
import React, {Component, Suspense, useEffect, useState} from 'react'
import './RejectionPage.css'

class RejectionPage extends Component<any, any> {

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
                    <Suspense fallback={<div>Loading</div>}>
                    <div>
                        <div className="not_auth">
                            It seems that you are not an authorized user, would you like to request access?
                        </div>
                        <button id="requestaccessbutton" onClick={event =>  
                        window.location.href='http://cpms.cc.gatech.edu/RequestPage/'}>
                            Request Access
                        </button>
                    </div>
                    </Suspense>
                    </div>
                </div>
            </div>
        )
    }

}

export default RejectionPage;