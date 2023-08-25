import { FETCH_CARDS, LIKE_CARD } from "../constants/actionTypes";
import * as api from '../api/index.js';

export const getCards = () => async (dispatch) => {
    try {
        const { data } = await api.getCards();
        
        dispatch({ type: FETCH_CARDS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const likeCard = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    
    try {
        const { data } = await api.likeCard(id, user?.token);
        
        dispatch({ type: LIKE_CARD, payload: data });
    } catch(error) {
        console.log(error);
    }
}