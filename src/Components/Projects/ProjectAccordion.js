import React from 'react'
import { Disclosure } from '@headlessui/react'
import {FaAngleDown} from 'react-icons/fa'

const ProjectAccordion = () => {
    return(
        <div className='container mx-auto block xl:hidden'>
            <div className='pt-10 container flex flex-col px-5 w-full'>
                <div className='text-4xl'>
                    Бид ?
                </div>
                <Disclosure>
                    <Disclosure.Button className="py-5">
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xl'>Эрхэм зорилго</h1> <FaAngleDown />
                        </div> 
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 w-11/12">
                    Дизайн, брэндинг, технологийн шийдлийг хамгийн өндөр түвшинд хүргэж, харилцагчиддаа үнэ цэнийг бүтээхэд хамтран ажиллахыг зорьдог.
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button className="py-5">
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xl'>Алсын хараа</h1> <FaAngleDown />
                        </div> 
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 w-11/12">
                        Чадварлаг залуусаар хамт олноо бүрдүүлж, Монгол Улс дахь харилцагчиддаа цахим эрин зуунд олон улсын тавцанд өрсөлдөх шийдлийг бий болгох.
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button className="py-5">
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xl'>Бидний үнэ цэн</h1> <FaAngleDown />
                        </div> 
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 w-11/12">
                        Өөртөө итгэлтэй, чадварлаг, эрч хүчтэй залуусыг шалгаруулан бэлтгэж, өөрсдийн үйлчилгээг хамгийн өндөр түвшинд хүргээд зогсохгүй цаашдын үйл ажиллагааг дэмжин ажилладаг нь бидний үнэ цэн болно. 
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button className="py-5">
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xl'>Бид хэн бэ</h1> <FaAngleDown />
                        </div> 
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 w-11/12">
                        “Дайверс Солюшнс ХХК” компани нь чадварлаг, эрч хүчтэй 12 хүний бүрэлдэхүүнтэйгээр таны компанийн дижитал шилжилтийн гүүрийг үүсгэхээр ажиллаж байна.
                    </Disclosure.Panel>
                </Disclosure>
            </div>
        </div>
    )
}

export default ProjectAccordion;