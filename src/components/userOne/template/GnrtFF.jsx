import React from 'react'
import './template.css'
export default function GnrtFF(props) {
    const isGnrt=props.gnrt;
  return (
      <div className={`${isGnrt?'gnrtd':'notGnrt'}`}>
   <a href=""  className={`gnrtBtn`}>
        {isGnrt?'Generated':'Generated FF'}
    </a>
      </div>
 
  )
}
