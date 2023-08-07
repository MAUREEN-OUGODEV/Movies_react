
import './App.css';
import Navbar from './components/GetMovies/Navbar';
import MovieList from './components/GetMovies';
import Display from './components/GetMovies/Display';
import Footer from './components/GetMovies/Footer';


function App() {
  return (

    <div className='body'>
    
      <Navbar/>
      <Display/>
      <MovieList/>
      <Footer/>

    </div>
  );
}

export default App;
