
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";
import { useEffect, useRef } from 'react';



function App() {
  const headerRef = useRef(null);
  const mainRef = useRef(null);
  useEffect(() => {
  if(mainRef.current && headerRef.current) mainRef.current.style.height = `1px`
  
   
  }, [])
  
  return (
    <div className="App">
      <Header customref={headerRef}/>
      <main ref={mainRef} className='container'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;