const Filter = ({ genre, setGenre }: { genre: number; setGenre: any }) => {
  return (
    <div className="filter-container">
      <button
        className={`${genre === 0 ? "active" : ""}`}
        onClick={() => setGenre(0)}
      >
        All
      </button>
      <button
        className={`${genre === 35 ? "active" : ""}`}
        onClick={() => setGenre(35)}
      >
        Comedy
      </button>
      <button
        className={`${genre === 28 ? "active" : ""}`}
        onClick={() => setGenre(28)}
      >
        Action
      </button>
    </div>
  );
};

export default Filter;
