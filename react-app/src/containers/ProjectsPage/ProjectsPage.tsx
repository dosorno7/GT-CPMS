import { Button, Box, Tabs, Tab } from '@mui/material';
import { Component } from 'react';
import './ProjectsPage.css';
import { ProjectsGrid } from '../../components/DataGrid';

class ProjectsPage extends Component {
    render() {
        return (
            <div className="projects_page">
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
                            // TODO: Handle Create Project click here
                            console.log('Create project clicked')
                        }}
                        >
                            Create Project
                        </Button>

                        <Button variant="contained" onClick={() => {
                            // TODO: Handle import from Excel click here
                            console.log('Import from Excel clicked')
                        }}
                        >
                            Import From Excel
                        </Button>
                        
                        {/* TODO: Filtering goes here! */}
                    </div>

                    <div className="grid">
                        {ProjectsGrid()}
                    </div>

                    <div className="bottom_buttons">
                        
                        <div className="bottom_buttons_group">
                            <Button variant="contained" onClick={() => {
                                // TODO: Handle click here
                                console.log('Copy emails clicked')
                            }}
                            >
                                Copy Emails to Clipboard
                            </Button>

                            <Button variant="contained" onClick={() => {
                                // TODO: Handle click here
                                console.log('Export to excel clicked')
                            }}
                            >
                                Export to Excel
                            </Button>
                        </div>

                        <div className="bottom_buttons_group">
                            <Button variant="contained" onClick={() => {
                                // TODO: Handle click here
                                console.log('Manage project clicked')
                            }}
                            >
                                Manage Selected Project
                            </Button>
                            <Button variant="contained" onClick={() => {
                                // TODO: Handle click here
                                console.log('Delete project clicked')
                            }}
                            >
                                Delete Selected Projects
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsPage;