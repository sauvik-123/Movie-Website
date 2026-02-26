import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { searchMovies, getPopularMovies } from '../services/api';
import { RxCross2 } from 'react-icons/rx';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load Popular Movies on First Render
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const PopularMovies = await getPopularMovies();
        setMovies(PopularMovies);
      } catch (err) {
        console.log(err);
        setError('Failed to Load Movies...');
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  // Handle Search
  const handleSearch = async e => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError('Failed To Search Movies...');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[hsl(0,0%,90%)] min-h-screen mt-16 pt-5">
      {/* Search Bar */}
      <div className="flex gap-x-4 mx-auto items-center justify-center">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search for Movies..."
            className="px-3 py-2 active:border-black shadow-[2px_3px_5px_rgba(0,0,0,0.2),-2px_-3px_5px_rgba(0,0,0,0.2)] rounded-md font-medium w-60 md:w-90"
          />
          <RxCross2
            className="text-xl font-black absolute right-2 top-2.5"
            onClick={() => setSearchQuery('')}
          />
        </form>

        <button
          onClick={handleSearch}
          className="bg-red-500 text-white font-medium rounded-md h-10 w-20 hover:bg-red-600 active:scale-110 transition-all duration-300 cursor-pointer"
          type="button"
        >
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="font-semibold text-center py-5 text-red-600">
          {error}
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="font-semibold text-center py-5">Loading...</div>
      ) : movies.length === 0 ? (
        /* No Results */
        <div className="py-5 font-semibold text-center grid-cols-1 place-items-center">
          No Search Results Found...
        </div>
      ) : (
        /* Main Grid */
        <div className="px-2 mt-5 pb-10 grid grid-cols-1 place-items-center gap-y-6 gap-x-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
