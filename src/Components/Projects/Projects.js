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
            link: 'https://www.stablecoin.mn/',
            code: 'ARDM',
            description: 'Монголын анхны Стэйблкойн. Монгол төгрөгтэй үнэ цэнээ аргамжсан энэхүү койн нь крипто арилжаанд төгрөгийг төлөөлөх хамгийн зөв хэрэгсэл болно. Энэхүү койны ухаалаг гэрээг Diverse Solutions хөгжүүлж, хэрэглээнд нэвтрүүлсэн болно.',
            development: 'BackEnd',
            development1: 'Website front-end',
            development2: 'Token smart contracts',
            development3: 'Website front-end',
            development4: 'Design',
            development5: 'Branding',
            development6: 'Ecosystem consulting',
            img: White
        },
        {
            id: 2,
            name: 'dax.mn',
            link:'https://dax.mn/',
            code: 'ARDX',
            description: 'Монголын том 4 биржийн нэг. Хамгийн анх Ард Санхүүгийн Нэгдэлийн крипто арилжааны биржийг',
            development: 'Development',
            development1: 'Code',
            development2: 'FrontEnd',
            development3: 'BackEnd',
            development4: 'Designs',
            development5: 'Designs',
            development6: 'Designs',
            img: White
        },
        {
            id: 3,
            name: 'Monnom',
            code: 'MONT',
            link: 'https://monnom.mn/',
            description: '“Monnom” аппликейшн нь цахим, аудио, хэвлэмэл номыг онлайнаар худалдаалдаг номын төвлөрсөн платформ юм. Бид 2021 оноос үйл ажиллагаагаа явуулж эхэлсэн ба Монгол хэл дээрх бүх төрлийн номыг цахим, аудио, хэвлэмэл гэсэн гурван хэлбэрээр хэрэглэгчдэд хүргэдэг.',
            development: 'Development',
            development1: 'Code',
            development2: 'FrontEnd',
            development3: 'BackEnd',
            development4: 'Designs',
            development5: 'Designs',
            development6: 'Designs',
            img: White
        },
       
    ]

    const products = [
        {
            id: 1,
            name: 'ArdMoney',
            link: 'https://www.ardmoney.com/',
            code: 'ARDM',
            description: 'Монголын анхны DAO төсөл. Төвлөрсөн бус санхүүг Монголын болон Төв Азийн зах зээлд авчирч, крипто хэрэглэгчдийн хэрэглээнд нэвтрэх зорилготой.',
            development:  'Branding',
            development1: 'Ecosystem',
            development2: 'Website front-end',
            development3: 'Website back-end',
            development4: 'Designs',
            development5: 'Token smart contracts',
            development6: 'DAP smart contracts ',
            img: White
        },
       
        {
            id: 2,
            name: 'Coming Soon',
            code: 'ARDX',
            description: 'Coming Soon',
            development: 'Coming Soon',
            development1: 'Coming Soon',
            development2: 'Coming Soon',
            development3: 'Coming Soon',
            development4: 'Coming Soon',
            development5: 'Coming Soon',
            development6: 'Coming Soon',
            img: White
        },
        
        {
            id: 3,
            name: 'Coming Soon',
            code: 'MONT',
            description: 'Coming Soon',
            development: 'Coming Soon',
            development1: 'Coming Soon',
            development2: 'Coming Soon',
            development3: 'Coming Soon',
            development4: 'Coming Soon',
            development5: 'Coming Soon',
            development6: 'Coming Soon',
            img: White
        },
   ]
   

    const imageOfProducts = [
        {
            id: 120,
            code: "ARDM",
            img: Project1
        },
        {
            id: 122,
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
            id: 121,
            code: "ARDM",
            img: Project1
        },
        {
            id: 120,
            code: "ARDX",
            img: Project1
        },
        {
            id: 122,
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
                    <div className='flex justify-between'>
                        <div className='w-2/4 flex flex-col justify-evenly'>
                            <div className='py-2'>
                                <h1 className='font-bold text-2xl'>Хөгжүүлэлт</h1>
                                <p className='py-2 px-2'>Бид хэрэглэгчдийнхээ онцлогийг шинжлэн, хэрэгцээнд зориулсан дизайн, брэндинг, вэбсайт, вэб болон утасны апп, блокчэйн дээр суурилсан токен, dapp-н ухаалаг гэрээг хөгжүүлж байна. Бид Монголын анхны төгрөгтэй 1:1 үнэ цэнтэй стэйблкойн болон Монголын анхны төвлөрсөн бус санхүүгийн систем болох ArdMoney төслийг гардан хэрэгжүүлж байгаа болно.</p>
                            </div>
                            <div className=''>
                                <h1 className='font-bold text-2xl '>Зөвлөх</h1>
                                <p className='px-2'>Блокчэйн болон бусад дэвшилтэт технологийн шийдлийг таны бизнест тохируулан боловсруулж, зөвлөж өгөх болно. Манай харилцагчид мөн бидний улирал бүр гаргах технологийн тайлангуудыг хамгийн түрүүнд хүлээн авдаг.</p>
                                {/* <p className='px-2 py-2'>Манай компани нь 2020 онд Монгол Улсад мэдээллийн технологийн чиглэлээр үйл ажиллагаа эрхлэхээр үүсгэн байгуулагдсан бөгөөд бид одоогоор 4 бүтээгдэхүүнийг амжилттай хөгжүүлээд хэрэглээнд нэвтрүүлсэн байна.</p> */}
                            </div>
                        </div>
                        <div className='flex flex-col relative justify-center w-2/4'>
                            <div className='flex space-x-12 justify-between w-full'>
                                {imageOfProducts.length > 0 && imageOfProducts.map(single => (
                                    <div onClick={() => showTopAlert(single.code)} className=' cursor-pointer w-60 h-52 flex justify-center items-center rounded-xl' style={{background: '#FFFFFF', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5), inset 2px 2px 2px rgba(255, 255, 255, 0.25)'}}>
                                        <img src={single.img} alt={single.code} />
                                        <FaAngleRight />
                                    </div>
                                ))}
                            </div>
                            {showTopAlert && selectedProject != null && (
                                <div className={`z-50 overflow-y-hidden absolute top-0 2xl:top-0 flex flex-col w-full  ${isOpen ? ' absolute left-0 transition-all opacity-100 duration-200 ease-in ' : ' absolute left-full opacity-0 transition-all duration-200 ease-in '}`}>
                                    <div className='flex flex-col items-end'>
                                        <div className='h-56 flex rounded-tl-lg rounded-bl-lg rounded-tr-lg w-full' style={{background: '#1E1E1E' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5), inset 2px 2px 2px rgba(255, 255, 255, 0.25)'}}>
                                            <div className='flex w-60 text-white flex-col justify-center items-center text-center'>
                                                <img width={'171px'} height={'171px'} src={selectedProject[0].img} />
                                                <a href={selectedProject[0].link} target="_blank">{selectedProject[0].name}</a>
                                            </div>
                                            <div className='text-white w-4/5 flex flex-col pt-5 px-2'>
                                                <div className='flex flex-col'>
                                                    <h1 onClick={() => closedAlert()} className='text-3xl text-white cursor-pointer flex justify-end'><FaAngleLeft /></h1>
                                                    <div className=''><h1 className='text-left text-2xl pb-2 px-2'>{selectedProject[0].name}</h1></div>
                                                </div>
                                                <p className=' text-justify px-2'>{selectedProject[0].description}</p>
                                            </div>
                                        </div>
                                            <div className='w-full flex justify-end'>
                                                <div className='h-56 rounded-bl-lg rounded-br-lg' style={{width: '70%', background: '#1E1E1E' ,boxShadow: '0px rgba(0, 0, 0, 0.5), inset 0px rgba(255, 255, 255, 0.25)'}}>
                                                    <div className='text-white text-center'>
                                                        <h1 className='font-bold text-2xl'>Ажилийн хэсэг</h1>
                                                        <div className='flex justify-evenly pt-10'>
                                                            <div className=''>
                                                                <p>• {selectedProject[0].development1}</p>
                                                                <p>• {selectedProject[0].development2}</p>
                                                                <p>• {selectedProject[0].development3}</p>
                                                                
                                                            </div>
                                                            <div className=''>
                                                                <p>• {selectedProject[0].development4}</p>
                                                                <p>• {selectedProject[0].development5}</p>
                                                                <p>• {selectedProject[0].development6}</p>
                                                            </div>
                                                        </div>
                                                    </div>    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            <div className='flex space-x-12 justify-end w-full pt-5'>
                                {imageProducts.length > 0 && imageProducts.map(single => (
                                    <div onClick={() => showBottomAlert(single.code)} className='cursor-pointer w-60 h-52 flex justify-center items-center rounded-xl' style={{background: '#FFFFFF', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5), inset 2px 2px 2px rgba(255, 255, 255, 0.25)'}}>
                                        <img src={single.img} alt={single.code} />
                                        <FaAngleRight />
                                    </div>    
                                ))}
                            </div>
                            {showBottomAlert && selectedProduct != null && (
                                <div className={`z-50 overflow-y-hidden absolute top-0 2xl:top-0 flex flex-col w-full  ${isOpenBot ? ' absolute left-0 transition-all opacity-100 duration-200 ease-in ' : ' absolute left-full opacity-0 transition-all duration-200 ease-in '}`}>
                                    <div className='flex flex-col items-end'>
                                        <div className='h-56 flex justify-end rounded-tr-lg rounded-tl-lg' style={{width: '70%', background: '#1E1E1E' ,boxShadow: '0px rgba(0, 0, 0, 0.5), inset 0px rgba(255, 255, 255, 0.25)'}}>
                                            <div className='text-white px-2 w-full flex flex-col'>
                                            <h1 onClick={() => closedBottomAlert()} className='text-xl pr-3 text-right text-white cursor-pointer flex justify-end pt-2'><FaAngleLeft /></h1>
                                                <div className='flex items-center w-full justify-between'>
                                                    <div className='text-white w-full flex flex-col pl-5'>
                                                    <div className='flex justify-center px-1 pt-5'>
                                                        <p className='text-white'>{selectedProduct[0].description}</p>
                                                    </div>
                                                            
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-56 flex rounded-bl-lg rounded-br-lg rounded-tl-lg w-full' style={{background: '#1E1E1E' ,boxShadow: '0px rgba(0, 0, 0, 0.5), inset 0px rgba(255, 255, 255, 0.25)'}}>
                                            <div className='flex w-60 text-white flex-col justify-center items-center text-center'>
                                                <img width={'171px'} height={'171px'} src={selectedProduct[0].img} />
                                                <a href={selectedProduct[0].link} target="_blank">{selectedProduct[0].name}</a>
                                            </div>
                                            <div className='text-white text-center flex justify-center flex-col items-center w-9/12'>
                                                <h1 className='font-bold text-2xl'>Ажилийн хэсэг</h1>
                                                <div className='flex space-x-10 pt-2'>
                                                    <div className=''>
                                                        <p>• {selectedProduct[0].development1}</p>
                                                        <p>• {selectedProduct[0].development2}</p>
                                                        <p>• {selectedProduct[0].development3}</p>
                                                    </div>
                                                    <div className=''>
                                                        <p>• {selectedProduct[0].development4}</p>
                                                        <p>• {selectedProduct[0].development5}</p>
                                                        <p>• {selectedProduct[0].development6}</p>
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

