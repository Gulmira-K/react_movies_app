import React, {useEffect} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './Header.scss'

const Header = ({path}) => {
  const popular = React.createRef()
  const history = useHistory()

  if (path === '/') {
    history.push('/popular')
  }

  useEffect(() => {
    popular.current.classList.add('active')
  })

  const addActiveClass = (e) => {
    
    if (popular.current.classList.contains('active')) {
      popular.current.classList.remove('active')
    }

    let target = e && e.target
    target.classList.toggle('active')
  }

  return (
    <header>
      <NavLink to='/popular' onClick={addActiveClass} ref={popular}>
        Popular movies
      </NavLink>
      <NavLink to='/upcoming' onClick={addActiveClass} >
        Upcoming movies
      </NavLink>
      <NavLink to='/top_rated' onClick={addActiveClass} >
        Top-rated movies
      </NavLink>
    </header>
  )
}

export default Header
