import { useApp } from "../context/AppContext";

const NAV = [
  { label: "Accueil",      id: "home"     },
  { label: "Services",     id: "services" },
  { label: "À propos",    id: "about"    },
  { label: "Réalisations", id: "projects" },
  { label: "Processus",   id: "process"  },
  { label: "Contact",     id: "contact"  },
];

export default function Header() {
  const { activeSection, navigate, mobileNavOpen, setMobileNavOpen } = useApp();

  return (
    <>
      <header className="header">
        <div
          className="header__logo"
          onClick={() => navigate("home")}
          role="button"
          tabIndex={0}
        >
          Kahil<span>.dev</span>
        </div>

        <nav className="header__nav">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={(e) => { e.preventDefault(); navigate(item.id); }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a
            href="#contact"
            className="header__cta"
            onClick={(e) => { e.preventDefault(); navigate("contact"); }}
          >
            Me contacter →
          </a>
        </div>

        <button
          className={`mob-btn${mobileNavOpen ? " open" : ""}`}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </header>

      <nav className={`mob-nav${mobileNavOpen ? " open" : ""}`}>
        {NAV.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
            onClick={(e) => { e.preventDefault(); navigate(item.id); }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
