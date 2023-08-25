import Card from '../models/dbCards.js'
import PostMessage from '../models/postMessage.js';
import { userPreference, cardImg } from './auth.js';
import mongoose from 'mongoose';

export const postCard = async (req, res) => {
    const dbCard = req.body;

    const newCard = new Card(dbCard);

    try {
        await newCard.save();

        res.status(201).json(newCard);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getCards = async (req, res) => {
    try {
        if(userPreference == 'Men') {
            const getCards = await Card.find({ gender: 'Male', img: { $ne: cardImg } });

            return res.status(200).json(getCards);
        } else if(userPreference == 'Women') {
            const getCards = await Card.find({ gender: 'Female', img: { $ne: cardImg } });

            return res.status(200).json(getCards);
        } else {
            const getCards = await Card.find({ img: { $ne: cardImg } });

            return res.status(200).json(getCards);
        }
    } catch(error) {
        res.status(404).json({ message: error.message });
    }    
};

export const likeCard = async (req, res) => {
    const { id } = req.params;

    if(!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No card with id: ${id}`);

    const userCard = await Card.findOne({ img: cardImg });
    const currentCard = await Card.findById(id);

    if(id !== String(userCard._id)) {
        const index = currentCard.likes.findIndex((id) => id === String(userCard._id));

        if(index === -1) {
            currentCard.likes.push(userCard._id.toString());
        } else {
            currentCard.likes = currentCard.likes.filter((id) => id !== String(userCard._id));
        }

        const updatedCard = await PostMessage.findByIdAndUpdate(id, currentCard, { new: true });
        res.status(200).json(updatedCard);
    } else {
        res.status(403).json("you can't follow yourself");
    }
}