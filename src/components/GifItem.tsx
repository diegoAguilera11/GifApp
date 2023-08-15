import { The480_WStill } from "../interfaces/gifInterfaces";

interface GifItemProps {
    id: string;
    title: string;
    url: The480_WStill;
}

export const GifItem = ({ id, title, url}: GifItemProps) => {

    return (
        <div className="flex flex-col justify-center items-center bg-red-400 px-8 py-6 rounded" key={id}>
            <li className='text-white py-2'>{title}</li>
            <img src={url.url} alt={title}/>
        </div>
    )
}