import React from 'react';
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
import FavoriteIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/ThumbDown';
import ExpandMoreIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
    avatar: {
        backgroundImage: "https://i.ibb.co/rZQjp1g/otosaka.jpg",
    },
}));

const PostCard = (props) => {
    const {author, authorAvatar, postImg} = props.user;
    const classes = useStyles();
    
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
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand)}
                   
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>

        </Card>


    );
};

export default PostCard;