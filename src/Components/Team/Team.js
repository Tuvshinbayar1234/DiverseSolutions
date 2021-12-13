import React,{useEffect} from 'react'
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
import Aos from "aos";
import "aos/dist/aos.css";

const Team = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
          easing: "ease-in-shine",
        });
        Aos.refresh();
      }, []);

    return (
        <div className='w-full container mx-auto px-10'>
            <div className=''>
                <h1 className='text-4xl'>Манай хамт олон</h1>
            </div>
            <div className='flex justify-between items-center space-x-20 pt-10 py-4'>
                <div className=' p-5 rounded-3xl shadow-lg' data-aos="zoom-in-left">
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={eegii} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
                <div className=' p-5 rounded-3xl shadow-lg' data-aos="zoom-in-left">
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={bo} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
                <div className=' p-5 rounded-3xl shadow-lg' data-aos="zoom-in-left">
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={odko} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
                <div className=' p-5 rounded-3xl shadow-lg' data-aos="zoom-in-left">
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={anhaa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
                <div className=' p-5 rounded-3xl shadow-lg' data-aos="zoom-in-left">
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tulgaa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center space-x-20 py-4'>
                <div className=' p-5 rounded-3xl shadow-lg' data-aos="zoom-in-left">
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={buri} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
                <div className=' p-5 rounded-3xl shadow-lg' data-aos="zoom-in-left">
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={Bataa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
                <div className=' p-5 rounded-3xl shadow-lg' data-aos="zoom-in-left">
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={muugii} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
                <div className=' p-5 rounded-3xl shadow-lg' data-aos="zoom-in-left">
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tuku} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
                <div className=' p-5 rounded-3xl shadow-lg' data-aos="zoom-in-left">
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={amaraa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center space-x-20 py-4'>
                <div className=' p-5 rounded-3xl shadow-lg' data-aos="zoom-in-left">
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={zaya} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
                <div className=' p-5 rounded-3xl shadow-lg' data-aos="zoom-in-left">
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tseku} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
                <div className=' p-5 rounded-3xl shadow-lg' data-aos="zoom-in-left">
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tamiraa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
                <div className=' p-5 rounded-3xl shadow-lg opacity-0'>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tamiraa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
                <div className=' p-5 rounded-3xl shadow-lg opacity-0'>
                    <div className='flex justify-center items-center'>
                        <img className='w-36' alt='team' src={tamiraa} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-center text-2xl'>Г.Ууганбат</h1>
                        <h1 className='ml-1'>CEO</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;
