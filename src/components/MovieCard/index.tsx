import { motion } from "framer-motion";

const Movie = ({ movie }: { movie: any }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <h2>{movie.title}</h2>
      <img
        src={process.env.REACT_APP_IMAGE_URL + movie.backdrop_path}
        alt={movie.title}
      />
    </motion.div>
  );
};

export default Movie;
