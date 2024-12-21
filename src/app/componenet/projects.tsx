import React from 'react'
import p1 from "../../../public/assets/p1.png"
import Image from 'next/image'
const Projects = () => {
  return (
   <div id='Project'>
    <section className="text-gray-600 body-font">
   <div className="container px-5 py-24 mx-auto">
     <div className="flex flex-col text-center w-full mb-20">
       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
         My Projects
       </h1>
      
     </div>
     {/*project */}
     <div className="flex flex-wrap -m-1">
       <div className="lg:w-1/3  p-6 w-{100} cursor-pointer">
         <div className="flex relative">
           <Image
             alt="p1"
             className="absolute inset-0 w-full h-full object-cover object-center"
             src={p1}
           />
           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
             <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
               My project
             </h2>
             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
               Shooting Stars
             </h1>
             <p className="leading-relaxed">
               This is the project which I've created.
             </p>
           </div>
         </div>
       </div>
       </div>
       </div>
   
 </section>
 </div>
  )
}

export default Projects
