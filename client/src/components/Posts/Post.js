import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import { CardActions, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { likePost, deletePost } from '../../actions/posts';
import './Post.css';

const Post = ({ post, setCurrentId }) => {   
    const dispatch = useDispatch(); 
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (post.likes.length > 0) {
          return post.likes.find((like) => like === (user?.result?._id))
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    return (
        <div className='post'>
            <div className='post_header'>
                <Avatar
                    className='post_avatar'
                    alt='Username'
                    src={post.avatar}
                />
                <h6>{post.name}</h6>       
                <Typography  variant="body2">{moment(post.createdAt).fromNow()}</Typography>   
                <div className="postOptions">
                    {(user?.result?._id === post?.creator) && (
                        <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(post._id)}>
                            <MoreHorizIcon fontSize="default" />
                        </Button>
                    )}
                </div>
            </div>
            <img className='post_image' src={post.img}></img>
            <div className='post_text'><h4>{post.caption}</h4></div>
            <CardActions className='postActions'>
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                    <Likes />
                </Button>
                {(user?.result?._id === post?.creator) && (
                    <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                )}
            </CardActions>
        </div>
    );
}

export default Post