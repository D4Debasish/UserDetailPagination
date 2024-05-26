'use client';
import { useState, useEffect } from 'react';
import UserList from '@/components/UserList';
import Pagination from '@/components/Pagination';

export interface User {
  ID: string;
  JobTitle: string;
  EmailAddress: string;
  FirstNameLastName: string;
  Email: string;
  Phone: string;
  Company: string;
}

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async (page: number) => {
      const response = await fetch(`https://give-me-users-forever.vercel.app/api/users/${page*10}/next`);
      const data = await response.json();
      const usersArr = data.users.slice(0, 10)
      setUsers(usersArr);
      setTotalPages(data.totalPages);
      console.log("addwdwf", totalPages)
    };

    fetchUsers(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container shadow-md bg-white mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">User Details</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <UserList users={users} />
      </div>
      <div className="flex justify-center mt-6">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Home;
