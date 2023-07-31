import React, { useEffect, useState } from "react";
import { getMovies } from "../../utils/utilities";
import ImageContainer from "../../atoms/ImageContainer";
import "./style.css";
import CategoryFilter from "../GetMovies/Category/MovieCategory";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCategoryName, setSelectedCategoryName] = useState("All");
  
  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      setMovies(movies.results);
    })();
  }, []);
  const handleCategoryChange = (categoryId, categoryName) => {
    setSelectedCategory(categoryId);
    setSelectedCategoryName(categoryName);
  };
  const filteredMovies =
    selectedCategory === "all"
      ? movies
      : movies.filter((movie) => movie.genre_ids.includes(parseInt(selectedCategory)));
  return (
    <div>
      {selectedCategoryName !== "All" && <h1 className="movieTwo">{selectedCategoryName}<span className="title"> Movies</span></h1>}
      <CategoryFilter
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <div className="movies">
        {filteredMovies.map((item) => (
          <ImageContainer props={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
