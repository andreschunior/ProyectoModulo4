import React from "react"
import { BsChevronCompactLeft, BsChevronCompactRight, } from "react-icons/bs";
import Banner1 from "../../Pics/Banner1.png"


export const Carrousel: React.FC = () => {
      console.log(Banner1);
      const slides = [
        {
            url : Banner1
        }
      ]
    return (
     <>
     <div className="max-w-[1600px] max-h-[600px] w-full m-auto py-16 px-4 relative group  ">
        <div style={{backgroundImage:`url(${slides[0].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500 ">
            <img className="mt-0" src={Banner1.src}  />
    {/* left arrow */}
    <div>
    <BsChevronCompactLeft size={40} className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"/>
</div>

    {/* rigth arrow */}
    <div>
    <BsChevronCompactRight size={50} className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" />
</div>

        </div>

     </div>
     



     </>
    )
}

// <div id="controls-carousel" className="relative w-full" data-carousel="static" >
//     {/* <!-- Carousel wrapper --> */}
//     <div className="relative h-56 overflow-hidden rounded-lg md:h-96" style={{ top: '40px' }}>
//          {/* <!-- Item 1 --> */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//         <img src={Banner1.src} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//         {/* <!-- Item 2 --> */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
//             <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//         {/* <!-- Item 3 --> */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//         {/* <!-- Item 4 --> */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//         {/* <!-- Item 5 --> */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//     </div>
//     {/* <!-- Slider controls --> */}
//     <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
//             </svg>
//             <span className="sr-only">Previous</span>
//         </span>
//     </button>
//     <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
//             </svg>
//             <span className="sr-only">Next</span>
//         </span>
//     </button>
// </div>

