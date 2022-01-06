import React from "react";
import Link from "next/link";


export default function Navbar() {
  return (
     <div className="fixed w-screen flex justify-center z-50">
          <div className="navigation-bar grid xl:grid-cols-4 grid-cols-1 text-white xl:w-1440px pt-8">
               <div className="px-8">
                    <div className="flex">
                         <div className="px-4 border-r border-solid border-white font-medium">
                              monopo
                         </div>
                         <div className="px-4">
                              london
                         </div>
                    </div>
               </div>
               <div className="hidden xl:block">
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
               <div className="hidden xl:block">
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
               <div className="hidden xl:block">
                    <ul className="text-white text-sm">
                         <li className="uppercase pb-4 font-medium cursor-pointer transition duration-300 linear opacity-50 hover:opacity-100">
                              4:20
                         </li>
                         <li className="uppercase pb-4 font-medium cursor-pointer transition duration-300 linear opacity-50 hover:opacity-100">
                              6:20
                         </li>
                         <li className="uppercase pb-4 font-medium cursor-pointer transition duration-300 linear opacity-50 hover:opacity-100">
                              22:00
                         </li>
                    </ul>
               </div>
          </div>
     </div>
  )
}
