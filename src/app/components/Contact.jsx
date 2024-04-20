'use client'
import React, { useState } from 'react';
//import { sendEmail } from '@/utils/send-email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   // sendEmail(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-5'>
        <label htmlFor='name' className='mb-3 block text-base font-medium text-black'>
          Full Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='email' className='mb-3 block text-base font-medium text-black'>
          Email Address
        </label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='message' className='mb-3 block text-base font-medium text-black'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
