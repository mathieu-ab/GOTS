import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <Link to="/mentions-legales">Mentions légales</Link>
      </div>
      <p>GOTS — Games On The Stage</p>
    </footer>
  );
}
