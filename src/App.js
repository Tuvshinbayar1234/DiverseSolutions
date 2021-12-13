import React, {useEffect, useState} from "react";
import Nav from "./Components/Nav/Nav";
import Home from './assets/Home.png'
import We from "./Components/We/We";
import WeWork from "./Components/weWork/WeWork";
import Team from "./Components/Team/Team";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import AlertSuccess from "./Components/alert/Alert";

function App(){

  const SuccessData = {
    title: "Success",
    type: "success",
    text: "Your work has been saved.",
    footer: ""
  };

  return (
    <div className="bg-white w-full overflow-x-hidden"  style={{fontFamily: 'Magistral'}}>
      <Nav />
      <div className="container mx-auto py-28">
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
      <We />
      <WeWork />
      <Team />
      <Projects />
      <div className="container mx-auto py-20">
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
      
      <Footer />
    </div>
  );
  
}

export default App;

 {/* <div className="">
                <div className="">
                  <h1>Your Name</h1>
                  <input className=" w-44 py-4 outline-none border-b" placeholder="Name" />
                </div>  
                <div className="py-4">
                  <h1>Email</h1>
                  <input className=" w-44 py-4 outline-none border-b" placeholder="Name" />
                </div>            
              </div>
              <div className="">
              <div className="py-4">
                  <h1>Email</h1>
                  <input className=" w-44 py-4 outline-none border-b" placeholder="Name" />
                </div> 
              </div> */}
              {/* <div className="">
                <div className="w-full py-4">
                  <h1>Message</h1>
                  <input className="py-4 w-11/12 outline-none border-b" placeholder="Name" />
                </div>  
                <div className="w-full py-4">
                  <div className="py-4 rounded-lg w-56 text-center text-white hover:bg-blue-400 bg-blue-500 cursor-pointer">
                    <AlertSuccess {...SuccessData} />
                  </div>
                </div> 
              </div> */}