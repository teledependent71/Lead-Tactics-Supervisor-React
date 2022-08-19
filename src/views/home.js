import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Tactics Supervisor</title>
        <meta property="og:title" content="Lead Tactics Supervisor" />
      </Helmet>
    </div>
  )
}

export default Home
