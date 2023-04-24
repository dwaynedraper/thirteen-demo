//React and Next imports
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

// External imports
import ArkaneLogo from "@/public/arkane-logo-trans-white.svg";
import styles from "@/styles/NavBar.module.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
  const [currentMegamenu, setCurrentMegamenu] = useState(null);

  const handleMouseEnter = (menuName) => {
    setCurrentMegamenu(menuName);
  };

  const handleMouseLeave = () => {
    setCurrentMegamenu(null);
  };

  return (
    <nav
      className='bg-brand-dark text-brand-light'
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo and nav items */}
      <div className='container mx-auto px-4 py-2 flex items-center justify-between'>
        <Link href={"/"}>
          <Image
            src={ArkaneLogo}
            alt='Arkane Digital Logo'
            width={250}
            height={50}
          />
        </Link>
        <div className='ml-8'>
          <ul className='flex items-center space-x-4'>
            <li onMouseEnter={() => handleMouseEnter("menu1")}>Menu 1</li>
            <li onMouseEnter={() => handleMouseEnter("menu2")}>Menu 2</li>
          </ul>
        </div>
        <div className='ml-auto'>
          <input
            className='bg-brand-lighter text-brand-dark px-4 py-2 rounded'
            type='search'
            placeholder='Search'
          />
        </div>
      </div>

      {/* Megamenu */}
      {currentMegamenu && (
        <div
          className='megamenu bg-brand-dark text-brand-light'
          onMouseLeave={handleMouseLeave}
        >
          <div className='container mx-auto px-4 py-2'>
            {/* Column 1 */}
            <div className='left-column w-1/4'>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className='right-column-1 w-1/4'>
              {/* Add content based on the value of currentMegamenu */}
            </div>

            {/* Column 3 */}
            <div className='right-column-2 w-1/4'>
              {/* Add content based on the value of currentMegamenu */}
            </div>

            {/* Optional Column 4 */}
            <div className='right-column-3 w-1/4'>
              {/* Add content based on the value of currentMegamenu */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav
//       x-data='{ isOpen: false }'
//       className='relative bg-brand-light shadow dark:bg-brand-dark'
//     >
//       <div className='container px-6 py-3 mx-auto md:flex'>
//         <div className='flex items-center justify-between'>
//           <Link href={"/"}>
//             <Image
//               src={ArkaneLogo}
//               alt='Arkane Digital Logo'
//               width={250}
//               height={50}
//             />
//           </Link>

//           {/* Mobile menu button */}
//           <div className='flex lg:hidden'>
//             <button
//               x-cloak
//               onClick={toggleMenu}
//               type='button'
//               className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
//               aria-label='toggle menu'
//             >
//               <svg
//                 x-show='!isOpen'
//                 xmlns='http://www.w3.org/2000/svg'
//                 className='w-6 h-6'
//                 fill='none'
//                 viewBox='0 0 24 24'
//                 stroke='currentColor'
//                 strokeWidth='2'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   d='M4 8h16M4 16h16'
//                 />
//               </svg>

//               <svg
//                 x-show='isOpen'
//                 xmlns='http://www.w3.org/2000/svg'
//                 className='w-6 h-6'
//                 fill='none'
//                 viewBox='0 0 24 24'
//                 stroke='currentColor'
//                 strokeWidth='2'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   d='M6 18L18 6M6 6l12 12'
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu open: "block", Menu closed: "hidden" */}
//         <div
//           x-cloak
//           className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${
//             isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
//           }`}
//         >
//           <div className='flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0'>
//             <a
//               href='#'
//               className='px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2'
//             >
//               Home
//             </a>
//             <a
//               href='#'
//               className='px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2'
//             >
//               About
//             </a>
//             <a
//               href='#'
//               className='px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark
//               :hover:bg-gray-700 md:mx-2'
//             >
//               Contact
//             </a>
//           </div>

//           <div className='relative mt-4 md:mt-0'>
//             <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
//               <svg
//                 className='w-5 h-5 text-gray-400'
//                 viewBox='0 0 24 24'
//                 fill='none'
//               >
//                 <path
//                   d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
//                   stroke='currentColor'
//                   strokeWidth='2'
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                 />
//               </svg>
//             </span>

//             <input
//               type='text'
//               // className='w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300'
//               placeholder='Search'
//             />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
