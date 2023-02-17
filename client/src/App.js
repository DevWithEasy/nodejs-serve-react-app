import { useRoutes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Faq from './pages/Faq';
import Home from './pages/Home';

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/faq",
      element: <Faq />
    },
  ]);
  return routes;
}

export default App;
