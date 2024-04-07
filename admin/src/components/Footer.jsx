import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='py-4'>
      <Link
        to='https://youtube.com/@CodeWaveWithAsante'
        target='_blank'
        className='text-gray-500'
      >
        CodewaWithAsante <span className='text-blue-500'>@2023</span>
      </Link>
    </footer>
  );
};

export default Footer;
