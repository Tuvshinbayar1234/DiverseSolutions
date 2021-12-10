import React from 'react'
import Logo from '../../assets/Logo.png'

const Nav = () => {
    return (
        <div className='w-full py-8 px-10'>
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
    )
}

export default Nav;
