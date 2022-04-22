import React from 'react';

const ProfilePage = () => {
  return  <div className='min-h-screen flex justify-center items-center'>
        
  <form className='border gap-6 py-24 px-12 rounded border-gray-500 flex flex-col justify-center items-center'>
  <h1 className="text-center font-light uppercase text-gray-500 text-3xl">Profile</h1>
    <input
      type='text'
      placeholder='Old password'
      className='border rounded px-4 py-2'
    />
    <input
      type='text'
      placeholder='New password'
      className='border rounded px-4 py-2'
    />
    <button className='bg-black text-white transition hover:bg-white hover:text-black border-2 border-black rounded px-4 py-2'>
      Change    
    </button>
  </form>
</div>
};

export default ProfilePage;
