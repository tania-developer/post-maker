import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Home.css'

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/tania-developer/post-maker/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])
    return (
        <div className="post-container">
            {
                users.length === 0 &&<CircularProgress disableShrink />
            }
            {
                users.map(user => <PostCard user = {user} key={user.id}></PostCard>)
            }
        </div>
    );
};

export default Home;