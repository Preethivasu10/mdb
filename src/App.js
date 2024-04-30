import './App.css';
//Bootstrap imported
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import DashboardApp from './Components/dashboard/dashboard';
// import Anly from './Components/DashRoute/Anly';
import DashboardApp from './Components/dashboard/dashboard';

function App() {
  return (
    <div className='app'>
     
   <DashboardApp/>
    </div>
  );
}

export default App;