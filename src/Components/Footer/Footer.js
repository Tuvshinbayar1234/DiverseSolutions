import React from 'react'
import logo from '../../assets/footerlogo.png'
import {FaInstagram , FaFacebookF , FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full py-5 px-10' style={{backgroundColor: '#1E1E1E'}}>
            <div className='container mx-auto flex space-x-24 items-center'>
                <div className=''>
                    <img src={logo} />
                </div>
                <div className='text-white text-xs'>
                    <div className='flex space-x-2'>
                        <h1>Имайл:</h1>
                        <span>info@dsolutions.mn</span>
                    </div>
                    <div className='py-5 flex space-x-5'>
                        <h1>Хаяг:</h1>
                        <span>Сүхбаатар дүүрэг, 8-р хороо, Централ цамхаг, 17 давхар Өдөр бүр</span>
                    </div>
                    <div className='flex space-x-5'>
                        <h1>Утас:</h1>
                        <span>+976 91951199</span>
                    </div>
                    <div className='flex text-xl space-x-5 py-5'>
                        <FaInstagram />
                        <FaFacebookF />
                        <FaLinkedinIn />
                        <FaGithub />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
