import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/#sobre" },
  { label: "Skills", to: "/#skills" },
  { label: "Projetos", to: "/projetos" },
  { label: "Trajetória", to: "/#trajetoria" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const active = (to) => {
    if (to === "/projetos") return location.pathname === "/projetos";
    if (to === "/") return location.pathname === "/" && !location.hash;
    return location.pathname === "/" && location.hash && to.endsWith(location.hash);
  };

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="wrap nav-bar">
        <Link className="logo" to="/" aria-label="Jonathan Christian, início">
          <span className="logo-photo">
            <img src="/jonathan.jpg" alt="" />
          </span>
          <span className="logo-word">
            Jonathan<em>_</em>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Seções">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className={active(link.to) ? "is-active" : ""}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <i />
          <i />
        </button>
      </div>

      <div className={`nav-drawer ${open ? "is-open" : ""}`} id="menu-mobile">
        {links.map((link) => (
          <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
