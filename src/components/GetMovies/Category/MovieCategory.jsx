import React from "react";

const CategoryChange = ({ selectedCategory, handleCategoryChange }) => {
  const categories = [
    { id: "all", name: "All" },
    { id: "28", name: "Action" },
    { id: "12", name: "Adventure" },
    { id: "16", name: "Animation" },
    { id: "35", name: "Comedy" },
    { id: "80", name: "Crime" },
    { id: "99", name: "Documentary" },
    { id: "18", name: "Drama" },
    { id: "10751", name: "Family" },
    { id: "14", name: "Fantasy" },
    { id: "36", name: "History" },
    { id: "27", name: "Horror" },
    { id: "10402", name: "Music" },
    { id: "9648", name: "Mystery" },
    { id: "10749", name: "Romance" }
  ];

  return (
    <div className="movie-buttons">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryChange(category.id, category.name)}
          className={selectedCategory === category.id ? "active" : ""}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryChange;
