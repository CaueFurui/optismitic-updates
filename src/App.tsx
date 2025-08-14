import { ThemeProvider } from './components/ThemeProvider';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}
