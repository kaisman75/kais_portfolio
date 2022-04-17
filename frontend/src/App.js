
import './App.scss';
import {About,Footer,Header,Works,Skills} from "./containers"
import{Navbar} from "./components"
function App() {
  return (
    <div className="app">
    <Navbar/>  
    <About/>
    <Header/>
    <Skills/>
    <Works/>
    <Footer/>
    </div>
  );
}

export default App;
