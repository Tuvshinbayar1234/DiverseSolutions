import React from 'react'

const WeWork = () => {
    return (
        <div className='w-full pt-10 sm:py-10'>
            <div className='container mx-auto hidden xl:block'>
                <div className='flex justify-evenly'>
                    <span id='WeWork' class="relative w-96 h-60 flex-col inline-flex justify-center border-black rounded-2xl border-4">
                    <h1 className=' text-4xl w-3/12 mx-10 font-bold'>Вебсайт хөгжүүлэлт</h1>
                        <p className=' text-sm w-3/4 mx-10 py-5'>ERP, CRM гэх мэт олон төрлийн үйлчилгээг бид таны хүссэн шийдлийн дагуу хийж өгнө.</p>
                        <span class="flex absolute h-10 w-10 top-0 right-0 mt-52 -mr-5">
                            <span class="absolute inline-flex h-full w-full bg-black opacity-75"></span>
                            <span class="relative inline-flex h-10 w-10 bg-black"></span>
                        </span>
                    </span>
                    <span class="relative w-96 h-60 flex-col inline-flex justify-center mt-36 border-black rounded-2xl border-4">
                    <h1 className=' text-4xl w-3/12 mx-10 font-bold'>Aпп хөгжүүлэлт</h1>
                        <p className=' text-sm w-3/4 mx-10 py-5'>Танд бизнесээ өргөжүүлэх шаардлага дижитал эрин зуунд гарч байна уу ?</p>
                        <span class="flex absolute h-10 w-10 top-0 right-0 mt-52 -mr-5">
                            <span class="absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-10 w-10 bg-black"></span>
                        </span>
                    </span>
                    <span class="relative w-96 h-60 flex-col inline-flex justify-center border-black rounded-2xl border-4">
                    <h1 className=' text-4xl w-3/12 mx-10 font-bold'>Дизайн</h1>
                        <p className=' text-sm w-3/4 mx-10 py-5'>Вэб болон гар утасны апплекейшны дизайн хийж гүйцэтгэж байна.</p>
                        <span class="flex absolute h-10 w-10 top-0 right-0 mt-52 -mr-5">
                            <span class="absolute inline-flex h-full w-full bg-black opacity-75"></span>
                            <span class="relative inline-flex h-10 w-10 bg-black"></span>
                        </span>
                        <span class="flex absolute h-10 w-10 top-0 right-0 mt-52 -mr-5 origin-center transform rotate-45">
                            <span class="absolute inline-flex h-full w-full bg-black opacity-75"></span>
                            <span class="relative inline-flex h-10 w-10 bg-black"></span>
                        </span>
                    </span>
                </div>
            </div>
            {/* mobile */}
            <div className='container mx-auto block xl:hidden'>
                <div className='flex flex-col justify-center items-center px-5'>
                    <span class="w-full h-40 flex-col flex justify-center rounded-2xl">
                    <h1 className='text-2xl text-left font-bold'>Вебсайт хөгжүүлэлт</h1>
                    <p className=' text-sm w-full mx-1 py-5'>ERP, CRM гэх мэт олон төрлийн үйлчилгээг бид таны хүссэн шийдлийн дагуу хийж өгнө.</p>
                    </span>
                    <span class="w-full h-28 flex-col flex rounded-2xl">
                    <h1 className='text-2xl w-9/12 font-bold'>Aпп хөгжүүлэлт</h1>
                    <p className=' text-sm w-full py-5'>Танд бизнесээ өргөжүүлэх шаардлага дижитал эрин зуунд гарч байна уу ?</p>    
                    </span>
                    <span class="w-full h-40 flex-col flex justify-center rounded-2xl">
                    <h1 className='text-2xl text-left font-bold w-3/12'>Дизайн</h1>
                        <p className=' text-sm w-full mx-1 py-5'>Вэб болон гар утасны апплекейшны дизайн хийж гүйцэтгэж байна.</p>
                        
                    </span>
                </div>
            </div>
        </div>
    )
}
export default WeWork
