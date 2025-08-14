import { Header } from './components/Header';
import { ThemeProvider } from './components/ThemeProvider';
import { UserForm } from './components/UserForm';
import { UsersList } from './components/UsersList';

export function App() {
  return (
    <ThemeProvider>
      <div className='max-w-[500px] mx-auto mt-20'>
        <Header />

        <main className='mt-10 space-y-3'>
          <UserForm />
          <UsersList />
        </main>

      </div>
    </ThemeProvider>
  );
}
