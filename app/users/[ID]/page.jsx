"use client"
import React from 'react'

function ID({ params }) {
  const { ID } = params
  console.log(ID)
  return (
    <div>
      Dynamic User inside dynamic ID{ID}
    </div>
  )
}

export default ID
