import React from 'react';
import { 
    FaDribbbleSquare, 
    FaFacebookSquare, 
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} 
    from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Gowok.</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nobis repellendus tenetur dignissimos delectus magnam debitis ab. Doloribus.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
        <span className='hover:text-[#00df9a] cursor-pointer ease-in-out duration-300'><FaFacebookSquare size={30} /></span>
        <span className='hover:text-[#00df9a] cursor-pointer ease-in-out duration-300'><FaInstagram  size={30} /></span>
        <span className='hover:text-[#00df9a] cursor-pointer ease-in-out duration-300'><FaTwitterSquare  size={30} /></span>
        <span className='hover:text-[#00df9a] cursor-pointer ease-in-out duration-300'><FaGithubSquare  size={30} /></span>
        <span className='hover:text-[#00df9a] cursor-pointer ease-in-out duration-300'><FaDribbbleSquare  size={30} /></span>
        </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Analytics</li>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Marketing</li>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Commerce</li>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Insights</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Pricing</li>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Documentation</li>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Guides</li>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>API status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>About us</li>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Blog</li>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Jobs</li>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Press</li>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Careers</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Claim</li>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Policy</li>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Terms</li>
                <li className='py-2 text-sm hover:text-[#00df9a] hover:underline cursor-pointer'>Insights</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer