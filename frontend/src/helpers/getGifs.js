export const getGifs = async (category) => {
  const url = `http://127.0.0.1:8000/${category}`;
  const res = await fetch(url);
  const data = await res.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
