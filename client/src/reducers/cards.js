import { FETCH_CARDS, LIKE_CARD } from "../constants/actionTypes";

export default (cards = [], action) => {
    switch (action.type) {
        case FETCH_CARDS:
            return action.payload;
        case LIKE_CARD:
            return [...cards, action.payload];
        default:
            return cards;
    }
};