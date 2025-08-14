import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
import { Switch } from './ui/switch';

const users = [
  {
    id: Math.random(),
    name: 'Rodrigo Costa',
    username: 'costarodrigo22',
  },
  {
    id: Math.random(),
    name: 'Guilherme Araújo',
    username: 'viieiiragui',
  },
  {
    id: Math.random(),
    name: 'Mateus Silva',
    username: 'maateusilva',
  },
  {
    id: Math.random(),
    name: 'Caue Furui',
    username: 'cauefurui',
  },
];

export function UsersList() {
  return (
    <div className='space-y-4'>
      {users.map(user => (
        <div key={user.id} className='border p-4 rounded-md flex items-center justify-between gap-4'>
          <div className='flex items-center gap-4'>
            <Avatar>
              <AvatarImage src={`https://github.com/${user.username}.png`} />
              <AvatarFallback>
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div>
              <strong className='text-lg block leading-4'>{user.name}</strong>
              <small className='text-muted-foreground'>@{user.username}</small>
            </div>
          </div>
          <Switch />
        </div>
      ))}
    </div>
  );
}
