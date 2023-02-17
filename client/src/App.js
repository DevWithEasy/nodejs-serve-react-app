import { useRoutes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Faq from './pages/Faq';
import Home from './pages/Home';

function App() {
  const route = useRoutes([
    {path : '/',
    element : <Home/>,
    children : [
      {
        index : true,
        element : <Home/>,
      },
      {
        path : '/about',
        element : <About/>,
      },
      {
        path : '/faq',
        element : <Faq/>,
      },
    ]
  }
  ])
  return route
}

export default App;
