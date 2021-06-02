import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/tania-developer/post-maker/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])
    return (
        <div>
            {
                users.map(user => <PostCard user = {user} key={user.id}></PostCard>)
            }
        </div>
    );
};

export default Home;