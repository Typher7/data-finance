import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className='py-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, rerum. Eveniet fugit totam quisquam temporibus molestias nihil culpa deleniti similique in modi, iusto laudantium saepe itaque cum, quis tenetur ad!</p>
        <div className='flex md:w-[75%] my-6 justify-between'>
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
        </div>
        </div>
        <div className='lg:col-span-2 px-4 flex justify-between mt-6 '>
            <div>
            <h6 className='font-medium text-gray-400 '>Solutions</h6>
            <ul>
                <li py-2 text-sm>Analytics</li>
                <li py-2 text-sm>Marketing</li>
                <li py-2 text-sm>Commerce</li>
                <li py-2 text-sm>Insights</li>

            </ul>
            </div>

            <div>
            <h6 className='font-medium text-gray-400 '>Support</h6>
            <ul>
                <li py-2 text-sm>Pricing</li>
                <li py-2 text-sm>Documentation</li>
                <li py-2 text-sm>Guides</li>
                <li py-2 text-sm>API Status</li>

            </ul>
            </div>

            <div>
            <h6 className='font-medium text-gray-400 '>Company</h6>
            <ul>
                <li py-2 text-sm>About</li>
                <li py-2 text-sm>Blog</li>
                <li py-2 text-sm>Jobs</li>
                <li py-2 text-sm>Press</li>
                <li py-2 text-sm>Careers</li>

            </ul>
            </div>
 
            <div>
            <h6 className='font-medium text-gray-400 '>Legal</h6>
            <ul>
                <li py-2 text-sm>Claim</li>
                <li py-2 text-sm>Policy</li>
                <li py-2 text-sm>Terms</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer