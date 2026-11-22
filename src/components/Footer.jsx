import { Link } from "react-router-dom";
import DownloadCv from "./DownloadCv";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link className="logo" to="/">
            <span className="logo-mark">JC</span>
            <span className="logo-word">
              Jonathan<em>_</em>
            </span>
          </Link>
          <p>
            Tech Lead e desenvolvedor full stack. Produtos em Laravel, React, Node.js e React Native,
            da primeira tela até a operação.
          </p>
        </div>
        <div>
          <h2>Navegação</h2>
          <Link to="/#sobre">Sobre</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/#trajetoria">Trajetória</Link>
        </div>
        <div>
          <h2>Contato</h2>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span>{profile.location}</span>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} Jonathan Christian. Todos os direitos reservados.</span>
        <DownloadCv>Baixar currículo</DownloadCv>
      </div>
    </footer>
  );
}
