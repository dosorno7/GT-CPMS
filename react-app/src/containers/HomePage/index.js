import React, {Component} from 'react'
import './homePage.css'

class HomePage extends Component {
    
    //TODO: Separate some of these into different component files so it isn't so cluttered
    // I just took the code from last sem and pasted here. This will need to be cleaned up. 
    render() {
        return (
            <body>
                <div>
                    <div class="top_box">
                        <h1 class="title_text"> Client Project Management System </h1>

                        <div class="teams_box">
                            <h2 class="tabs_text"> Teams </h2>
                        </div>

                        <div class="clients_box">
                            <h2 class="tabs_text"> Clients </h2>
                        </div>

                        <div class="projects_box">
                            <h2 class="tabs_text"> Projects </h2>
                        </div>

                        <div class="profile_box">
                            <p class="user_icon" height="35px" width="35px"> </p>
                            <p class="username">George Burdell</p>
                            <p class="arrow_icon"> </p>
                        </div>

                        <div class="help_icon"></div>
                        <div class="search_box">
                            <input type="text" placeholder="Search for a client..." name="search" class="search_text"/>
                                <p class="search_icon"></p>
                        </div>

                        </div>

                        <div class="create_team_box">
                            <p class="create_team_text"> Create Team</p>
                        </div>
                        <div class="create_team_plus"></div>

                        <div class="import_box">
                            <p class="import_text"> Import from Excel</p>
                        </div>
                        <div class="import_plus"></div>

                        <div class="copy_emails_button">
                            <p class="copy_emails_text">Copy Emails to Clipboard</p>
                        </div>

                        <div class="export_button">
                            <p class="export_text">Export to Excel</p>
                        </div>

                        <div class="manage_button">
                            <p class="manage_text">Manage Selected Team</p>
                        </div>

                        <div class="delete_button">
                            <p class="manage_text">Delete Selected Team(s)</p>
                        </div>




                        <div class="grid_back"></div>
                        <div class="grid_top_left"></div>
                        <div class="team_num">
                            <p class="grid_header_text">Team Number</p>
                        </div>
                        <div class="section">
                            <p class="grid_header_text">Section</p>

                        </div>
                        <div class="project">
                            <p class="grid_header_text">Project</p>
                        </div>
                        <div class="client">
                            <p class="grid_header_text">Client</p>
                        </div>
                        <div class="professor">
                            <p class="grid_header_text">Professor</p>
                        </div>

                        <div class="grid_header_border"></div>

                        <div class="entries">
                            <div class="light_entry">
                                <p class="checkbox_entry"> _</p>
                                <p class="team_num_entry">2100</p>
                                <p class="section_entry">JDA</p>
                                <p class="project_entry">G.O.L.I.A.T.H</p>
                                <p class="client_entry">Tony Stark</p>
                                <p class="professor_entry">Elizabeth Olsen</p>

                            </div>
                            <div class="dark_entry">
                                <p class="checkbox_entry"> _</p>
                                <p class="team_num_entry">2101</p>
                                <p class="section_entry">JDA</p>
                                <p class="project_entry">Helius</p>
                                <p class="client_entry">Carol Denvers</p>
                                <p class="professor_entry">Elizabeth Olsen</p>
                            </div>
                            <div class="light_entry">
                                <p class="checkbox_entry"> _</p>
                                <p class="team_num_entry">2102</p>
                                <p class="section_entry">JDA</p>
                                <p class="project_entry">Insight</p>
                                <p class="client_entry">Peter Parker</p>
                                <p class="professor_entry">Elizabeth Olsen</p>
                            </div>
                            <div class="dark_entry"></div>
                            <div class="light_entry"></div>
                            <div class="dark_entry"></div>
                            <div class="light_entry"></div>
                            <div class="dark_entry"></div>
                            <div class="light_entry"></div>
                            <div class="dark_entry"></div>
                            <div class="light_entry"></div>
                            <div class="dark_entry"></div>
                            <div class="light_entry"></div>
                            <div class="dark_entry"></div>

                        </div>






                    </div>
                </body>
        )
    }

}

export default HomePage;