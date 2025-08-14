import { Header } from './components/Header';
import { ThemeProvider } from './components/ThemeProvider';
import { UsersList } from './components/UsersList';

export function App() {
  return (
    <ThemeProvider>
      <div className='max-w-[500px] mx-auto mt-20'>
        <Header />

        <main className='mt-10'>
          <UsersList />
        </main>

      </div>
    </ThemeProvider>
  );
}
