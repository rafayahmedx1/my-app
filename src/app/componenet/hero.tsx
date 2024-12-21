"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../../public/assets/hero.jpg"
import  Typewriter from "typewriter-effect"



const Hero = () => {
  return (
    <div>
      <section className="text-white body-font bg-fixed bg-cover bg-center custome-image">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
              I am
              <br className="hidden lg:inline-block " />
              <Typewriter
                options={{
                  strings: ['Web Developer', 'UX/UI designer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed justify-center">
            I am an intermediate-level web developer with experience in front-end development. I specialize in creating responsive and user-friendly websites for clients
            </p>
            <div className="flex justify-center ">
              <Link href={"#Contact"}>
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-200 hover:text-blue-500 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-25 h-auto w-[30rem]"
              alt="hero"
              src={logo}
            />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Hero
