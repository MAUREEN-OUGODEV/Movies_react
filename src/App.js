
import './App.css';
import Navbar from './components/GetMovies/Navbar';
import MovieList from './components/GetMovies';
import Display from './components/GetMovies/Display';
import Footer from './components/GetMovies/Footer';
import GetSearch from'./components/GetMovies/GetSearch';
import { BrowserRouter ,Route,Routes} from 'react-dom/react';

function App() {
  return (

    <div className='body'>
    
     <BrowserRouter>
     <div>
     <Navbar/>
      <Routes>
        <Route path='/search/:query' element={GetSearch}/>
      </Routes>
      <Display/>
      <MovieList/>
      <Footer/>
     </div>
     </BrowserRouter>
      
      

    </div>
  );
}

export default App;
