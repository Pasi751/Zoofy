import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../assets/logo1.png'
import NotificationIcon from './NotificationIcon'
import { FaBars, FaTimes } from 'react-icons/fa' 
import { useNavigate,useLocation} from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const setMenuOff = () => {
    setIsMenuOpen(false);
  };


  const handleLogout = () => {

    
    // Clear the token from local storage
    localStorage.removeItem('token');
    
    //goes to login page
    window.location.reload();
  };

  const isClassesPage = location.pathname === '/classes';

  return (
    <div className='navbar__container'>
      <div className="navbar__left__container">
        <div className="navbar__icon__container">
            <NavLink to="/schedule" activeClassName="active">
              <img src={Logo} alt="log" className='navbar__logo' />
              <h1 className="navbar__logo__text">Zoom Clone</h1>
            </NavLink>
            
        </div>
        <div className="navbar__link__container">
          <nav>
            <ul>
                <li>
                  <NavLink to="/schedule" activeClassName="active">Schedule</NavLink>
                  <NotificationIcon count={3} />
                </li>
                <li>
                  <NavLink to="/classes" activeClassName="active">Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/recordings" activeClassName="active">Recordings</NavLink>
                </li>
                <li>
                  <NavLink to="/settings" activeClassName="active">Settings</NavLink>
                </li>

                
                <li>
                  <NavLink to="/classes/download-transcript" activeClassName="active" className="size-s">Download Transcript</NavLink>
                </li>
                
                
                <li>
                  <NavLink to="/in-development" activeClassName="active" className="size-s">In development</NavLink>
                </li>
              
            </ul>
          </nav>
        </div>
      </div>
      <div className="navbar__right__container">
      <nav>
            <ul>
                <li>
                  <NavLink to="/profile" activeClassName="active">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="#" className={'navabr__logout__button'} onClick={handleLogout}>Log Out</NavLink>
                </li>
            </ul>
          </nav>
      </div>
      <div className="mobile__navbar">
        <div className='navbar__mobile__menu__icon hamburger-icon' onClick={setIsMenuOpen}>
        {isMenuOpen ? '' : <FaBars />}
        </div>
            {isMenuOpen && (
            
            <div className='mobile__navbar__container'>
            <div className='navbar__mobile__menu__icon close-icon' onClick={setMenuOff}>
            {isMenuOpen ? <FaTimes/> : ''}
            </div>
            <nav className='mobile-nav-links'>
              <ul>
                <li>
                  <NavLink to='/schedule' activeClassName='active' onClick={setMenuOff}>
                    Schedule
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/classes' activeClassName='active' onClick={setMenuOff}>
                    Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/recordings' activeClassName='active' onClick={setMenuOff}>
                    Recordings
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/settings' activeClassName='active' onClick={setMenuOff}>
                    Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/profile' activeClassName='active' onClick={setMenuOff}>
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to='#' className='logout-button' onClick={setMenuOff}>
                    Log Out
                  </NavLink>
                </li>
              </ul>
            </nav>
            </div>
          )}
        </div>

      </div>
  )
}

export default Navbar
