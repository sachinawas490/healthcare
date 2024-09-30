import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './Header';
function HomePage() {
  return (
      <div>
         <Header></Header>
          <Outlet/>
   </div>
  )
}

export default HomePage
