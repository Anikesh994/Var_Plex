"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const Projects = () => {
    const {projectId} = useParams();
  return (
    <div>
      <h1>{ `THE PROJECT ID IS ${projectId}`}</h1>
    </div>
  )
}

export default Projects;
