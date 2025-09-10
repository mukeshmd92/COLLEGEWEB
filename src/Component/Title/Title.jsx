import React from 'react'
import "./Title.css"
const Title = ({title,subtitle}) => {
  return (
    <div className='Title'>
        <p>{title}</p>
        <h2>{subtitle}</h2>

    </div>
  )
}

export default Title