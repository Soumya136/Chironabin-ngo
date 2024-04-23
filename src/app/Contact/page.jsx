'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    // Handle form submission logic here
    // sendEmail(formData);
  };

  return (
    <div className="flex flex-wrap mt-6">
      <form onSubmit={handleSubmit} className="w-full md:w-1/2 px-4">
        <div className='mb-5'>
          <label htmlFor='name' className='block text-base font-medium text-black mb-3'>
            Full Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Full Name'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-base font-medium text-black mb-3'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='example@domain.com'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='message' className='block text-base font-medium text-black mb-3'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={4}
            placeholder='Type your message'
            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'
          >
            Submit
          </motion.button>
        </div>
      </form>

      <div className="w-full md:w-1/2 px-8 mt-6 border rounded-lg overflow-hidden shadow-md">
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className='mb-5'>
            <span>Here we are located</span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.1266150453034!2d87.88952677372436!3d22.536929279517054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a029f1faf4b3b47%3A0x1da1875f0c0546a5!2sChiranabin%20NGO!5e0!3m2!1sen!2sin!4v1713874898821!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
            <div className="mb-4">
              <header className="text-lg font-bold text-green-500">HELP US TO HELP YOU</header>
              <p className="text">Our humble appeal we need support to continue our services. If any kind hearted donor, different trustees, foundations or donor agencies wishes to offer us their kind support please send donation to Chiranabin, Vill.- Parbakshi, P.O.- Bakshi, P.S.- Joypur, Dist.- Howrah, West Bengal, Pin- 711 303, India. Donation made to Chiranabin shall qualify for deduction under section 80G of Income Tax 1961. For any further information please contact to Mr. Sukumar Sau, General Secretary. Mobile: +919733903617.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
