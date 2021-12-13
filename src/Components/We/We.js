import React, {useEffect} from 'react'

import Aos from "aos";
import "aos/dist/aos.css";

const We = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
          easing: "ease-in-shine",
        });
        Aos.refresh();
      }, []);

    return (
        <div className='w-full py-20 px-10'>
            <div className='container mx-auto'>
                <div className='flex'>
                    <div className='w-2/4 flex flex-col justify-center items-center'>
                        <div className='text-center'>
                            <h1 className='text-9xl'>Бид ?</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center' data-aos="fade-right">
                            <h1 className='w-2/4'>Бидний түүх</h1>
                            <p className='origin-center transform rotate-1 py-5 w-2/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ea ullam id esse quibusdam commodi.</p>
                        </div>
                    </div>
                    <div className=' w-2/4'>
                        <div className='' data-aos="fade-left">
                            <h1>Бид хэн бэ</h1>
                            <p className=' origin-bottom-left transform -rotate-1 py-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odio ullam reiciendis necessitatibus rerum aut suscipit delectus nesciunt expedita, laborum maxime fugiat ipsum quasi deserunt ea perspiciatis harum. Possimus, molestias.</p>
                        </div>
                        <div className='' data-aos="fade-left">
                            <h1 className='origin-bottom-left transform -rotate-1 py-5'>Бид хэн бэ</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odio ullam reiciendis necessitatibus rerum aut suscipit delectus nesciunt expedita, laborum maxime fugiat ipsum quasi deserunt ea perspiciatis harum. Possimus, molestias.</p>
                        </div>
                        <div className='origin-center transform rotate-1 py-10' data-aos="fade-left">
                            <h1>Бид хэн бэ</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora odio ullam reiciendis necessitatibus rerum aut suscipit delectus nesciunt expedita, laborum maxime fugiat ipsum quasi deserunt ea perspiciatis harum. Possimus, molestias.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default We;
