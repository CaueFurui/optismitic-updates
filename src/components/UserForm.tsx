import { useCreateUser } from '@/hooks/useCreateUser';
import { Button } from './ui/button';
import { Input } from './ui/Input';
import { useState } from 'react';
import { toast } from 'sonner';

export function UserForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const { createUser, isLoading } = useCreateUser();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await createUser({
        name,
        username,
        blocked: false,
      });

      setName('');
      setUsername('');

      toast.success('Usuário criado com sucesso!');
    } catch {
      toast.error('Erro ao criar usuário. Tente novamente.');
    }


  }

  return (
    <form action='' className='bg-muted p-4 rounded-md' onSubmit={handleSubmit}>
      <div className='flex gap-3'>
        <Input
          placeholder="Nome do usuário"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
        />
        <Input
          placeholder="@ no GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <Button className='mt-3 w-full' type="submit" disabled={isLoading}>Salvar</Button>
    </form>
  );
}
