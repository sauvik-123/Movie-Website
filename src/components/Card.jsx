import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { useMovieContext } from '../context/MovieContext';

export default function Card({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const [animate, setAnimate] = useState(false);

  const handleClick = e => {
    e.preventDefault();

    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }

    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <div className="h-100 bg-[hsl(0,0%,80%)] w-70 flex flex-col items-start justify-center relative p-2 gap-y-1.5 shadow-[3px_3px_5px_rgba(255,255,255,0.5)] rounded-md group">
      <div className="flex lg:hidden group-hover:flex items-center justify-center absolute top-5 right-5 border rounded-full size-8 transition-all duration-200 border-black bg-white">
        <FaHeart
          onClick={handleClick}
          className={`cursor-pointer duration-300
            ${favorite ? 'text-red-500' : ''} 
            ${animate ? 'scale-125' : 'scale-100'}`}
        />
      </div>

      <div className="w-full h-80 overflow-hidden rounded-md">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full object-cover"
        />
      </div>

      <h2 className='font-medium'>
        Title : <span className="font-bold"> {movie.title} </span>
      </h2>

      <h3 className="font-medium">
        Release Date :
        <span className="font-bold"> {movie.release_date?.split('-')[0]} </span>
      </h3>
    </div>
  );
}
