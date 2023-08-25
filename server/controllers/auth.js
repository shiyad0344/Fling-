import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js'
import Card from '../models/dbCards.js'

var userPreference = "";
var cardImg = "";

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).send("user doesn't exist");

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.hashedPassword);

        if(!isPasswordCorrect) return res.status(400).send("invalid credentials"); 

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });

        userPreference = existingUser.preference;
        cardImg = existingUser.img;
        res.status(200).json({ result: existingUser, token});
    } catch(error) {
        res.status(500).send("something went wrong");
    }
}

export const signup = async (req, res) => {
    const { bio, birthday, confirmPassword, email, gender, img, name, password, preference } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).send("user already exists");

        if(password != confirmPassword) return res.status(400).send("passwords don't match");

        const hashedPassword = await bcrypt.hash(password, 3);

        const result = await User.create({ bio, birthday, email, gender, img, name, hashedPassword, preference });
        const profile = await Card.create({ name, img, bio });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });

        userPreference = result.preference;
        cardImg = result.img;
        res.status(200).json({ result, token });
    } catch(error) {
        res.status(500).send("something went wrong");
    }
}

export var userPreference;
export var cardImg;