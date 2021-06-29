import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  

  const addActiveClass = (e) => {
    let target = e && e.target
    target.classList.toggle('active')
  }

  return (
    <header>
      <NavLink to='/popular' onClick={addActiveClass} >
        <span>Popular movies</span> 
      </NavLink>
      <NavLink to='upcoming' onClick={addActiveClass} >
        <span>Upcoming movies</span> 
      </NavLink>
      <NavLink to='/top_rated' onClick={addActiveClass} >
        <span>Top-rated movies</span> 
      </NavLink>
    </header>
  )
}

export default Header
