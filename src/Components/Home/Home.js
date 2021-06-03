import React, { useContext, useEffect } from 'react';
import PostCard from '../PostCard/PostCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Home.css'
import { UserContext } from '../../App';

const Home = () => {
    const [allPost, setAllPost] = useContext(UserContext);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/tania-developer/post-maker/users')
        .then(res => res.json())
        .then(data => setAllPost(data));
    });

    
    return (
        <div className="post-container">
            {
                allPost.length === 0 &&<CircularProgress disableShrink />
            }
            {
                allPost.map(user => <PostCard user={user} key={user.id}></PostCard>)
            }
        </div>
    );
};

export default Home;