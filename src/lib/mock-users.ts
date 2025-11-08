import type { User } from './types';

export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'Rajesh Kumar',
    email: 'rajesh.k@example.com',
    role: 'resident',
    locality: 'Ward 5',
    avatarUrl: 'https://i.pravatar.cc/150?u=rajesh'
  },
  {
    id: 'user-2',
    name: 'Priya Sharma',
    email: 'priya.s@example.com',
    role: 'resident',
    locality: 'Ward 2',
    avatarUrl: 'https://i.pravatar.cc/150?u=priya'
  },
  {
    id: 'user-3',
    name: 'Anjali Mehta',
    email: 'anjali.m@example.com',
    role: 'resident',
    locality: 'Ward 8',
    avatarUrl: 'https://i.pravatar.cc/150?u=anjali'
  },
  {
    id: 'user-4',
    name: 'Sanjay Singh',
    email: 'sanjay.s@example.com',
    role: 'resident',
    locality: 'Ward 1',
    avatarUrl: 'https://i.pravatar.cc/150?u=sanjay'
  },
  {
    id: 'user-5',
    name: 'Deepak Gupta',
    email: 'deepak.g@example.com',
    role: 'resident',
    locality: 'Ward 3',
    avatarUrl: 'https://i.pravatar.cc/150?u=deepak'
  },
  {
    id: 'admin-1',
    name: 'Admin User',
    email: 'admin@locality.gov',
    role: 'admin',
    locality: 'All Wards',
    avatarUrl: 'https://i.pravatar.cc/150?u=admin'
  }
];

export default mockUsers;
