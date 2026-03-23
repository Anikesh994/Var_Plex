"use client";

import { useQuery } from 'convex/react'
import React from 'react'
import { api } from '../../../../convex/_generated/api'

const Dashboard = () => {

    const data =useQuery(api.projects.getUserProjects);
    console.log(data);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
