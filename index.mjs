//tabella con:
//id post
//nome autore
//titolo
//body

import { Constants } from "./constants.mjs";

const state = {
    posts: [],
    users: [],
    data: [], //array di rendering
    _data: [] //array di cache
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

const formatData = () => {
    state._data = state.posts.map((post) => {
        const user = state.users.find((user) => {
            return post.userId == user.id
        });
        return {
            ...post,
            author : user.name
        }
    })
}

const init = async () => {
    await fetchPost()
    await fetchUsers()
    formatData()
    console.log(state)
}

init()
