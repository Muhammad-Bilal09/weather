import './App.scss';
// import "bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// Components

import Header from './Components/Header'
import Footer from './Components/Footer'
// pages
import Weather from './Pages/weather'
function App() {
  return (
    <>
  <Header/>
   <main>
   <Weather/>
   </main>
  <Footer/>
    </>
  );
}

export default App;
