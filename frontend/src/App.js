import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Layout from './components/Layout/Layout';
//import TechPal from './containers/TechPal/TechPal';


function App() {
  return (
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
);

}

export default App;
