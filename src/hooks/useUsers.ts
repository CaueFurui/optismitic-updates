import { listUsers } from '@/services/listUser';
import { useQuery } from '@tanstack/react-query';

export function useUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: listUsers
  });

  return {
    users: data ?? [],
    isLoading
  };
}
