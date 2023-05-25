import React, { useState } from 'react';

const DirectoryItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (

          <li className='w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-3'>Item 1</li>

  );
};

export default DirectoryItem;
