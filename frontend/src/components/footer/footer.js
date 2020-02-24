import React from 'react';

import circle1 from '../../images/Lay1.png';
import circle2 from '../../images/Lay2.png';

import { useMediaQuery } from 'react-responsive';

import mobileBack from './images/mobile_back.png';

import './footer.css';

const Footer = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return  (
        <React.Fragment>
           
            {isDesktopOrLaptop && <div className="footer-back">
                <div className="back-circle2">
                    <img className="rot" src={circle2} width="100%" alt="circle2"/>
                </div>
                <div className="back-circle1">
                    <img className="rot"  src={circle1} width="100%" alt="circle1" />
                </div>
            </div>
            }
            {isDesktopOrLaptop && 
                <footer>
                <div className="contact" style={{ float:'right', marginRight: '17%', marginTop: '1%'}}>
                        <p>Контакты для связи: +7 (926) 438-07-59</p>
                        <p>Схема проезда</p>
                        <p>Социальные сети</p>
                    </div>
                <div className="company" style={{ float:'left', marginTop: '10%', marginLeft:'5%'}}>© ООО "ГринФайриТэйл", 2020 </div>
                </footer>
            }
            {isTabletOrMobile && 
                <footer className="mobile-footer-back">
                <div className="contact" style={{ marginLeft:'5%', marginTop: '1%'}}>
                        <p>Контакты для связи: +7 (926) 438-07-59</p>
                        <p>Схема проезда</p>
                        <p>Социальные сети</p>
                    </div>
                <div className="company" style={{ marginTop: '1%', marginLeft:'5%'}}>© ООО "ГринФайриТэйл", 2020 </div>
                <img className="mobile-back-image" src={mobileBack} width="100%" alt="circle-1" />
                </footer>
            }
            
        </React.Fragment>
        
    )
    
};

export default Footer;