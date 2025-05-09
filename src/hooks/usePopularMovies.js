import {api_options} from '../utils/constants';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addPopularMovies} from '../utils/moviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
  {
    const getPopularMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', api_options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    console.log(json.results);
    };

  useEffect(()=>{
    getPopularMovies();
  },[]);
  }
}
export default usePopularMovies;