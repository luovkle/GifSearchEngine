const apiKey = import.meta.env.VITE_API_KEY;
const limit = 10;
const baseUrl = "https://api.giphy.com/v1/gifs/search";

export const getGifs = async (category) => {
  const completeUrl = `${baseUrl}?api_key=${apiKey}&q=${category}&limit=${limit}`;
  const res = await fetch(completeUrl)
  const { data } = await res.json()
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return gifs;
};
