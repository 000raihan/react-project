import React from 'react';
import { NavLink } from 'react-router-dom';

const NextPage = () => {
  return (
    <div> 
        <h1>This is  NextPage</h1>
        <NavLink to='/'>
            Go to First Page
        </NavLink>
        </div>
  )
}

export default NextPage