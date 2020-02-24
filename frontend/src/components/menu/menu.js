import React from 'react';
import { Link } from 'react-router-dom';



import { useMediaQuery } from 'react-responsive';


import './menu.css';


const Menu = ({ menuItems }) => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
        <nav className="menu-buttons">
          <ul>
            {
              isDesktopOrLaptop &&
              menuItems.map(({id, link, text}) => (
              <li key= {id}>
                <Link to={link}>
                  <div className="button current">{text}</div>
                </Link>
              </li>
              ))
            }
          </ul>
        </nav>
        
  );
};



export default Menu;