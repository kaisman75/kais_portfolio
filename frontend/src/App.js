
import './App.scss';
import {About,Footer,Header,Works,Skills} from "./containers"
import{Navbar ,Social} from "./components"
function App() {
  return (
    <div className="app">
     <Navbar/> 
     <Social/> 
    <Header/>
    <About/>
    <Skills/>
    <Works/>
    <Footer/> 
    </div>
  );
}

export default App;
