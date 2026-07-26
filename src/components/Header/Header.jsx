import { NavLink } from 'react-router-dom';
import './Header.css';

const links = [
  { label: 'Accueil', path: '/' },
  { label: 'News', path: '/news' },
  { label: 'Évènements', path: '/evenements' },
  { label: 'À propos', path: '/apropos' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <nav className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}