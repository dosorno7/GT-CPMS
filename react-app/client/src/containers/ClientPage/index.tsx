import {Component} from 'react';
import './ClientPage.css';
import ClientGrid from '../../components/ClientGrid';
import BasicTabs from '../../components/TabBar';

class ClientPage extends Component {
     
    render() {
        return (
            <div className="client_page">
                <div className="header">
                    <div className="header_utils">
                        <h1 className="title_text"> Client Project Management System </h1>
                        <div className="profile_box">
                            <p className="user_icon"> </p>
                            <p className="username">George Burdell</p>
                            <p className="arrow_icon"> </p>
                        </div>

                    </div>
                    <BasicTabs />
                </div>

                <ClientGrid />
            </div>
        )
    }

}

export default ClientPage;