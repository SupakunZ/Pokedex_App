import React, { useEffect, useState } from 'react'
import "./button.css";
import NavBar from './NavBar';
import { handleResponse } from '@/utils/handleResponse';
import { Link } from 'react-router-dom';

export const MainPage = () => {
const [name, Setname] = useState('')
    
    return (
        <div>
            <div id='bg-ball' className='h-[45vh] flex items-center justify-center bg-red-600 border-solid border-b-[30px] border-black'>
                <div className='w-[90rem] h-[85vh] absolute top-[0px] rounded-3xl mt-[13vh] overflow-hidden bg-black border-solid border-[6px] border-black'>
                    <video id='video-bg' className='w-[100%] h-[100vh] object-cover' src="/src/assets/PikachuRun.mp4" autoPlay loop muted></video>
                </div>
                <div className='flex flex-col mt-[15%] z-10'>
                    <div className='flex mainpage text-5xl '>
                        <span><img id='pokeball' className='h-[3rem]' src="/images/pokeball.png" alt="" /></span>
                        <div className='ms-4'>FIND YOUR POKEMON !!</div>
                    </div>
                    <form className="max-w-md mx-auto flex items-center justify-center mt-5">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" onChange={() => {
                                Setname(document.querySelector('#default-search').value.toLowerCase())
                            }} className="block w-full w-[30rem] sm:w-[35rem] h-[4rem] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your Pokemon..." required />
                            <Link className='pixel2 text-white absolute end-2.5 bottom-[-2px] w-[5rem] h-[3rem] hover:scale-95 transition duration-200 ease-in-out' to={`/pokedex/detail/${name}`}>Search</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
