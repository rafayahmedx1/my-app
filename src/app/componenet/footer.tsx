import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import logo from "../../../public/assets/logo.jpeg"


const Footer = () => {
  return (
    <div><footer className="text-gray-600 body-font bg-slate-200">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image src={logo} 
          alt='logo' 
           className="rounded-full ..."
            width={50} 
            height={50}/>
        <span className="ml-3 text-xl hover:text-gray-500 cursor-pointer">Rafay-Ahmed</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4  hover:text-red-600 cursor-pointer ">
        © 2024 My-Portfolio
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link target="blank" href='#'
        ><FaFacebook className='text-4xl hover:text-[blue]'/>
        </Link>
        
      </span>
    </div>
  </footer>
  </div>
  )
}

export default Footer
