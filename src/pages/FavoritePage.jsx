import { useMovieContext } from '../context/MovieContext';
import Card from '../components/Card';

export default function FavoritePage() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="mt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-center text-2xl font-semibold">No Favorite Movies Yet</h1>
          <p className="text-gray-500 text-sm mt-2">
            Start adding movies and they will appear here!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <h2 className="text-center font-semibold text-xl">Your Favorites</h2>
      <div className="mt-5 pb-5 grid grid-cols-1 place-items-center gap-y-6 gap-x-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-2">
        {favorites.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
