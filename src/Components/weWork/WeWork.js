import React,{useEffect} from 'react'

import Aos from "aos";
import "aos/dist/aos.css";

const WeWork = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
          easing: "ease-in-shine",
        });
        Aos.refresh();
      }, []);

    return (
        <div className='w-full py-20'>
            <div className='container mx-auto'>
                <div className='flex justify-evenly'>
                    <span class="relative w-96 h-60 flex-col inline-flex justify-center border-black rounded-2xl border-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <h1 className='text-2xl w-3/12 mx-10'>Вебсайт хөгжүүлэлт</h1>
                        <p className=' text-sm w-3/4 mx-10 py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, error numquam aperiam ratione eos suscipit?</p>
                        <span class="flex absolute h-10 w-10 top-0 right-0 mt-52 -mr-5">
                            <span class="animate-ping absolute inline-flex h-full w-full bg-black opacity-75"></span>
                            <span class="relative inline-flex h-10 w-10 bg-black"></span>
                        </span>
                    </span>
                    <span class="relative w-96 h-60 flex-col inline-flex justify-center mt-36 border-black rounded-2xl border-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <h1 className='text-2xl w-3/12 mx-10'>Вебсайт хөгжүүлэлт</h1>
                        <p className=' text-sm w-3/4 mx-10 py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, error numquam aperiam ratione eos suscipit?</p>
                        <span class="flex absolute h-10 w-10 top-0 right-0 mt-52 -mr-5">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-10 w-10 bg-black"></span>
                        </span>
                    </span>
                    <span class="relative w-96 h-60 flex-col inline-flex justify-center border-black rounded-2xl border-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <h1 className='text-2xl w-3/12 mx-10'>Вебсайт хөгжүүлэлт</h1>
                        <p className=' text-sm w-3/4 mx-10 py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, error numquam aperiam ratione eos suscipit?</p>
                        <span class="flex absolute h-10 w-10 top-0 right-0 mt-52 -mr-5">
                            <span class="animate-ping absolute inline-flex h-full w-full bg-black opacity-75"></span>
                            <span class="relative inline-flex h-10 w-10 bg-black"></span>
                        </span>
                        <span class="flex absolute h-10 w-10 top-0 right-0 mt-52 -mr-5 origin-center transform rotate-45">
                            <span class="animate-ping absolute inline-flex h-full w-full bg-black opacity-75"></span>
                            <span class="relative inline-flex h-10 w-10 bg-black"></span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default WeWork
