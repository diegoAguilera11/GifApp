
import { useState } from 'react'
import { AddCategory } from './components';
import { GifGrid } from './components';


export const GifApp = () => {

    const [categories, setCategories] = useState<string[]>([]);


    const onAddCategory = (newCategory: string) => {

        if (categories.includes(newCategory)) return;
        console.log(newCategory);
        setCategories([newCategory, ...categories,]);
    }
    return (
        <div className="min-h-screen  px-10 py-20">
            {/* Title */}
            <h1 className=" font-bold mb-8 text-center text-5xl text-white">Gif App</h1>

            {/* Input */}
            <AddCategory onNewCategory={value => onAddCategory(value)} />

            {/* List Gif */}
            {
                categories.map((category) =>
                (
                    <GifGrid key={category} category={category} />
                ))
            }
        </div>
    );
}