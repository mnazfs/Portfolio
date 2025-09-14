import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors ${
        isDark
          ? 'bg-gray-800 text-white hover:bg-gray-700'
          : 'bg-white text-gray-800 hover:bg-gray-100'
      }`}
      aria-label="Toggle dark mode"
    >
      {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
}