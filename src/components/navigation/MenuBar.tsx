import React from 'react';
import { BellFilled, HeartFilled, ShoppingFilled, HomeFilled } from '@ant-design/icons';
import '../../sass/MenuBar.scss';

const MenuBar = () => {
    return (
        <div className="menu-bar">
              <div className="menu-bar-wrapper">
              <div className="menu-item active">
                <HomeFilled style={{ fontSize: '24px', color: 'rgba(206, 121, 67, 1)' }} />
            </div>
            <div className="menu-item">
                <ShoppingFilled style={{ fontSize: '24px', color: 'rgba(74, 77, 82, 1)' }} />
            </div>
            <div className="menu-item">
                <HeartFilled style={{ fontSize: '24px', color: 'rgba(74, 77, 82, 1)' }} />
            </div>
            <div className="menu-item notification-item">
                <BellFilled style={{ fontSize: '24px', color: 'rgba(74, 77, 82, 1)' }} />
                <div className="notification-badge"></div>
            </div>

              </div>
         
        </div>
    );
};

export default MenuBar;
