import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import logo from "../../../public/assets/logo.jpeg"



const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
    <header className="text-gray-600 body-font bg-slate-300">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={logo}
        alt='logo' 
        className="rounded-full max-w-10 h-10"
        />
          <span className="ml-3 text-xl">Rafay-Ahmed</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className ="mr-5 hover:text-red-600">Home</Link >
          <Link href={"#skills"} className="mr-5 hover:text-red-600">Skills</Link >
          <Link href={"#Project"} className="mr-5 hover:text-red-600">Projects</Link >
          <Link href={"#Contact"} className="mr-5 hover:text-red-600">Contact</Link >
          <Link href={"#About"} className="mr-5 hover:text-red-600">About</Link >
        </nav>
        <a href='/assets/RafayCv.pdf '>
        <button className=" inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 ">
          Download CV
          <FaFileDownload  className='text-lg ml-2' />

        </button>
        </a>
        
      </div>
    </header>
    </div>
  )
}

export default Navbar
