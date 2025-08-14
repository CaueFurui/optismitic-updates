import { sleep } from '@/lib/utils';
import type { IUser } from '@/types/IUsers';

export async function listUsers() {
  await sleep();
  const response = await fetch('http://localhost:3000/users');
  const body = await response.json();

  return body as IUser[];
}
