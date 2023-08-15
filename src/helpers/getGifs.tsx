import { API_KEY } from '../api';
import { GIFInterface, MyGif } from '../interfaces/gifInterfaces';

export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=15`;
    const response = await fetch(url);
    const { data }: GIFInterface = await response.json();

    const gifs: MyGif[] = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium
    }))
    return gifs;
}