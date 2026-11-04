"use client"
import { Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { FiArrowRight, FiSearch } from "react-icons/fi";

const Searchfield = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSearch = (data) => {
        const {search} = data;
        redirect(`/search/${search}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleSearch)} className="w-full max-w-4xl mx-auto p-5">
                <div className="flex items-center gap-3 bg-white rounded-xl shadow-sm border border-stone-200/60 p-2 pl-4 focus-within:ring-2 focus-within:ring-stone-400 focus-within:border-transparent transition-all">
                    <FiSearch className="text-amber-800 text-xl shrink-0" />

                    <input
                        {...register("search")}
                        type="text"
                        placeholder="Search books by name"
                        className="w-full bg-transparent text-stone-700 placeholder-stone-400 focus:outline-none text-sm md:text-base"
                    />

                    <Button variant="outline"  type="submit" >
                        <span>Search</span>
                        <FiArrowRight className="text-base" />
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Searchfield;
