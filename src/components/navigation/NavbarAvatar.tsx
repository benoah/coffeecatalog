import React from 'react';
import '../../sass/NavigationBar.scss';

interface NavbarAvatarProps {
  imageUrl: string;
  alt: string;
}

const NavbarAvatar: React.FC<NavbarAvatarProps> = ({ imageUrl, alt }) => {
  return (
    <div className="navbar-avatar-wrapper">
      <img className="navbar-avatar-image" src={imageUrl} alt={alt} />
    </div>
  );
};

export default NavbarAvatar;
