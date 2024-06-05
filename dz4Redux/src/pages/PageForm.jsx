import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function PageForm() {
  const [name , setName] = useState('')
  const [age , setAge] = useState('')
  const [gender , setGender] = useState('')
  const [profile , setProfile] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleClick = (e)=> {
    e.preventDefault()
    dispatch({
      type: 'CHANGE_NAME',
      payload: name
    })
    dispatch({
      type: 'CHANGE_AGE',
      payload: age
    })
    dispatch({
      type: 'CHANGE_GENDER',
      payload: gender
    })
    dispatch({
      type: 'CHANGE_PROFILE',
      payload: profile
    })

    navigate('/date')

  }
  return (
    <div>
      <form>
        <input  type="text" placeholder='write name' onChange={e=> setName(e.target.value)}/>
        <input type="number" placeholder='write age'  onChange={e=> setAge(e.target.value)}/>
        <input type="text"  placeholder='write gender'  onChange={e=> setGender(e.target.value)}/>
        <input type="text"  placeholder='write profile'  onChange={e=> setProfile(e.target.value)}/>
        <button onClick={handleClick }>send</button>
      </form>
    </div>
  )
}

export default PageForm