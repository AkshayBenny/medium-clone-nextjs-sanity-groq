import React, { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = async (email, password) => {
    await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await createUser(email, password);
  };

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <form
        onSubmit={submitHandler}
        className='border gap-6 py-24 px-12 rounded border-gray-500 flex flex-col justify-center items-center'
      >
        <h1 className='text-center font-light uppercase text-gray-500 text-3xl'>
          Register
        </h1>
        <input
          required
          type='text'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder='Email'
          className='border rounded px-4 py-2'
        />
        {/* {message === 'User already exists' && (
          <p className='text-red-500'>User already exists</p>
        )} */}
        <input
          required
          type='text'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder='Password'
          className='border rounded px-4 py-2'
        />
        <button className='bg-black text-white transition hover:bg-white hover:text-black border-2 border-black rounded px-4 py-2'>
          Register
        </button>
        <div className='cursor-pointer'>
          <Link href='/login' passHref>
            <p>Existing user?</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
