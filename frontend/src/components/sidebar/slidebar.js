import React from "react";
import { bubble as Menu } from "react-burger-menu";

import './slidebar.css';

export default props => {
    const { menuItems } = props;
  return (
    // Pass on our props
    <Menu {...props}>
        {
            menuItems.map(({id, text,link})=>(
                <a key={id} className="menu-item" href={link}>
                        {text}
                </a>
            ))
        }
    </Menu>
  );
};