import React from "react";
import Link from "next/link";


export default function Navbar() {
  return (
     <div className="fixed w-screen flex justify-center">
          <div className="navigation-bar grid grid-cols-4 text-white w-1440px pt-8">
               <div className="px-8">
                    <div className="flex">
                         <div className="px-4 border-r border-solid border-white">
                              monopo
                         </div>
                         <div className="px-4">
                              london
                         </div>
                    </div>
               </div>
               <div>
                    <ul className="text-white text-sm">
                         <li className="uppercase pb-4 font-medium cursor-pointer transition duration-300 linear opacity-50 hover:opacity-100">
                              Home
                         </li>
                         <li className="uppercase pb-4 font-medium cursor-pointer transition duration-300 linear opacity-50 hover:opacity-100">
                              Work
                         </li>
                         <li className="uppercase pb-4 font-medium cursor-pointer transition duration-300 linear opacity-50 hover:opacity-100">
                              Services
                         </li>
                    </ul>
               </div>
               <div>
                    <ul className="text-white text-sm">
                         <li className="uppercase pb-4 font-medium cursor-pointer transition duration-300 linear opacity-50 hover:opacity-100">
                              Team
                         </li>
                         <li className="uppercase pb-4 font-medium cursor-pointer transition duration-300 linear opacity-50 hover:opacity-100">
                              Contact
                         </li>
                         <li className="uppercase pb-4 font-medium cursor-pointer transition duration-300 linear opacity-50 hover:opacity-100">
                              Services
                         </li>
                    </ul>
               </div>
               <div>
                    <ul className="text-white text-sm">
                         <li className="uppercase pb-4 font-medium cursor-pointer transition duration-300 linear opacity-50 hover:opacity-100">
                              8:00
                         </li>
                         <li className="uppercase pb-4 font-medium cursor-pointer transition duration-300 linear opacity-50 hover:opacity-100">
                              9:00
                         </li>
                         <li className="uppercase pb-4 font-medium cursor-pointer transition duration-300 linear opacity-50 hover:opacity-100">
                              10:00
                         </li>
                    </ul>
               </div>
               </div>
     </div>
  )
}
