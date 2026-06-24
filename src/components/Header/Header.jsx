import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const links = [
  { label: 'Accueil', path: '/' },
  { label: 'News', path: '/news' },
  { label: 'Évènements', path: '/evenements' },
  { label: 'À propos', path: '/apropos' },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="header-inner">
        <nav className="nav-links">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
