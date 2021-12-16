import React from 'react'
import { Disclosure } from '@headlessui/react'
import {FaAngleDown} from 'react-icons/fa'

const ProjectAccordion = () => {
    return(
        <div className='pt-10 block xl:hidden container flex flex-col px-5 w-full'>
            <div className='text-4xl'>
                Бид ?
            </div>
            <Disclosure>
                <Disclosure.Button className="py-5">
                    <div className='flex items-center space-x-3'>
                        <h1 className='text-xl'>Is team pricing available?</h1> <FaAngleDown />
                    </div> 
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 w-11/12">
                    Yes! You can purchase a license that you can share with your entire
                    team.
                </Disclosure.Panel>
            </Disclosure>
            <Disclosure>
                <Disclosure.Button className="py-5">
                    <div className='flex items-center space-x-3'>
                        <h1 className='text-xl'>Is team pricing available?</h1> <FaAngleDown />
                    </div> 
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 w-11/12">
                    Yes! You can purchase a license that you can share with your entire
                    team.
                </Disclosure.Panel>
            </Disclosure>
            <Disclosure>
                <Disclosure.Button className="py-5">
                    <div className='flex items-center space-x-3'>
                        <h1 className='text-xl'>Is team pricing available?</h1> <FaAngleDown />
                    </div> 
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 w-11/12">
                    Yes! You can purchase a license that you can share with your entire
                    team.
                </Disclosure.Panel>
            </Disclosure>
            <Disclosure>
                <Disclosure.Button className="py-5">
                    <div className='flex items-center space-x-3'>
                        <h1 className='text-xl'>Is team pricing available?</h1> <FaAngleDown />
                    </div> 
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 w-11/12">
                    Yes! You can purchase a license that you can share with your entire
                    team.
                </Disclosure.Panel>
            </Disclosure>
        </div>
    )
}

export default ProjectAccordion;