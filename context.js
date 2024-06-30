import { createContext, React, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const options = [
    {
      id: 1,
      value: "Light",
      label: "Light",
    },
    {
      id: 2,
      value: "Dark",
      label: "Dark",
    },
  ];
  const logos = [
    {
      id: 1,
      value: "Default",
      label: "Default",
    },
    {
      id: 2,
      value: "Covered",
      label: "Covered",
    },
  ];

  const [icon, setIcon] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("logo") || logos[0].value;
    }
    return logos[0].value;
  });

  const handleLogoSelection = (e) => {
    e.preventDefault();
    setIcon(e.target.value);
  };

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || options[0].value;
    }
    return options[0].value;
  });

  const handleThemeSelection = (e) => {
    e.preventDefault();
    setTheme(e.target.value);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      localStorage.setItem("icon", icon);
      const htmlElement = document.documentElement;

      if (theme === "Dark") {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    }
  }, [icon, theme]);

  return (
    <Context.Provider
      value={{
        theme,
        handleThemeSelection,
        options,
        logos,
        icon,
        handleLogoSelection,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
