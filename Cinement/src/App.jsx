
import './index.css';
import  { Footer } from './components/fotter.jsx';
import { Header } from './components/Header.jsx';

import AllRoutes from './routes/AllRoutes.jsx';


function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
