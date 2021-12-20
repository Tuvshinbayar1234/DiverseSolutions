import React, { useRef, useState } from "react";
import Bataa from '../../assets/bataa.png'
import amaraa from '../../assets/amaraa.png'
import bo from '../../assets/bo.png'
import anhaa from '../../assets/anhaa.png'
import muugii from '../../assets/muugii.png'
import odko from '../../assets/odko.png'
import zaya from '../../assets/zaya.png'
import tuku from '../../assets/tuku.png'
import tulgaa from '../../assets/tulgaa.png'
import tamiraa from '../../assets/tamiraa.png'
import buri from '../../assets/buri.png'
import eegii from '../../assets/eegii.png'
import tseku from '../../assets/tseku.png'

const Team = () => {

    return (
        <div className='w-full container mx-auto px-5'>
            <div className='hidden sm:block'>
                <h1 id="Team" className='text-4xl' style={{fontFamily: 'Magistral'}}>Манай хамт олон</h1>
            </div>
            <div className="hidden lg:block w-full">
            <div className='flex justify-between items-center pt-10 py-4'>
                <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={eegii} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center w-full text-2xl pt-1'>М. Энх-Амгалан</h1>
                        <h1 className='text-center w-full'>CEO</h1>
                    </div>
                </div>
                <div className='  w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={bo} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center w-full text-2xl pt-1'>М. Болортоль</h1>
                        <h1 className='text-center w-full'>COO</h1>
                    </div>
                </div>
                <div className='  w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={odko} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center w-full text-2xl pt-1'>Г. Мөнход</h1>
                        <h1 className='text-center w-full'>CTO</h1>
                    </div>
                </div>
                <div className='  w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={anhaa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='w-full text-center text-2xl pt-1'>Д. Анхбаясгалан</h1>
                        <h1 className='text-center w-full'>Advisor</h1>
                    </div>
                </div>
                <div className='  w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tulgaa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='w-full text-center text-2xl pt-1'>Б. Баттулга</h1>
                        <h1 className='w-full text-center'>FullStack</h1>
                    </div>
                </div>
            </div>
            </div>
            <div className="hidden lg:block w-full">
            <div className='flex justify-between items-center py-4'>
                <div className='  w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={buri} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>Г. Ууганбат</h1>
                        <h1 className='text-center'>Senior Developer</h1>
                    </div>
                </div>
                <div className='  w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={Bataa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>Б. Бүри</h1>
                        <h1 className='text-center'>DevOps</h1>
                    </div>
                </div>
                <div className='  w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={muugii} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>Т. Бумцэнд</h1>
                        <h1 className='text-center'>Designer</h1>
                    </div>
                </div>
                <div className='  w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tuku} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>О. Мөнхзориг</h1>
                        <h1 className='text-center'>Developer</h1>
                    </div>
                </div>
                <div className='  w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={amaraa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>О. Түвшинбаяр</h1>
                        <h1 className='text-center'>Developer</h1>
                    </div>
                </div>
            </div>
            </div>
            <div className="hidden lg:block w-full">
            <div className='flex justify-between items-center py-4'>
                <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={zaya} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>Г. Амарзаяа</h1>
                        <h1 className='text-center'>Secretary</h1>
                    </div>
                </div>
                <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tseku} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>А. Амартүвшин</h1>
                        <h1 className='text-center'>CEO</h1>
                    </div>
                </div>
                <div className=' w-48 h-64 rounded-3xl shadow-lg opacity-0'>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tamiraa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>Г.Ууганбат</h1>
                        <h1 className='text-center'>CEO</h1>
                    </div>
                </div>
                <div className=' w-48 h-64 rounded-3xl shadow-lg opacity-0'>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tamiraa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>Г.Ууганбат</h1>
                        <h1 className='text-center'>CEO</h1>
                    </div>
                </div>
                <div className=' w-48 h-64 rounded-3xl shadow-lg opacity-0'>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tamiraa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>Г.Ууганбат</h1>
                        <h1 className='text-center'>CEO</h1>
                    </div>
                </div>
            </div>
            
            </div>
            <div className="hidden sm:block lg:hidden">
            <div className='flex justify-between space-x-5 items-center py-4'>
                <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={zaya} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>М. Эхн-Амгалан</h1>
                        <h1 className='text-center'>CEO</h1>
                    </div>
                </div>
                <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tseku} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>М. Болортоль</h1>
                        <h1 className='text-center'>COO</h1>
                    </div>
                </div>
                <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tamiraa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>Г. Мөнход</h1>
                        <h1 className='text-center'>CTO</h1>
                    </div>
                </div>
               
            </div>
            </div>
            <div className="hidden sm:block lg:hidden">
            <div className='flex justify-between space-x-5 items-center py-4'>
                <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={zaya} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>Д. Анхбаясгалан</h1>
                        <h1 className='text-center'>Advisor</h1>
                    </div>
                </div>
                <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tseku} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>Б. Баттулга</h1>
                        <h1 className='text-center'>FullStack</h1>
                    </div>
                </div>
                <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tamiraa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>Б. Бүри</h1>
                        <h1 className='text-center'>DevOps</h1>
                    </div>
                </div>
               
              
            </div>
            </div>
            <div className="hidden sm:block lg:hidden">
            <div className='flex justify-between space-x-5 items-center py-4'>
                
                <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tseku} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>Г. Ууганбат</h1>
                        <h1 className='text-center'>Senior Developer</h1>
                    </div>
                </div>
                <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tamiraa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>О. Мөнхзориг</h1>
                        <h1 className='text-center'>Developer</h1>
                    </div>
                </div>
                <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tamiraa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl pt-1'>О. Түвшинбаяр</h1>
                        <h1 className='text-center'>Developer</h1>
                    </div>
                </div>
               
            </div>
            <div className="hidden sm:block lg:hidden">
                <div className='flex justify-between space-x-5 items-center py-4'>
                    <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                        <div className='flex justify-center items-center'>
                            <img className='w-36' alt='team' src={zaya} />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h1 className='text-center text-2xl pt-1'>Ж. Амарзаяа</h1>
                            <h1 className='text-center'>Secretary</h1>
                        </div>
                    </div>
                    <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                        <div className='flex justify-center items-center'>
                            <img className='w-36' alt='team' src={tseku} />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h1 className='text-center text-2xl pt-1'>А. Амартүвшин</h1>
                            <h1 className='text-center'>BlockChain Advisor</h1>
                        </div>
                    </div>
                    <div className=' w-48 h-64 rounded-3xl shadow-lg' style={{background: '#FBFBFB'}}>
                        <div className='flex justify-center items-center'>
                            <img className='w-36' alt='team' src={tamiraa} />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h1 className='text-center text-2xl pt-1'>Т. Бумцэнд</h1>
                            <h1 className='text-center'>Designer</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default Team;
