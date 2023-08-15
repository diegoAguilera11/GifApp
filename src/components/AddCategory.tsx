import { useState, ChangeEvent, FormEvent } from "react";

interface AddCategoryProps {
    onNewCategory: (input: string) => void;
}

export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {

    const [inputValue, setInputValue] = useState<string>('');


    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const currentValue = event.target.value;
        setInputValue(currentValue);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue);
        setInputValue('');
    }
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-red-500 rounded-lg blur opacity-0.5">
                </div>
                <input
                    value={inputValue}
                    onChange={changeInput}
                    type="text"
                    placeholder="Buscar Gifs"
                    className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"                    // className="absolute inset-0 bg-pink-500"
                />
            </div>
        </form>
    )
}