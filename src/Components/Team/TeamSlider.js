import React,{Fragment , useState} from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import { Dialog, Transition } from '@headlessui/react'

const TeamSlider = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        autoplaySpeed: 500,
        slidesToScroll: 2,
    };

    const teamPeople = [
        {
          img: eegii,
          title: 'М. Энх-Амгалан',
          text: 'Lorem'
        },
        {
          img: bo,
          title: 'М. Болортоль',
          text: 'Lorem '
        },
        {
          img: odko,
          title: 'М. Болортоль',
          text: 'Orci'
        },
        {
          img: anhaa,
          title: 'М. Болортоль',
          text: 'Bibendum'
        },
        {
          img: tulgaa,
          title: 'М. Болортоль',
          text: 'Mattis'
        },
        {
            img: tulgaa,
            title: 'М. Болортоль',
            text: 'Mattis'
        },
        {
            img: tulgaa,
            title: 'М. Болортоль',
            text: 'Mattis'
        },
        {
            img: tulgaa,
            title: 'М. Болортоль',
            text: 'Mattis'
        },
        {
            img: tulgaa,
            title: 'М. Болортоль',
            text: 'Mattis'
        },
        {
            img: tulgaa,
            title: 'М. Болортоль',
            text: 'Mattis'
        },
        {
            img: tulgaa,
            title: 'М. Болортоль',
            text: 'Mattis'
        },
        {
            img: tulgaa,
            title: 'М. Болортоль',
            text: 'Mattis'
        },
      ]

      const teamPeopleleft = [
        {
          img: eegii,
          title: 'М. Энх-Амгалан',
          text: 'Lorem'
        },
        {
          img: bo,
          title: 'М. Болортоль',
          text: 'Lorem '
        },
        {
          img: odko,
          title: 'М. Болортоль',
          text: 'Orci'
        },
        {
          img: anhaa,
          title: 'М. Болортоль',
          text: 'Bibendum'
        },
        {
          img: tulgaa,
          title: 'М. Болортоль',
          text: 'Mattis'
        },
        {
            img: tulgaa,
            title: 'М. Болортоль',
            text: 'Mattis'
        },
      ]

      const teamPeopleRight = [
        {
            img: tulgaa,
            title: 'М. Болортоль',
            text: 'Mattis'
        },
        {
            img: tulgaa,
            title: 'М. Болортоль',
            text: 'Mattis'
        },
        {
            img: tulgaa,
            title: 'М. Болортоль',
            text: 'Mattis'
        },
        {
            img: tulgaa,
            title: 'М. Болортоль',
            text: 'Mattis'
        },
        {
            img: tulgaa,
            title: 'М. Болортоль',
            text: 'Mattis'
        },
        {
            img: tulgaa,
            title: 'М. Болортоль',
            text: 'Mattis'
        },
      ]

    return(
        <div className="sm:hidden block w-full container mx-auto">
            <div className=" text-lg px-3 pb-5 flex justify-between items-center">
                <h1>Манай хамт олон</h1>
                <p onClick={openModal} className="text-xs">Бүгдийг үзэх</p>
            </div>
            <Slider className='flex justify-center items-center' {...settings}>
            {teamPeople.map((x, i) => {
                return (
                <div key={i} classname=' shadow-xl bg-red-500'>
                    <img classname="" src={x.img} />
                    <div class=" text-sm py-2">
                        <div classname="text-sm text-red-400">{x.title}</div>
                        <div classname="text-xs">{x.text}</div>
                    </div>
                </div>)
            })}
            </Slider>
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
                            <div className="inline-block w-full px-2 max-w-md h-full overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    <div className="flex items-center p-5">
                                        <p onClick={closeModal} className="text-xs cursor-pointer">Буцах</p>
                                        <h1 className="ml-10">Манай хамт олон</h1>
                                    </div>
                                </Dialog.Title>
                                <div className="flex justify-around w-full space-x-3">
                                    <div className=" w-6/12">
                                        {teamPeopleleft.map((x, i) => {
                                            return (
                                            <div key={i} classname='shadow-xl'>
                                                <div className="flex flex-col justify-center items-center shadow-xl rounded-xl p-2">
                                                    <img classname="w-10" src={x.img} />
                                                    <div classname="text-xs text-red-400">{x.title}</div>
                                                    <div classname="text-xs">{x.text}</div>
                                                </div>
                                            </div>)
                                        })}
                                    </div>
                                    <div className="w-6/12">
                                        {teamPeopleRight.map((x, i) => {
                                            return (
                                            <div key={i} classname='shadow-xl'>
                                                <div className="flex flex-col justify-center items-center shadow-xl rounded-xl p-2">
                                                    <img classname="w-10" src={x.img} />
                                                    <div classname="text-xs text-red-400">{x.title}</div>
                                                    <div classname="text-xs">{x.text}</div>
                                                </div>
                                            </div>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )   
}

export default TeamSlider;