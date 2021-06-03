import React, { useState } from 'react';
import CreatePost from '../CreatePost/CreatePost';
import DeletePost from '../DeletePost/DeletePost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faPlus } from '@fortawesome/free-solid-svg-icons';
import "./Dashboard.css";

const Dashboard = () => {
    const [manage, setManage] = useState(false);
    const handleManage= () => {
        setManage(true);
    }
    const handleAdd= () => {
        setManage(false);
    }
    return (
        <section className="admin">
            <div className="sidebar">
                <h2  className="sidebar__logo">Post Maker</h2>
                <button className="active" onClick={handleManage}> <span><FontAwesomeIcon icon={faTasks} className="icon" /> Manage Products </span></button>
                <button className="active" onClick={handleAdd}><span><FontAwesomeIcon icon={faPlus} className="icon" /> Add Products</span></button>
            </div>    
        
            <div className="admin__content">
                {
                 manage ? <DeletePost></DeletePost> :
                      <CreatePost></CreatePost>
                }
            </div>
        </section>
    );
};

export default Dashboard;