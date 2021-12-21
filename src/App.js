import 'bootstrap/dist/css/bootstrap.min.css'
import { useState , useEffect} from 'react';
import './App.css';
import MovieList from "./Components/MovieList";
import MovielistHeading from './Components/MovieListHeading';
import SearchBox from './Components/SearchBox';

const  App =() => {
 
  const [movies,setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

 const getMovieRequest = async (searchValue) => {
 const url =`http://www.omdbapi.com/?s=${searchValue}&apikey=5e148f50`;


  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);
  
  if(responseJson.Search){
    setMovies(responseJson.Search);
  }
  

};



useEffect(() =>{
  getMovieRequest(searchValue);
}, [searchValue]);

  
 return (
   <div className='legend'>
    <div className = 'container-fluid movie-app'>
      <div className='header'>
        <div className='left'>
        <MovielistHeading heading="movies"/>
        </div>
        <div className='right'>
      
        <SearchBox  searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        
      </div>
      <div className="movies">
        <MovieList movies={movies} />
      </div>
     </div>
     </div>
  );
};

export default App;
