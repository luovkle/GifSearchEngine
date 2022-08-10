import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onAddCategory }) => {
  const [category, setCategory] = useState("");

  const onChange = ({ target: { value } }) => {
    setCategory(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (category.trim().length === 0) return;
    onAddCategory(category.trim());
    setCategory("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChange}
        value={category}
        placeholder="Category"
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
