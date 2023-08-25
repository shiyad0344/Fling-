import React from 'react';
import TinderCard from 'react-tinder-card';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { likeCard } from '../../actions/cards';
import './TinderCards.css';

const Card = ({ setCurrentId }) => {
    const cards = useSelector((state) => state.cards);
    const dispatch = useDispatch();

    // const swiped = (direction, nameToDelete) => {
    //     if(direction === "right") {
    //         dispatch(likeCard(person._id));
    //     }
    // };

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    };

    return (
        <div className="tinderCards__cardContainer">
                {cards.map((person) => (
                    <TinderCard
                        key={person._id}
                        setCurrentId={setCurrentId}
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        //onSwipe={(dir) => {if(dir === "right") dispatch(likeCard(person._id))}}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.img})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                        <div className='bio'>
                            <p>{person.bio}</p>
                        </div>
                    </TinderCard>
                ))}
            </div>
    )
}

export default Card
