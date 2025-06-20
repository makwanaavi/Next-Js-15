"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function PostID() {
    const { postID, ID } = useParams()
    return (
        <div>
            post route inside dynamic <span style={{color:"red"}}> PostID :</span> First Dynamic ID:  <span style={{color:"red"}}>{ID} </span> Post Dynamic ID :<span style={{color:"red"}}>{postID} </span>
        </div>
    )
}

export default PostID
