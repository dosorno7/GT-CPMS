import { Button, Box, Tabs, Tab } from '@mui/material';
import React, {Component} from 'react'
import './HomePage.css'
import BasicTabs from '../../components/TabBar'
import TeamGrid from '../../components/TeamGrid'

class HomePage extends Component {
    
    render() {
        return (
            <div className="home_page">
                <div className="header">
                    <div className="header_utils">
                        <h1 className="title_text"> Client Project Management System </h1>
                        <div className="profile_box">
                            <p className="user_icon"> </p>
                            <p className="username">George Burdell</p>
                            <p className="arrow_icon"> </p>
                        </div>

                    </div>
                    <BasicTabs value={0} />
                </div>

                <TeamGrid />
                
            

            </div>
        )
    }

}

export default HomePage;