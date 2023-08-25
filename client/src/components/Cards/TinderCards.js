import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './TinderCards.css';
import { getCards } from '../../actions/cards.js';
import Card from './Card';

const TinderCards = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCards());
    }, [currentId, dispatch])

    return (
        <div className="tinderCards">
            <Card setCurrentId={setCurrentId} />
            <div className="swipeButtons">
                {/* <IconButton className="swipeButtons__left">
                    <CloseIcon fontSize="large" />
                </IconButton>
                <IconButton className="swipeButtons__right">
                    <FavoriteIcon fontSize="large" />
                </IconButton> */}
            </div>
        </div>
    );
}

export default TinderCards
