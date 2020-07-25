import axios from 'axios'

const initialState = {
    email: '',
    id: null,
    avatarUrl: ''
}

const ADD_NEW_USER = 'ADD_NEW_USER';

export const requestUserData = () => {
    let data = axios.post('/auth/login',{}).then(res => res.data)
    return {
        type: ADD_NEW_USER,
        payload: data
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){    
        case ADD_NEW_USER:
            return payload
        default:
            return state
    }
}