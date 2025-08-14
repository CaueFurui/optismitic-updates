import { queryClient } from '@/lib/queryClient';
import { updateUser } from '@/services/updateUser';
import { useMutation } from '@tanstack/react-query';
import { USERS_QUERY_KEY } from './useUsers';

export function useUpdateUser() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: USERS_QUERY_KEY,
      });
    }
  });

  return {
    updateUser: mutateAsync,
    isLoading: isPending,
  };
}
