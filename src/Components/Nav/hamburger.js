import React from "react";
// import './underline.css';
import Logo from '../../assets/Logo.png'
import './underline.css'

const Hamburger = () => {
    return(
        <div className="navbar-menu relative z-20 block sm:hidden">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto z-20">
                    <div className="flex items-center mb-8 z-20">
                        <a className="mr-auto text-3xl font-bold leading-none text-black" href="#">
                            <img className="" src={Logo} />
                        </a>
                        <button className="navbar-close z-20">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="z-20">
                        <ul className="z-20">
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Бид</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded" href="#feature">Бид юу хийдэг вэ?</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded" href="#service">Манай хамт олон</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded" href="#team">Төслүүд</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="mt-auto z-20">
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © 2021</span>
                        </p>
                    </div>
                </nav>
            </div>
    )
}

export default Hamburger;