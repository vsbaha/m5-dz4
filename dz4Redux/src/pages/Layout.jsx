import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Link to={"/form"}>
      form
      </Link>
      <Link to="/date">
      Date
      </Link>
      <Outlet/>
      <footer>good</footer>

    </div>
  )
}

export default Layout