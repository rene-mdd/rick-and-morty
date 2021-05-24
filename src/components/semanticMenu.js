import { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../assets/perdoo-logo.svg';

export default function SemanticMenu() {
  const [activeItem, setItem] = useState('');

  const handleItemClick = (e, { name }) => setItem(name);

  return (
    <Menu stackable as='nav' size='large'>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        as='div'
        onClick={handleItemClick}
      >
        <Link to='/'>
          <img src={logo} alt='perdoo-logo' />
        </Link>
      </Menu.Item>
      <Menu.Item
        name='characters'
        active={activeItem === 'characters'}
        as='div'
        onClick={handleItemClick}
      >
        <Link to='/'>
          Characters
        </Link>
      </Menu.Item>
      <Menu.Item
        name='episodes'
        active={activeItem === 'episodes'}
        onClick={handleItemClick}
        as='div'
      >
        <Link to='/episodes'>
          Episodes
        </Link>
      </Menu.Item>
      <Menu.Item
        name='locations'
        active={activeItem === 'locations'}
        onClick={handleItemClick}
        as='div'
      >
        <Link to='/locations'>
          Locations
        </Link>
      </Menu.Item>
    </Menu>
  );
}
