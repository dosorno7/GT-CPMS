import { Button, Box, Tabs, Tab } from '@mui/material';
import React, {Component} from 'react'
import './homePage.css'

class HomePage extends Component {
    
    //TODO: Separate some of these into different component files so it isn't so cluttered
    // I just took the code from last sem and pasted here. This will need to be cleaned up. 
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

                    <div className="tab_bar">
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs>
                                    <Tab label="Teams" />
                                    <Tab label="Clients" />
                                    <Tab label="Projects" />
                                </Tabs>
                            </Box>
                    </div>
                </div>

                <div className="main_content">
                    <div className="top_buttons">
                        <Button variant="contained" onClick={() => {
                            // TODO: Handle Create Team click here
                            console.log('create team clicked')
                        }}
                        >
                            Create Team
                        </Button>

                        <Button variant="contained" onClick={() => {
                            // TODO: Handle import from excel click here
                            console.log('import from excel clicked')
                        }}
                        >
                            Import From Excel
                        </Button>
                        
                        {/* TODO: Filtering goes here! */}
                    </div>

                    <div className="grid">
                        {/* TODO: DataGrid here? Seems perfect for our needs but not sure if it is available for us */}
                        <Box sx={{
                            width: 1500,
                            height: 500,
                            backgroundColor: 'primary.main'

                        }} />
                    </div>

                    <div className="bottom_buttons">
                        
                        <div className="bottom_buttons_group">
                            <Button variant="contained" onClick={() => {
                                // TODO: Handle click here
                                console.log('copy emails clicked')
                            }}
                            >
                                Copy Emails to Clipboard
                            </Button>

                            <Button variant="contained" onClick={() => {
                                // TODO: Handle click here
                                console.log('export to excel clicked')
                            }}
                            >
                                Export to Excel
                            </Button>
                        </div>

                        <div className="bottom_buttons_group">
                            <Button variant="contained" onClick={() => {
                                // TODO: Handle click here
                                console.log('manage team clicked')
                            }}
                            >
                                Manage Selected Team
                            </Button>
                            <Button variant="contained" onClick={() => {
                                // TODO: Handle click here
                                console.log('delete team clicked')
                            }}
                            >
                                Delete Selected Teams
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default HomePage;