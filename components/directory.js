import React, { useState } from 'react';
import DirectoryItem from './directory-items';
import Link from 'next/link';

const Directory = ({item}) => {
    console.log(item);

    const hasChildren = item.children && item.children.length > 0;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=''>
      <div className="pl-2 pr-2 pt-1 pb-1 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-3">
        <Link href={`/${item.id}`} className='w-full'>
        <button
          className=" hover:bg-gray-100 w-full h-8 flex items-center rounded-xl "
          onClick={toggleOpen}
        >
            
            <p className='text-xl font-medium text-black '>{item.id}</p>
            
        {item.children && item.children.length > 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-4 h-4 ml-auto mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-20'}`}
        >
            {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            )}
        </svg>
        )}
          
        </button>
        </Link>
      </div>
      {isOpen && hasChildren && (
        <ul className="pl-4">
            {item.children.map((child) => (
            <li key={child.id}>
              <Directory  item={child} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Directory;
