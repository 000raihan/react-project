import React from 'react'
import { NavLink } from 'react-router-dom'

const FirstPage = () => {
  return (
    <div>
        <h1>This is FirstPage</h1>
        <NavLink to='/next-page'>
            Go to NextPage
        </NavLink>
        </div>
  )
}

export default FirstPage