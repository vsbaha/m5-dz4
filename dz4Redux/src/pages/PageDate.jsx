import React from 'react'
import { useSelector } from 'react-redux'


function PageDate() {

  const user = useSelector (state => state)

  console.log(user);
  return (
    <h2>

      u name: {user.user.name},
      <hr />
      u age: {user.user.age},
      <hr />
      u profile: {user.profile},
      <hr />
      u gender: {user.user.gender}
      
    </h2>
  )
}

export default PageDate