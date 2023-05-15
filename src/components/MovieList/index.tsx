import { useEffect, useState } from "react";
import Filter from "../Filter";
import Movie from "../MovieCard";
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "../Pagination";

type MovieType = {
  id: number;
  genre_ids: number[];
  backdrop_path: string;
};

const MovieList = () => {
  const [moviesList, setMoviesList] = useState<MovieType[]>([]);
  const [filtered, setFiltered] = useState<MovieType[]>([]);
  const [genre, setGenre] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (page: number) => {
    const data = await fetch(
      `${process.env.REACT_APP_MOVIES_API}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    );
    const movies = await data.json();
    setMoviesList(movies.results);
    setTotalPages(movies.total_pages > 50 ? 50 : movies.total_pages);
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (genre === 0) setFiltered(moviesList);
    else
      setFiltered(
        moviesList.filter((movie) => {
          return movie.genre_ids.includes(genre);
        })
      );
  }, [moviesList, genre]);

  return (
    <div>
      <div className="flex justify-between mb-10">
        <Filter genre={genre} setGenre={setGenre} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.length > 0 &&
            filtered.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MovieList;
