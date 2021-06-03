import React, {useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LikeIcon from '@material-ui/icons/ThumbUp';
import DislikeIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { blue } from '@material-ui/core/colors';
import { DislikeContext, LikeContext } from '../../App';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 445,
        marginTop: 10
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        marginLeft: 'auto',
    },
    color: {
        color: blue[500],
      },
    
}));

const PostCard = (props) => { 
    const classes = useStyles();
    const {author, authorAvatar, postImg} = props.user;
    const [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);
    const [likes, setLikes] = useContext(LikeContext);
    const [dislikes, setDislikes] = useContext(DislikeContext);

    const handleLikePost = (user) => { 
        setLikeActive(!likeActive);
        setDislikeActive(false);

         if(likeActive === false) {
             const newData = [...likes, user];
             setLikes(newData);
            
        } 
        else {
           const lp = likes.filter(post => post.id !== user.id);
          setLikes(lp);
            }
       
    }
    const handleDislikePost = (user) => {
        setDislikeActive(!dislikeActive);
        setLikeActive(false);
        if(dislikeActive === false) {
            const newList = [...dislikes, user];
            setDislikes(newList);
           
       } 
       else {
          const dp = dislikes.filter(disPost => disPost.id !== user.id);
          setDislikes(dp);
           }
    }
    
    return (

        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar alt="Remy Sharp" src={authorAvatar}/>
                  }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title= {author}
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image={postImg}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={()=>handleLikePost(props.user)} >
                    <LikeIcon className={likeActive? classes.color : ''}/>
                </IconButton>
                <IconButton aria-label="share"  onClick={()=>handleDislikePost(props.user)}>
                    <DislikeIcon className={dislikeActive? classes.color : ''}/>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand)}          
                >
                    <ShareIcon />
                </IconButton>
            </CardActions>

        </Card>


    );
};

export default PostCard;