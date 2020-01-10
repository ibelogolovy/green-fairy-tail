import React from 'react';

import circle1 from '../../images/Lay1.png';
import circle2 from '../../images/Lay2.png';

import './footer.css';

const Footer = () => {
    return  (
        <React.Fragment>
            <div className="footer-back">
                <div className="back-circle2">
                    <img className="rot" src={circle2} width="100%" alt="circle2"/>
                </div>
                <div className="back-circle1">
                    <img className="rot"  src={circle1} width="100%" alt="circle1" />
                </div>
            </div>
            <footer>
                <div className="company">© ООО "ГринФайриТэйл", 2020 </div>
                <div className="contact">
                    <p>Контакты для связи: +7 (926) 438-07-59</p>
                    <p>Схема проезда</p>
                    <p>Социальные сети</p>
                </div>
            </footer>
        </React.Fragment>
        
    )
    
};

export default Footer;