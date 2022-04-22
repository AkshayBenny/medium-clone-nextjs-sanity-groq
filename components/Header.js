import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-black h-20 flex justify-end gap-4 w-full items-center '>
      <Link href='/login' passHref>
        <button className='shadow-white hover:shadow-md px-4 py-2 transition hover:text-gray-400 text-white uppercase font-light'>
          Login
        </button>
      </Link>
      <Link href='/profile' passHref>
        <button className='shadow-white hover:shadow-md text-white px-4 py-2 transition hover:text-gray-400 hover:border-gray-500  border-4 rounded border-white uppercase font-light'>
          Profile
        </button>
      </Link>

      <button className='shadow-white hover:shadow-md mr-12 hover:text-gray-400 transition px-4 py-2 text-white uppercase font-light'>
        Logout
      </button>
    </div>
  );
};

export default Header;
