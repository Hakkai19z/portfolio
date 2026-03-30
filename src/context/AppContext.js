import { createContext, useContext, useState, useEffect, useRef } from "react";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export default function AppProvider({ children }) {
  const [activeSection, setActiveSection] = useState("home");
  const [accentColor, setAccentColor] = useState("#6366f1");
  const [projectModal, setProjectModal] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("accent-color");
    if (saved) {
      setAccentColor(saved);
      document.documentElement.style.setProperty("--accent", saved);
    } else {
      document.documentElement.style.setProperty("--accent", "#6366f1");
    }
  }, []);

  const navigate = (section) => {
    setActiveSection(section);
    setMobileNavOpen(false);
    const el = document.getElementById("content-area");
    if (el) el.scrollTop = 0;
  };

  const changeColor = (color) => {
    setAccentColor(color);
    localStorage.setItem("accent-color", color);
    document.documentElement.style.setProperty("--accent", color);
  };

  const showToast = (msg, type = "success") => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ msg, type });
    toastTimer.current = setTimeout(() => setToast(null), 4000);
  };

  return (
    <AppContext.Provider
      value={{
        activeSection,
        navigate,
        accentColor,
        changeColor,
        projectModal,
        setProjectModal,
        mobileNavOpen,
        setMobileNavOpen,
        toast,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
