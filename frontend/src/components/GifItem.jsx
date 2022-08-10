import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={url} alt={title} />
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};