//tabella con:
//id post
//nome autore
//titolo
//body

import { Constants } from "./constants.mjs";

const state = {
    posts: [],
    users: []
}

const fetchPost = async () => {
    try {
        const result = await fetch(Constants.API_POSTS_URL)
        const posts = await result.json()
        state.posts = posts;
    } catch(error) {
        console.log(error)
    }
}

const fetchUsers = async () => {
    try{
        const result = await fetch(Constants.API_USERS_URL)
        const users = await result.json()
        state.users = users;
    }catch(error){
        console.log(error)
    }
}

const init = async () => {
    await fetchPost()
    await fetchUsers()
    console.log(state)
}

init()