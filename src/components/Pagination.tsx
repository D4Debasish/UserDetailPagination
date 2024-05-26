import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        Previous
      </button>
      <span className=' px-5'>
        Page {currentPage +1}
      </span>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;