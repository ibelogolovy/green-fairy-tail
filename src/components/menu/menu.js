import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';


const Menu = () => {
  return (
        <div className="menu-buttons">
            <Link to="/about">
              <div className="button">Каталог</div>
            </Link>
            <Link to="/about">
              <div className="button">О нас</div>
            </Link>
            <Link to="/about">
              <div className="button">Контакты</div>
            </Link>
            <Link to="/about">
              <div className="button">Обратный звонок</div>
            </Link>
        </div>
  );
};

export default Menu;