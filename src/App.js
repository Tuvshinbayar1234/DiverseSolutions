import React, {useEffect, useState} from "react";
import Nav from "./Components/Nav/Nav";
import Home from './assets/Home.png'
import We from "./Components/We/We";
import WeWork from "./Components/weWork/WeWork";
import Team from "./Components/Team/Team";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import AlertSuccess from "./Components/alert/Alert";
import AutoPlay from "./Components/Team/TeamSlider";
import TeamSlider from "./Components/Team/TeamSlider";
import ProjectAccordion from "./Components/Projects/ProjectAccordion";
import ProjectSlider from "./Components/Projects/ProjectSlider";

function App(){

  const SuccessData = {
    title: "Success",
    type: "success",
    text: "your message has been sent",
    footer: ""
  };

  return (
    <div className="bg-white w-full overflow-x-hidden"  style={{fontFamily: 'Magistral'}}>
      <Nav />
      <div className="container mx-auto py-28 hidden lg:block">
        <div className="flex">
          <div className="w-full ">
            <div className="">
              <h1 className="text-8xl leading-snug w-full">Simple Solutions For</h1>
            </div>
            <div className="flex flex-col justify-end w-4/5">
              <h1 className="text-8xl text-right">Complex</h1>
              <h1 className="text-8xl">Conundrum</h1>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <img src={Home} alt="Home" />
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="container block lg:hidden px-5">
        <div className="flex justify-evenly">
          <div className="w-full">
            <div className="">
              <h1 className="text-2xl leading-snug w-full">Simple Solutions For</h1>
            </div>
            <div className="flex flex-col justify-end w-full">
              <h1 className="text-2xl text-right">Complex</h1>
              <h1 className="text-2xl">Conundrum</h1>
            </div>
          </div>
          <div className="  w-6/12 flex justify-center">
            <img className="" src={Home} alt="Home" />
          </div>
        </div>
      </div>
      <We />
      <WeWork />
      <Team />
      <Projects />
      <ProjectSlider />
      <TeamSlider />
      <ProjectAccordion />
      <div className="container mx-auto py-20 hidden sm:block">
        <div className="">
          <h1 className="text-4xl text-center">Contact</h1>
        </div>
        <div className="flex flex-col justify-center items-center py-10">
          <div className="w-6/12 flex justify-evenly">
             <div className="flex flex-col">
               <h1>Нэр</h1>
               <input className="w-44 py-4 outline-none border-b" placeholder="Name" />
             </div>
             <div className="flex flex-col">
               <h1>E-mail</h1>
               <input className=" w-44 py-4 outline-none border-b" placeholder="E-mail" />
             </div>
             <div className="flex flex-col">
               <h1>Phone</h1>
               <input className=" w-44 py-4 outline-none border-b" placeholder="Phone" />
             </div>
          </div>
          <div className="w-6/12 py-5">
            <div className="flex justify-evenly space-x-6">
              <div className="flex flex-col">
                <h1>Message</h1>
                <input className="w-96 py-4 outline-none border-b" placeholder="Message" />
              </div>
              
              <div className="flex flex-col items-center justify-center">
              <AlertSuccess {...SuccessData}  />
             </div>
             
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="container mx-auto py-20 block sm:hidden">
        <div className="">
          <h1 className="text-4xl text-center">Contact</h1>
        </div>
        <div className="flex flex-col justify-start items-start mx-12 py-10">
          <div className="w-6/12 flex flex-col justify-start">
             <div className="flex flex-col">
               <h1>Нэр</h1>
               <input className="w-56 py-4 outline-none border-b" placeholder="Name" />
             </div>
             <div className="flex flex-col">
               <h1>E-mail</h1>
               <input className=" w-56 py-4 outline-none border-b" placeholder="E-mail" />
             </div>
             <div className="flex flex-col">
               <h1>Phone</h1>
               <input className=" w-56 py-4 outline-none border-b" placeholder="Phone" />
             </div>
             <div className="flex flex-col justify-evenly space-x-6">
              <div className="flex flex-col">
                <h1>Message</h1>
                <input className="w-56 py-4 outline-none border-b" placeholder="Message" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center py-5">
            <AlertSuccess {...SuccessData}  />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  
}

export default App;