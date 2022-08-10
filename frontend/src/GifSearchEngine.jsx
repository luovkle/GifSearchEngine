import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifSearchEngine = () => {
  const [categories, setCategories] = useState(["pokemon"]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GifSearchEngine</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
