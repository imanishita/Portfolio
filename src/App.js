import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from './Components/Footer';
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import Artwork from './Components/Artwork';
import Photography from './Components/Photography';
import Lottie from  "lottie-react";
import Sky from "./LottieFiles/Sky.json";
import HashLoader from "react-spinners/HashLoader";



function App() {
  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900)
  },[])  
  
  return (
    <>
      {Loading ? (
      <div className="loader"> 
        <HashLoader
          color={'#9067C6'}
          loading={true}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      ):(
      <div>
      
      <Lottie className="bg" animationData={Sky} loop={true} />  
      <Lottie className="bgtwo" animationData={Sky} loop={true} />   
      <Lottie className="bgtemp" animationData={Sky} loop={true} /> 

      <Nav/>
      <MoveToTop/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Artwork" element={<Artwork />} />
        <Route path="/Photography" element={<Photography />} />

      </Routes>
      
      <Footer/>
      </div>
      )}  
    </>
  );
}

export default App;
