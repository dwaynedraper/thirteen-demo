import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import ArkaneLogo from "../../public/arkane-logo-trans-white.svg";
import styles from "@/styles/NavBar.module.scss";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function NavBar() {
  return (
    <nav
      className={`${styles["nav-arkane"]} ${montserrat.className} bg-black shadow-lg`}
    >
      <div className='max-w-7xl mx-auto px-6 p-1 flex justify-between align-middle'>
        <div className='flex'>
          <Link href={"/"}>
            <Image
              src={ArkaneLogo}
              alt='Arkane Digital Logo'
              width={250}
              height={50}
            />
          </Link>
        </div>
        <div className='flex align-middle'>
          <a href='#' className='text-gray-900 px-3 py-2 align-middle'>
            Home
          </a>
          <a href='#' className='text-gray-900 px-3 py-2 align-middle'>
            About
          </a>
          <a href='#' className='text-gray-900 px-3 py-2 align-middle'>
            Contact
          </a>
        </div>
      </div>
    </nav>
    // <nav className='md:container bg-black navbar-expand-lg nav-arkane'>
    //   <div className='container'>
    //     <div className='flex-shrink-0 me-5'>
    //       <Link href={"/"} legacyBehavior>
    //         <Image
    //           src={ArkaneLogo}
    //           alt='Arkane Digital Logo'
    //           width={250}
    //           height={50}
    //         />
    //       </Link>
    //     </div>
    //     <button
    //       className='navbar-toggler'
    //       type='button'
    //       data-bs-toggle='collapse'
    //       data-bs-target='#navbarSupportedContent'
    //       aria-controls='navbarSupportedContent'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //     >
    //       <span className='navbar-toggler-icon'></span>
    //     </button>
    //     <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    //       <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
    //         <li className='nav-item mx-3'>
    //           <a
    //             className='nav-link text-white active'
    //             aria-current='page'
    //             href='#'
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li className='nav-item mx-3'>
    //           <a className='nav-link text-white' href='#'>
    //             Link
    //           </a>
    //         </li>
    //         <li className='nav-item mx-3 dropdown'>
    //           <a
    //             className='nav-link text-white dropdown-toggle'
    //             href='#'
    //             role='button'
    //             data-bs-toggle='dropdown'
    //             aria-expanded='false'
    //           >
    //             Dropdown
    //           </a>
    //           <ul className='dropdown-menu'>
    //             <li>
    //               <a className='dropdown-item' href='#'>
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a className='dropdown-item' href='#'>
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <hr className='dropdown-divider' />
    //             </li>
    //             <li>
    //               <a className='dropdown-item' href='#'>
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li className='nav-item mx-3'>
    //           <a className='nav-link text-white disabled'>Disabled</a>
    //         </li>
    //       </ul>
    //       <form className='d-flex' role='search'>
    //         <input
    //           className='form-control me-2'
    //           type='search'
    //           placeholder='Search'
    //           aria-label='Search'
    //         />
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  );
}
