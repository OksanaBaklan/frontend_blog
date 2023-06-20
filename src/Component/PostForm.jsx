import React from 'react'

function PostForm(props) {

    const {submitHandler, postDetails} = props
    return (
        <form onSubmit={submitHandler}>
        <div className="block">
          <input
            type="text"
            name="title"
            required={postDetails?false:true}
            placeholder={postDetails?.title? postDetails.title :"Title"}
          />
        </div>

        <div className="block">
          <input
            placeholder={postDetails?.description? postDetails.description :"Description"}
            type="text"
            name="description"
            required={postDetails?false:true}

          />
        </div>

        <div className="block">
          <input
            placeholder={postDetails?.content?  postDetails.content :  "Content Details"}
            type="text"
            name="content"
            required={postDetails?false:true}

          />
        </div>

        <button className={"submitbtn"} type = "submit">{postDetails?.title? "Update" : "Post" }</button>
        <button className="cancelbtn" type="reset">Cancel</button>
      </form>
    )
}

export default PostForm
