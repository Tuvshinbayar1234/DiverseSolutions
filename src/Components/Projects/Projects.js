import React ,{useState} from 'react'
import Project1 from '../../assets/project.png'
import White from '../../assets/whitelogo.png'
import {FaAngleRight} from 'react-icons/fa'
import styles from './style.module.css'

const Projects = () => {

    const [isOpen , setIsOpen] = useState(false)
    const [isOpenBot , setIsOpenBot] = useState(false)
    
    const [selectedProject, setSelectedProject] = useState(null)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const showTopAlert = (asset) => {
        let selected = projects.filter(single => single.code == asset) || []
        setSelectedProject(selected)
        setIsOpen(true);
    };

    const showBottomAlert = (asset) => {
        let selected = products.filter(single => single.code == asset) || []
        setSelectedProduct(selected)
        setIsOpenBot(true);
    };

    const closedAlert = () => setIsOpen(false)
    const closedBottomAlert = () => setIsOpenBot(false)

    const projects = [
         {
            id: 1,
            name: 'stablecoin.com',
            code: 'MONT',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maxime.',
            development: 'Development',
            development1: 'Code',
            development2: 'FrontEnd',
            development3: 'BackEnd',
            development4: 'Design',
            development5: 'Design',
            development6: 'Design',
            development7: 'Design',
            development8: 'Design',
            img: White
        },
        {
            id: 2,
            name: 'dax.com',
            code: 'ARDX',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maxime.',
            development: 'Development',
            development1: 'Code',
            development2: 'FrontEnd',
            development3: 'BackEnd',
            development4: 'Design',
            development5: 'Design',
            development6: 'Design',
            development7: 'Design',
            development8: 'Design',
            img: White
        },
        {
            id: 3,
            name: 'ardmoney.com',
            code: 'ARDM',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maxime.',
            development: 'Development',
            development1: 'Code',
            development2: 'FrontEnd',
            development3: 'BackEnd',
            development4: 'Design',
            development5: 'Design',
            development6: 'Design',
            development7: 'Design',
            development8: 'Design',
            img: White
        },
    ]

    const products = [
        {
           id: 1,
           name: 'stablecoin.com',
           code: 'MONT',
           description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maxime.',
           development: 'Development',
           development1: 'Code',
           development2: 'FrontEnd',
           development3: 'BackEnd',
           development4: 'Design',
           development5: 'Design',
           development6: 'Design',
           development7: 'Design',
           development8: 'Design',
           img: White
       },
       {
           id: 2,
           name: 'dax.com',
           code: 'ARDX',
           description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maxime.',
           development: 'Development',
           development1: 'Code',
           development2: 'FrontEnd',
           development3: 'BackEnd',
           development4: 'Design',
           development5: 'Design',
           development6: 'Design',
           development7: 'Design',
           development8: 'Design',
           img: White
       },
       {
           id: 3,
           name: 'ardmoney.com',
           code: 'ARDM',
           description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maxime.',
           development: 'Development',
           development1: 'Code',
           development2: 'FrontEnd',
           development3: 'BackEnd',
           development4: 'Design',
           development5: 'Design',
           development6: 'Design',
           development7: 'Design',
           development8: 'Design',
           img: White
       },
   ]
   

    const imageOfProducts = [
        {
            id: 120,
            code: "ARDX",
            img: Project1
        },
        {
            id: 121,
            code: "MONT",
            img: Project1
        },
        {
            id: 122,
            code: "ARDM",
            img: Project1
        },
      
    ]

    const imageProducts = [
        {
            id: 120,
            code: "ARDX",
            img: Project1
        },
        {
            id: 121,
            code: "MONT",
            img: Project1
        },
        {
            id: 122,
            code: "ARDM",
            img: Project1
        },
      
    ]

    return (
        <div className='w-full py-20'>
            <div className='container mx-auto px-10'>
                <div className=''>
                    <h1 className='text-4xl'>Төслүүд</h1>
                </div>
                <div className='flex'>
                    <div className='flex'>
                        <div className='w-2/4'>
                            <div className='py-10'>
                                <h1>Бид хэн бэ</h1>
                                <p className='w-4/5 origin-bottom-left transform -rotate-1 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis alias, minima sed mollitia nihil magni repellat hic! Enim, voluptatem.</p>
                            </div>
                            <div className=''>
                                <h1>Бид хэн бэ</h1>
                                <p className='w-4/5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda reprehenderit velit totam quasi autem rerum sapiente quibusdam ab, ipsum ratione maxime magni eligendi quas, esse et cumque dolorem eaque voluptates.</p>
                                <p className='w-4/5 py-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda reprehenderit velit totam quasi autem rerum sapiente quibusdam ab, ipsum ratione maxime magni eligendi quas, esse et cumque dolorem eaque voluptates.</p>
                            </div>
                        </div>
                        <div className='flex flex-col relative w-2/4'>
                            <div className='flex justify-around space-x-5'>
                                {imageOfProducts.length > 0 && imageOfProducts.map(single => (
                                    <div onClick={() => showTopAlert(single.code)} className=' cursor-pointer w-60 h-52 shadow-lg rounded-xl flex justify-center items-center'>
                                        <img src={single.img} alt={single.code} />
                                        <FaAngleRight />
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-around space-x-5 py-4'>
                                {imageProducts.length > 0 && imageProducts.map(single => (
                                    <div onClick={() => showBottomAlert(single.code)} className='cursor-pointer w-60 h-52 shadow-lg rounded-xl flex justify-center items-center'>
                                    <img src={single.img} alt={single.code} />
                                    <FaAngleRight />
                                </div>    
                                ))}
                            </div>

                            {showTopAlert && selectedProject != null && (
                                <div onClick={() => closedAlert()} className={`z-50 overflow-y-hidden absolute -top-6 -right-6 bottom-0 flex flex-col w-full max-w-screen-2xl py-6 border-r  ${isOpen ? ' absolute left-0 transition-all opacity-100 duration-200 ease-in ' : ' absolute left-full opacity-0 transition-all duration-200 ease-in '}`}>
                                    <div class={`flex flex-col items-end `}>
                                        <div class={`shadow-2xl w-full h-52 text-white rounded-bl-lg rounded-tl-lg rounded-tr-lg flex flex-row`} style={{backgroundColor: '#313131'}}>
                                            <div className='flex items-center justify-center flex-col w-60'>
                                                <div className=''>
                                                    <img src={selectedProject[0].img} />
                                                </div>
                                                <div className='text-white'>
                                                    <a href='https://dax.mn/' target="_blank">{selectedProject[0].name}</a>
                                                </div>
                                            </div>
                                            <div className='flex flex-col justify-center w-6/12 ml-14'>
                                                <h1 className='text-4xl py-5 text-white'>{selectedProject[0].name}</h1>
                                                <p className='w-10/12 text-white'>{selectedProject[0].description}</p>
                                            </div>
                                        </div>
                                        <div className={`shadow-2xl w-4/6`}>
                                            <div className={` h-56 rounded-bl-lg rounded-br-lg`} style={{backgroundColor: '#313131'}}>
                                                <div className=' w-3/4 ml-14'>
                                                    <h1 className='text-2xl text-white'>Bla bla bla</h1>
                                                    <div className='py-2 text-xs flex justify-start items-center space-x-52'>
                                                        <div className='text-white'>
                                                            <p className='py-2'>• {selectedProject[0].development1}</p>
                                                            <p className='py-2'>• {selectedProject[0].development2}</p>
                                                            <p className='py-2'>• {selectedProject[0].development3}</p>
                                                            <p className='py-2'>• {selectedProject[0].development4}</p>
                                                        </div>
                                                        <div className='text-white'>
                                                            <p className='py-2'>• {selectedProduct[0].development5}</p>
                                                            <p className='py-2'>• {selectedProduct[0].development6}</p>
                                                            <p className='py-2'>• {selectedProduct[0].development7}</p>
                                                            <p className='py-2'>• {selectedProduct[0].development8}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {showBottomAlert && selectedProduct != null && (
                                <div onClick={() => closedBottomAlert()} className={`z-50 overflow-y-hidden absolute -top-6 -right-6 bottom-0 flex flex-col w-full max-w-screen-2xl py-6 border-r  ${isOpenBot ? ' absolute left-0 transition-all opacity-100 duration-200 ease-in ' : ' absolute left-full opacity-0 transition-all duration-200 ease-in '}`}>
                                <div class='flex flex-col items-end'>
                                    <div class='w-8/12 h-56 rounded-tr-lg rounded-tl-lg  shadow-2xl text-white' style={{backgroundColor: '#313131'}}>
                                    <div className='flex flex-col justify-center w-4/5 ml-20'>
                                            <h1 className='text-4xl py-5 text-white'>{selectedProduct[0].name}</h1>
                                            <p className='w-10/12 text-white'>{selectedProduct[0].description}</p>
                                        </div>
                                    </div>
                                    <div class=' shadow-2xl h-52 rounded-bl-lg rounded-br-lg rounded-tl-lg text-white w-full' style={{backgroundColor: '#313131'}}>
                                        <div className='flex'>
                                            <div className='w-80 flex justify-center flex-col items-center'>
                                                <div className=''>
                                                    <img src={selectedProduct[0].img} />
                                                </div>
                                                <div className='text-white'>
                                                    <a href='https://dax.mn/' target="_blank">{selectedProduct[0].name}</a>
                                                </div>
                                            </div>
                                            <div className='flex flex-col w-3/4 ml-20'>
                                                <h1 className='text-2xl text-white'>{selectedProduct[0].development}</h1>
                                                <div className='py-2 text-xs flex justify-start items-center space-x-52'>
                                                    <div className=''>
                                                        <p className='py-2'>• {selectedProduct[0].development1}</p>
                                                        <p className='py-2'>• {selectedProduct[0].development2}</p>
                                                        <p className='py-2'>• {selectedProduct[0].development3}</p>
                                                        <p className='py-2'>• {selectedProduct[0].development4}</p>
                                                    </div>
                                                    <div className=''>
                                                        <p className='py-2'>• {selectedProduct[0].development5}</p>
                                                        <p className='py-2'>• {selectedProduct[0].development6}</p>
                                                        <p className='py-2'>• {selectedProduct[0].development7}</p>
                                                        <p className='py-2'>• {selectedProduct[0].development8}</p>
                                                    </div>
                                                </div>
                                            </div>
                                         </div>
                                    </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects

