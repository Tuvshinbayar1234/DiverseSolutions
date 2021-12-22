import React ,{useState} from 'react'
import Project1 from '../../assets/project.png'
import White from '../../assets/whitelogo.png'
import {FaAngleRight , FaAngleLeft, FaWindowClose} from 'react-icons/fa'
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
            development4: 'Designs',
            development5: 'Design',
            development6: 'Design',
            development7: 'Design',
            development8: 'Design',
            img: White
        },
        {
            id: 2,
            name: 'dax.mn',
            code: 'ARDX',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maxime.',
            development: 'Development',
            development1: 'Code',
            development2: 'FrontEnd',
            development3: 'BackEnd',
            development4: 'Designs',
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
           name: 'monnom',
           code: 'MONT',
           description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maxime.',
           development: 'Development',
           development1: 'Code',
           development2: 'FrontEnd',
           development3: 'BackEnd',
           development4: 'Designs',
           development5: 'Design',
           development6: 'Design',
           development7: 'Design',
           development8: 'Design',
           img: White
       },
       {
           id: 2,
           name: 'ardmoney.mn',
           code: 'ARDX',
           description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, maxime.',
           development: 'Development',
           development1: 'Code',
           development2: 'FrontEnd',
           development3: 'BackEnd',
           development4: 'Designs',
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

      
    ]

    return (
        <div className='w-full py-20 hidden xl:block'>
            <div className='container mx-auto px-10'>
                <div className=''>
                    <h1 id='Project' className='text-4xl font-bold'>Төслүүд</h1>
                </div>
                <div className='flex'>
                    <div className='flex'>
                        <div className=' w-2/4'>
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
                        <div className='flex flex-col relative justify-center items-center w-2/4'>
                            <div className='flex justify-between w-full'>
                                {imageOfProducts.length > 0 && imageOfProducts.map(single => (
                                    <div onClick={() => showTopAlert(single.code)} className=' cursor-pointer w-60 h-52 flex justify-center items-center rounded-xl' style={{background: '#FFFFFF', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5), inset 2px 2px 2px rgba(255, 255, 255, 0.25)'}}>
                                        <img src={single.img} alt={single.code} />
                                        <FaAngleRight />
                                    </div>
                                ))}
                                {showTopAlert && selectedProject != null && (
                                <div className={`z-50 overflow-y-hidden absolute -top-5 -right-6 bottom-0 flex flex-col w-full  py-9 ${isOpen ? ' absolute left-0 transition-all opacity-100 duration-200 ease-in ' : ' absolute left-full opacity-0 transition-all duration-200 ease-in '}`}>
                                    <div className='flex flex-col justify-end items-end'>
                                    
                                        <div className='h-56 flex rounded-tl-lg rounded-bl-lg rounded-tr-lg' style={{width: '100%' , background: '#1E1E1E' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5), inset 2px 2px 2px rgba(255, 255, 255, 0.25)'}}>
                                            <div className='flex w-60 text-white flex-col justify-center items-center text-center'>
                                                <img width={'171px'} height={'171px'} src={selectedProject[0].img} />
                                                <a href='https://dax.mn/' target="_blank">{selectedProject[0].name}</a>
                                            </div>
                                            <div className='text-white w-3/5 flex flex-col pt-5 pl-5'>
                                                <div className='flex items-center justify-between'>
                                                    <h1 className='text-left text-4xl pb-2'>{selectedProject[0].name}</h1>
                                                    <h1 onClick={() => closedAlert()} className='text-3xl text-white cursor-pointer'>X</h1>
                                                </div>
                                                <p className=' text-justify'>{selectedProject[0].description}</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-end'>
                                                <div className='h-56 rounded-bl-lg rounded-br-lg' style={{width: '22rem' , background: '#1E1E1E' ,boxShadow: '0px rgba(0, 0, 0, 0.5), inset 0px rgba(255, 255, 255, 0.25)'}}>
                                                    <div className='text-white text-center'>
                                                        <h1 className='font-bold text-2xl'>FrameWork</h1>
                                                        <div className='flex justify-evenly pt-10'>
                                                            <div className=''>
                                                                <p>• {selectedProject[0].development1}</p>
                                                                <p>• {selectedProject[0].development2}</p>
                                                                <p>• {selectedProject[0].development3}</p>
                                                                <p>• {selectedProject[0].development4}</p>
                                                            </div>
                                                            <div className=''>
                                                                <p>• {selectedProject[0].development5}</p>
                                                                <p>• {selectedProject[0].development6}</p>
                                                                <p>• {selectedProject[0].development7}</p>
                                                                <p>• {selectedProject[0].development8}</p>
                                                            </div>
                                                        </div>
                                                    </div>    
                                                </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            )}
                            </div>
                            <div className='flex justify-between w-full py-4'>
                                {imageProducts.length > 0 && imageProducts.map(single => (
                                    <div onClick={() => showBottomAlert(single.code)} className='cursor-pointer w-60 h-52 flex justify-center items-center rounded-xl' style={{background: '#FFFFFF', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5), inset 2px 2px 2px rgba(255, 255, 255, 0.25)'}}>
                                    <img src={single.img} alt={single.code} />
                                    <FaAngleRight />
                                </div>    
                                ))}
                                {showBottomAlert && selectedProduct != null && (
                                <div className={`z-50 overflow-y-hidden absolute -top-5 -right-6 bottom-0 flex flex-col w-full max-w-screen-2xl py-9 border-r  ${isOpenBot ? ' absolute left-0 transition-all opacity-100 duration-200 ease-in ' : ' absolute left-full opacity-0 transition-all duration-200 ease-in '}`}>
                                    <div className='flex flex-col items-end'>
                                        <div className='h-56 flex justify-end rounded-tr-lg rounded-tl-lg' style={{width: '22rem' , background: '#1E1E1E' ,boxShadow: '0px rgba(0, 0, 0, 0.5), inset 0px rgba(255, 255, 255, 0.25)'}}>
                                            <div className='text-white px-2 flex flex-col'>
                                                <div className='flex items-center justify-between'>
                                                    <h1 className='text-left text-4xl pb-2'>{selectedProduct[0].name}</h1>
                                                    <h1 onClick={() => closedBottomAlert()} className='text-3xl text-white cursor-pointer'>X</h1>
                                                </div>
                                                <p className=' text-justify'>{selectedProduct[0].description}</p>
                                            </div>
                                        </div>
                                        <div className='h-56 flex rounded-bl-lg rounded-br-lg rounded-tl-lg' style={{width:'100%', background: '#1E1E1E' ,boxShadow: '0px rgba(0, 0, 0, 0.5), inset 0px rgba(255, 255, 255, 0.25)'}}>
                                            <div className='flex w-60 text-white flex-col justify-center items-center text-center'>
                                                <img width={'171px'} height={'171px'} src={selectedProduct[0].img} />
                                                <a href='https://dax.mn/' target="_blank">{selectedProduct[0].name}</a>
                                            </div>
                                            <div className='text-white w-3/5 flex flex-col pt-5 pl-5'>
                                                <div className='text-white text-center'>
                                                    <h1 className='font-bold text-2xl'>FrameWork</h1>
                                                    <div className='flex justify-evenly pt-10'>
                                                        <div className=''>
                                                            <p>• {selectedProduct[0].development1}</p>
                                                            <p>• {selectedProduct[0].development2}</p>
                                                            <p>• {selectedProduct[0].development3}</p>
                                                            <p>• {selectedProduct[0].development4}</p>
                                                        </div>
                                                        <div className=''>
                                                            <p>• {selectedProduct[0].development5}</p>
                                                            <p>• {selectedProduct[0].development6}</p>
                                                            <p>• {selectedProduct[0].development7}</p>
                                                            <p>• {selectedProduct[0].development8}</p>
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
        </div>
    )
}

export default Projects

