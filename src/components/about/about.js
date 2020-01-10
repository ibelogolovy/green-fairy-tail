import React from 'react';
import { Link } from 'react-router-dom';

import './about.css';


const About = () => {
  return (
        <div className="about-info">
            <h2> О нас </h2>
            Мы супер-пупер компаний с 1000 летней историей. Занимаемся всеми видами растений, из любых питомников мира.
            <Link to="/about"><p>Подробнее</p></Link>
        </div>
  );
};

export default About;