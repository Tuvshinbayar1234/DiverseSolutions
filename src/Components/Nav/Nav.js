import React from 'react'
import Logo from '../../assets/Logo.png'
import Hamburger from './hamburger';
import './underline.css'

const Nav = () => {

        document.addEventListener('DOMContentLoaded', function() {
        // open
        const burger = document.querySelectorAll('.navbar-burger');
        const menu = document.querySelectorAll('.navbar-menu');
    
        if (burger.length && menu.length) {
            for (var i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
    
        // close
        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');
    
        if (close.length) {
            for (var i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
    
        //asd
    
        if (backdrop.length) {
            for (var i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
    });

    return (
        <div className='w-full py-5 px-5'>
            <div className="xl:hidden flex justify-between">
                <img src={Logo} />
                <button className="navbar-burger flex items-center text-black ">
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
            <div className='hidden xl:block'>
                <div className='container mx-auto flex items-center'>
                    <div className=' w-60'>
                        <img src={Logo} alt='logo'/>
                    </div>
                    <ul className='flex w-2/5 justify-between items-center'>
                        <a href='#'>
                            <li>
                                Бид
                            </li>
                        </a>
                        <a href='#'>
                            <li>
                                Бид юу хийдэг вэ
                            </li>
                        </a>
                        <a href='#'>
                            <li>
                                Манай хамт олон
                            </li>
                        </a>
                        <a href='#'>
                            <li>
                                Төслүүд
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <Hamburger />
        </div>
    )
}

export default Nav;
