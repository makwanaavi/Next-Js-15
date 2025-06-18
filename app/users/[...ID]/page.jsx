"use client"
import React from 'react'

function ID({params}) {
    const {ID} =  params
    console.log(ID)
  return (
    <div>
      {ID}
    </div>
  )
}

export default ID
