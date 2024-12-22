import React from 'react'
import "./homepage.css"
const HomePage = () => {
  return (
    <div className="auction-page">
    <div className="overlay">
      <div className="content">
        <img
          src="/public/Assets/logo.jpeg" // Replace with your actual logo path
          alt="Bid Wars Logo"
          className="logo"
        />
        <h2>Select the mode of auction you want to conduct</h2>
        <div className="buttons">
          <button className="btn">Team Auction</button>
          <button className="btn">Solo Auction</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomePage
