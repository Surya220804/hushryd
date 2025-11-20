import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { IonIcon } from "@ionic/react";
import { menu, close } from "ionicons/icons";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const Header = () => {
    const [navOpen,setNavOpen]=useState(false)
    const openMenu=()=>setNavOpen(true);
    const closeMenu=()=>setNavOpen(false);
    const location=useLocation()
    const isDriverPage = location.pathname === '/Fordrivers';
      const user = {
    name: 'John Doe',
    avatar:"https://i.pravatar.cc/300" ,
    icons:"v"

  };
  return (
    <div>
        <header>
            <div className="container">
                <nav>
                    <div className="nav-brand">
                        <a href="#">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                          <div className="menu-icons open" onClick={openMenu}>
                            <IonIcon icon={menu}/>
                          </div>
                        <div className={`nav-list ${navOpen?"active":""}`}>
                                <div className="menu-icons close"onClick={closeMenu}>
                                    <IonIcon icon={close}/>
                                </div>
                            <div className="nav-item"><li className='nav-link'>About</li></div>
                            <div className="nav-item"><li className='nav-link'>Careers</li></div>
                            <div className="nav-item"><li className='nav-link'>Safety features</li></div>
                            <div className="nav-item"><li className='nav-link'><NavLink to="/">How it Works</NavLink></li></div>
                            <div className="nav-item"><li className='nav-link'><NavLink to="/Fordrivers">For drivers</NavLink></li></div>
                             <div className="nav-cta mobile-buttons">
                            {isDriverPage ? (
                                <div className="user-info">
                                <img src={user.avatar} alt='' className="header-avatar" />
                                <span>{user.name}</span>
                                <span>{user.icons}</span>
                                </div>
                            ) : (
                                <>
                                <button className='btn'>Sign in</button>
                                <button className='btn btn-primary btn-header'>Post a Ride</button>
                                </>
                            )}
                        </div>
                        </div>
                        <div className="nav-cta desktop-buttons">
                            {isDriverPage ? (
                <div className="user-info">
                  <img src={user.avatar} alt={user.name} className="avatar" />
                  <span>{user.name}</span>
                </div>
              ) : (
                <>
                  <button className='btn'>Sign in</button>
                  <button className='btn btn-primary btn-header'>Post a Ride</button>
                </>
              )}
                        </div>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header