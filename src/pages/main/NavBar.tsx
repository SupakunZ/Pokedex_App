import React from 'react'
import { HandleDark } from './Darkmode'
import "./button.css";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='mainpage'>
            <nav id='nav' className="border-gray-200 dark:bg-gray-900 z-10 relative shadow-xl ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    <Link to={'/pokedex'} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img id='logo' src="/images/pokedex-logo.svg" className="h-[100%] w-[10rem]" alt="" />
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center justify-center">
                        <label id='night-btn' onChange={HandleDark} className="inline-flex items-center cursor-pointer me-7">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <span className="me-3 text-sm font-medium text-gray-900 dark:text-gray-300"><img id='icon' className='w-[22px] h-[22px]' src="/images/sun.png" alt="" /></span>
                            <div className="relative w-11 h-7 bg-gray-200  rounded-xl peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-xl after:h-[20px] after:w-[20px] after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                        </label>
                        <button className="pixel2 hover:scale-95 transition duration-200 ease-in-out"><p>&#11208; Get Start</p></button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul id='box-nav' className=" flex flex-col font-medium text-2xl p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-whith md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <Link to={'/'}>
                                <a href="#" className="btn-nav block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                            </Link>
                            <Link to={'/pokedex'}>
                                <a href="#" className="btn-nav block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pokedex</a>
                            </Link>
                            <Link to={'/'}>
                                <a href="#" className="btn-nav block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </Link>
                            <Link to={'/'}>
                                <a href="#" className="btn-nav block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar