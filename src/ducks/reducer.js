const initialState = {
    userName: '',
    id: null,
    avatarUrl: ''
}

const ADD_NEW_USER = 'ADD_NEW_USER'

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){    
        default:
            return state
    }
}