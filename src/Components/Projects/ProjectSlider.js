import React, {Fragment, useState } from 'react'
import White from '../../assets/whitelogo.png'
import Project1 from '../../assets/project.png'
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dialog, Transition } from '@headlessui/react'

const ProjectSlider = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenSecond, setIsOpenSecond] = useState(false)
    const [isOpenThird, setIsOpenThird] = useState(false)
    const [isOpenFourth, setIsOpenFourth] = useState(false)

    function closeModal() {
    setIsOpen(false)
    }

    function closeModalSecond() {
        setIsOpenSecond(false)
    }

    function closeModalThird() {
        setIsOpenThird(false)
    }

    function closeModalFourth() {
        setIsOpenFourth(false)
    }

    
    function openModal() {
        setIsOpen(true)
    }
    function openModalSecond() {
        setIsOpenSecond(true)
    }
    function openModalThird() {
        setIsOpenThird(true)
    }
    function openModalFourth() {
        setIsOpenFourth(true)
    }
    
    return (
        <div className="xl:hidden block w-full container pb-10">
            <div className="text-2xl pb-5 px-5">
                <h1>Төслүүд</h1>
            </div>
            <div className='mx-5 rounded-xl'>
            <div className="inset-0 flex flex-col space-y-5 items-center justify-center">
                <div className='flex w-full justify-evenly space-x-5'>
                    <button type="button" onClick={openModal} className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md">
                        <img src={White} />
                    </button>
                    <button type="button" onClick={openModalSecond} className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md">
                        <img src={White} />
                    </button>
                </div>
                <div className='flex w-full justify-evenly space-x-5'>
                    <button type="button" onClick={openModalThird} className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md">
                        <img src={White} />
                    </button>
                    <button type="button" onClick={openModalFourth} className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md">
                        <img src={White} />
                    </button>
                </div>
            </div>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal} >
                    <div className="min-h-screen text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                          &#8203;
                        </span>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <div className="inline-block w-full px-2 max-w-md h-screen overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                <img className='w-1/4' src={Project1} />
                            </Dialog.Title>
                            <div className="mt-2">
                                <a href='#' target='_blank'>dax.mn</a>
                            </div>
                            <div className='pt-5'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis expedita quisquam enim, assumenda iste laborum quod molestiae. Nobis, quam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis expedita quisquam enim, assumenda iste laborum quod molestiae. Nobis, quam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis expedita quisquam enim, assumenda iste laborum quod molestiae. Nobis, quam!</p>
                            </div>
                            <div className="mt-4">
                                <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={closeModal}>
                                    Got it, thanks!
                                </button>
                            </div>
                        </div>
                        </Transition.Child>
                    </div>
                    </Dialog>
                </Transition>
                <Transition appear show={isOpenSecond} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModalSecond} >
                    <div className="min-h-screen text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                          &#8203;
                        </span>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <div className="inline-block w-full px-2 max-w-md h-screen overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                <img className='w-1/4' src={Project1} />
                            </Dialog.Title>
                            <div className="mt-2">
                                <a href='#' target='_blank'>dax.mn</a>
                            </div>
                            <div className='pt-5'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis expedita quisquam enim, assumenda iste laborum quod molestiae. Nobis, quam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis expedita quisquam enim, assumenda iste laborum quod molestiae. Nobis, quam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis expedita quisquam enim, assumenda iste laborum quod molestiae. Nobis, quam!</p>
                            </div>
                            <div className="mt-4">
                                <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={closeModalSecond}>
                                    Got it, thanks!
                                </button>
                            </div>
                        </div>
                        </Transition.Child>
                    </div>
                    </Dialog>
                </Transition>
                <Transition appear show={isOpenThird} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModalThird} >
                    <div className="min-h-screen text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                          &#8203;
                        </span>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <div className="inline-block w-full px-2 max-w-md h-screen overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                <img className='w-1/4' src={Project1} />
                            </Dialog.Title>
                            <div className="mt-2">
                                <a href='#' target='_blank'>dax.mn</a>
                            </div>
                            <div className='pt-5'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis expedita quisquam enim, assumenda iste laborum quod molestiae. Nobis, quam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis expedita quisquam enim, assumenda iste laborum quod molestiae. Nobis, quam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis expedita quisquam enim, assumenda iste laborum quod molestiae. Nobis, quam!</p>
                            </div>
                            <div className="mt-4">
                                <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={closeModalThird}>
                                    Got it, thanks!
                                </button>
                            </div>
                        </div>
                        </Transition.Child>
                    </div>
                    </Dialog>
                </Transition>
                <Transition appear show={isOpenFourth} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModalFourth} >
                    <div className="min-h-screen text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                          &#8203;
                        </span>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <div className="inline-block w-full px-2 max-w-md h-screen overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                <img className='w-1/4' src={Project1} />
                            </Dialog.Title>
                            <div className="mt-2">
                                <a href='#' target='_blank'>dax.mn</a>
                            </div>
                            <div className='pt-5'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis expedita quisquam enim, assumenda iste laborum quod molestiae. Nobis, quam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis expedita quisquam enim, assumenda iste laborum quod molestiae. Nobis, quam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis expedita quisquam enim, assumenda iste laborum quod molestiae. Nobis, quam!</p>
                            </div>
                            <div className="mt-4">
                                <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-500 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={closeModalFourth}>
                                    Got it, thanks!
                                </button>
                            </div>
                        </div>
                        </Transition.Child>
                    </div>
                    </Dialog>
                </Transition>
            </div>
        </div>
    )
}

export default ProjectSlider;


