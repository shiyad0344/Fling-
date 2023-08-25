import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import '../Posts/PostForm.css';

const PostForm = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch();
    const[postData, setPostData] = useState({ img: '', caption: '' });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleChange = e => {
        setPostData({ ...postData, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name, avatar: user?.result?.img }));
        } else {
            dispatch(createPost({ ...postData, name: user?.result?.name, avatar: user?.result?.img }));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ img: '', caption: '' });
    }

    if(!user?.result?.name) {
        return (
            <div>
                <p>Please Login First</p>
            </div>
        )
    }

    return (
        <div>
            <div class="form" style={{width: "400px"}}>
                <form onSubmit={handleSubmit}>
                    <p>{currentId ? 'Editing' : 'Posting'}</p>
                    <div class="row">
                        <div class="col-25">
                            <label for="img">Upload Profile Image</label>
                        </div>
                        <div class="col-75">
                            <FileBase 
                                id="img"
                                name="img"
                                type="file"
                                multiple={false}
                                onDone={({base64}) => setPostData({ ...postData, img: base64 })}
                            />                       
                        </div>
                    </div>                   
                    <div class="row">
                        <div class="col-25">
                            <label for="caption">Caption</label>
                        </div>
                        <div class="col-75">
                            <textarea 
                                id="caption" 
                                name="caption" 
                                placeholder="Write something.." 
                                style={{height: "200px"}, {width: "200px"}}
                                value={postData.caption}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>
                    <button type="submit" className="submit">Post!</button>
                </form>
                <button onClick={clear} className="clear">Clear</button>
            </div>
        </div>
    );
}

export default PostForm