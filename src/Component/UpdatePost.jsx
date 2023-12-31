import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PostForm from './PostForm'

export default function UpdatePost(props) {
    const {postId} = useParams()
    const [post, setPost] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BE_URL}/api/posts/post-details/${postId}`)
        .then(response=>setPost(response.data))
        .catch(err => console.log(err))
    }, [])

    const submitHandler = async(e) => {
        e.preventDefault()
        const updatePost = {
            title: e.target["title"].value,
            content: e.target["content"].value,
            description: e.target["description"].value,
            postId
        }
        const config = {
            headers: {
                'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('my-app-token'))}` 
            }
      }
        await axios.put(`${process.env.REACT_APP_BE_URL}/api/posts/update-post`,updatePost,config )
        .then(response => navigate('/posts'))
        .catch(error => console.log(error))
    }
    return (
        <div>
            <h3>update post component</h3>
            <PostForm submitHandler={submitHandler} postDetails= {post}/>
        </div>
    )
}


