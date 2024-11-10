import React from 'react'
import love from'../assets/love.jpeg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'>{props.name}</p>
        <img id='user-image' src={props.image} alt={props.name} />
        <p id='user-description'>{props.description}</p>
      
    </div>
  )
}

export default UserCard
