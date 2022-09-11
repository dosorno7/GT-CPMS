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
                

            </div>
            /*<body>
                <div>
                    <div className="header">

                        <div className="profile_box">
                            <p className="user_icon"> </p>
                            <p className="username">George Burdell</p>
                            <p className="arrow_icon"> </p>
                        </div>

                        <div className="help_icon"></div>
                        <div className="search_box">
                            <input type="text" placeholder="Search for a client..." name="search" className="search_text"/>
                            <p className="search_icon"></p>
                        </div>
                    </div>

                    <div className="main_content">
                        <Button variant="contained" onClick={() => {
                            // TODO: Handle Create Team click here
                            console.log('create team clicked')
                        }}
                        >
                            Create Team
                        </Button>

                    
                    <div className="create_team_plus"></div>

                    <div className="import_box">
                        <p className="import_text"> Import from Excel</p>
                        </div>
                    <div className="import_plus"></div>

                    <div className="copy_emails_button">
                        <p className="copy_emails_text">Copy Emails to Clipboard</p>
                        </div>

                    <div className="export_button">
                        <p className="export_text">Export to Excel</p>
                        </div>

                    <div className="manage_button">
                        <p className="manage_text">Manage Selected Team</p>
                        </div>

                    <div className="delete_button">
                        <p className="manage_text">Delete Selected Team(s)</p>
                        </div>




                    <div className="grid_back"></div>
                    <div className="grid_top_left"></div>
                    <div className="team_num">
                        <p className="grid_header_text">Team Number</p>
                        </div>
                    <div className="section">
                            <p className="grid_header_text">Section</p>

                        </div>
                        <div className="project">
                            <p className="grid_header_text">Project</p>
                        </div>
                        <div className="client">
                            <p className="grid_header_text">Client</p>
                        </div>
                        <div className="professor">
                            <p className="grid_header_text">Professor</p>
                        </div>

                        <div className="grid_header_border"></div>

                        <div className="entries">
                            <div className="light_entry">
                                <p className="checkbox_entry"> _</p>
                                <p className="team_num_entry">2100</p>
                                <p className="section_entry">JDA</p>
                                <p className="project_entry">G.O.L.I.A.T.H</p>
                                <p className="client_entry">Tony Stark</p>
                                <p className="professor_entry">Elizabeth Olsen</p>

                            </div>
                            <div className="dark_entry">
                                <p className="checkbox_entry"> _</p>
                                <p className="team_num_entry">2101</p>
                                <p className="section_entry">JDA</p>
                                <p className="project_entry">Helius</p>
                                <p className="client_entry">Carol Denvers</p>
                                <p className="professor_entry">Elizabeth Olsen</p>
                            </div>
                            <div className="light_entry">
                                <p className="checkbox_entry"> _</p>
                                <p className="team_num_entry">2102</p>
                                <p className="section_entry">JDA</p>
                                <p className="project_entry">Insight</p>
                                <p className="client_entry">Peter Parker</p>
                                <p className="professor_entry">Elizabeth Olsen</p>
                            </div>
                            <div className="dark_entry"></div>
                            <div className="light_entry"></div>
                            <div className="dark_entry"></div>
                            <div className="light_entry"></div>
                            <div className="dark_entry"></div>
                            <div className="light_entry"></div>
                            <div className="dark_entry"></div>
                            <div className="light_entry"></div>
                            <div className="dark_entry"></div>
                            <div className="light_entry"></div>
                            <div className="dark_entry"></div>
                        </div>

                        </div>
                </div>
            </body> */
        )
    }

}

export default HomePage;