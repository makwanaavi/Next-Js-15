"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function PostID() {
   const {postID, ID} =  useParams()
  return (
    <div>
       First Dynamic ID:  {ID}  Post Dynamic ID :{postID}
    </div>
  )
}

export default PostID
