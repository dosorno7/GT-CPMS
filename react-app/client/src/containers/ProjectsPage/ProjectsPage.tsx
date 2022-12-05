import { Component } from 'react';
import './ProjectsPage.css';
import ProjectsGrid from '../../components/ProjectsGrid';
import BasicTabs from '../../components/TabBar';

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
                    <BasicTabs value={2}/>
                </div>
            <ProjectsGrid />
            </div>
        )
    }
}

export default ProjectsPage;