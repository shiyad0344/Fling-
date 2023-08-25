import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from './Posts';
import PostForm from './PostForm';
import './Feed.css';

const Feed = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <div className='feed'>
            <div className='feed_header'>

                <img className='feed_header_image' hidden src='https://images-ext-2.discordapp.net/external/uBTgW5IvHFskkuxkjChJAp3_5XYa8jhnlq_g4VvvZA4/https/i.postimg.cc/bJGynZpg/Pics-Art-10-17-10-24-02.png?width=120&height=70' ></img>

            </div>
            <div className='posts'>
                <Posts setCurrentId={setCurrentId} />
            </div>
            <div className='postForm'>
                <PostForm currentId={currentId} setCurrentId={setCurrentId} />
            </div>
        </div>
    );
}

export default Feed