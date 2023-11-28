
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";
import { useEffect, useRef } from 'react';



function App() {
  const headerRef = useRef(null);
  const mainRef = useRef(null);
  useEffect(() => {

    console.log(headerRef,headerRef.current.clientHeight,headerRef.current.offsetHeight)
  if(mainRef.current && headerRef.current) mainRef.current.style.height = `calc(100vh - ${headerRef.current.clientHeight}px)`
  
   
  }, [])
  
  return (
    <div className="App">
      <Header customRef={headerRef}/>
      <main ref={mainRef} className='container font-text-2'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;