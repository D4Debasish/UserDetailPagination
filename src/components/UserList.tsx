import React from 'react';
import { User } from '@/app/page';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {users.map((user, i) => (
        <div key={i} className="p-4 border rounded-lg shadow-lg bg-gray-800 text-white">
          <h2 className="text-2xl font-bold mb-2">{user.FirstNameLastName}</h2>
          <p className="text-xl font-semibold">{user.JobTitle}</p>
          <p className="text-lg mb-2">{user.Company}</p>
          <div className="mt-4">
            <p className="text-md"><span className="font-bold">ID:</span> {user.ID}</p>
            <p className="text-md"><span className="font-bold">EmailAddress:</span> {user.EmailAddress}</p>
            <p className="text-md"><span className="font-bold">Email:</span> {user.Email}</p>
            <p className="text-md"><span className="font-bold">Phone:</span> {user.Phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;