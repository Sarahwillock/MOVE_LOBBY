import React from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'dark' | 'light';

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>(() => {
    const savedTheme = localStorage.getItem('move-theme');

    return savedTheme === 'light'
      ? 'light'
      : 'dark';
  });

  React.useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme
    );

    localStorage.setItem(
      'move-theme',
      theme
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === 'dark'
        ? 'light'
        : 'dark'
    );
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === 'dark'
          ? 'Ativar modo claro'
          : 'Ativar modo escuro'
      }
      title={
        theme === 'dark'
          ? 'Modo claro'
          : 'Modo escuro'
      }
      className="
        flex h-11 w-11
        items-center justify-center
        rounded-xl
        border border-blue-600/30
        bg-blue-600/10
        text-blue-500
        transition
        hover:bg-blue-600
        hover:text-white
        active:scale-95
      "
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
