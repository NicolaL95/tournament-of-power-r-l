
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Outlet
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Header></Header>
    <main><Outlet></Outlet></main>
    <Footer></Footer>
    </div>
  );
}

export default App;
