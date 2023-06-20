import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import './Card.css'
import { useNavigate } from "react-router-dom";

export default function Card(props){
const {post, userId, getPosts} = props;

const navigate = useNavigate()
const deleteBtn = async () => {
try {
  await axios.delete(`${process.env.REACT_APP_BE_URL}/api/posts/delete-post/${post._id}`, {
    headers:{
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem("my-app-token"))}`
    }
  });
  getPosts()
} catch (error) {
  console.log(error.message)
}

};

return (<>
{post&& <div className="cards" key={post._id}>
<h4>Title: {post.title}</h4>
<h4>Message: {post.content}</h4>
<h4>Creator: {post.owner.firstName}</h4>

<hr />
{userId===post.owner._id&&<button className="deletebtn" onClick={deleteBtn}>
  <FontAwesomeIcon icon={faTrash} />
</button>}
{console.log("userId: ", userId)}
{console.log("owner id: ", post.owner._id)
}
{userId===post.owner._id&&<button
  className="update-icon"
  onClick={() => navigate(`/update-post/${post._id}`)}
>
  <FontAwesomeIcon icon={faPen} />
</button>}
</div>}
</>)

}