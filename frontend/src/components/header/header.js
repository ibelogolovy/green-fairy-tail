import React from 'react';
import { Link } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

import { useSelector } from "react-redux";

import './header.css';

import circle1 from '../../images/Lay1.png';
import circle2 from '../../images/Lay2.png';
import circle3 from '../../images/Lay3.png';
import mobileBack from './images/mobile_back.png';
import title from '../../images/Title.png';


const Header = () => {
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const showAboutCircle = useSelector(state => state.showState.showAboutCircle);

    return (
      <React.Fragment>
        {isDesktopOrLaptop && 
          <div className="about-info">
              <h2> О нас </h2>
              Мы супер-пупер компаний с 1000 летней историей. Занимаемся всеми видами растений, из любых питомников мира.
              {
                showAboutCircle ? (<div><br/><p>В наше стремительное время больших скоростей, высоких 
                  технологий, объемных информационных потоков мы все чаще ценим чистое, 
                  неподкупное, простое. Мы пытаемся вернуться к истокам – к природе. 
                  В суете дней мы стараемся вырвать хоть малые мгновения времени, 
                  чтобы прикоснуться к живому.Свой сад – что может быть лучше? 
                  Наша команда опытных специалистов в области озеленения, 
                  благоустройства и садового дизайна готова помочь в реализации Ваших «зеленых проектов»!</p><p>
                  В Садовом Центре компании GreenStrana Вы можете купить растения на любой вкус – 
                  хвойные и лиственные декоративные деревья и кустарники, в том числе крупномеры, 
                  многолетние и однолетние цветы, саженцы плодовых деревьев и кустарников, рассаду овощей. 
                  Здесь же Вы можете подобрать и сопутствующие садовые товары: рабочий инструмент для сада, 
                  плодородные грунты, удобрения, средства защиты для растений.
                  </p></div>):<Link to="/about"><p>Подробнее</p></Link>
              }
          </div>
          }

          {isDesktopOrLaptop && 
            <div className={showAboutCircle ? 'header-back expanded':'header-back'}>
              <div className="back-circle-1">
                  <img className="rot"  src={circle1} width="100%" alt="circle-1" />
              </div>
              <div className="back-circle-3">
                  <img className="rot" src={circle3} width="100%" alt="circle-3"/>
              </div>
              <div className="back-circle-2">
                  <img className="rot" src={circle2} width="100%" alt="circle-2"/>
              </div> 
            </div>}

            { isTabletOrMobile && 
            <div className='mobile-header-back'>
              <div className="mobile-back">
                  <img className="mobile-back-image" src={mobileBack} width="100%" alt="circle-1" />
              </div>
            </div>
            }
            
            <header>
              <Link to="/">
                <img src={title} width="60%" alt="Creen Fairy Tail"/>
              </Link>
               {isDesktopOrLaptop &&
                 <div className = "header-info">БЛАУГОУСТРОЙСТВО И ОЗЕЛЕНЕНИЕ | КРУПНОМЕРЫ | ЦВЕТЫ | ДЕРЕВЬЯ</div>
                }
            </header>
      </React.Fragment>
    );
};

export default Header;