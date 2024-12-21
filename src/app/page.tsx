import Image from "next/image";
import Navbar from "./componenet/nav";
import Hero from "./componenet/hero";
import Contact from "./componenet/Contac";
import Projects from "./componenet/projects";

import Skills from "./componenet/skills";
import About from "./componenet/about";


export default function Home(){
  return(

    <div>
  <Hero/>
  <Projects/>
  <Contact/>
  <About/>
   <Skills/>

  
    </div>
  )


}