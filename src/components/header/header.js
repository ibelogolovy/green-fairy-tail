import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

import circle1 from '../../images/Lay1.png';
import circle2 from '../../images/Lay2.png';
import circle3 from '../../images/Lay3.png';
import title from '../../images/Title.png';

const Header = ({orderTotal, orderCount}) => {
  return (
    <React.Fragment>
          <div className="header-back">
            <div className="back-circle1">
                <img className="rot"  src={circle1} width="100%" alt="circle1" />
            </div>
            <div className="back-circle3">
                <img className="rot" src={circle3} width="100%" alt="circle3"/>
            </div>
            <div className="back-circle2">
                <img className="rot" src={circle2} width="100%" alt="circle2"/>
            </div>
            
          </div>
          <header>
            <Link to="/">
              <img src={title} width="100%" alt="Creen Fairy Tail"/>
            </Link>
          </header>
    </React.Fragment>
  );
};



export default Header;