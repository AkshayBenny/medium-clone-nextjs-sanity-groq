import React, { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <form className='border gap-6 py-24 px-12 rounded border-gray-500 flex flex-col justify-center items-center'>
        <h1 className='text-center font-light uppercase text-gray-500 text-3xl'>
          Login
        </h1>
        <input
          type='text'
          placeholder='Username'
          className='border rounded px-4 py-2'
        />
        <input
          type='text'
          placeholder='Password'
          className='border rounded px-4 py-2'
        />
        <button className='bg-black text-white transition hover:bg-white hover:text-black border-2 border-black rounded px-4 py-2'>
          Login
        </button>
        <div className='cursor-pointer'>
          <Link href='/new' passHref>
            <p>New user?</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
