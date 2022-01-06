import React from "react";
import Link from "next/link";


export default function Navbar() {
  return (
    <div className="fixed w-screen h-screen">
        <div>  {/*haut page*/}

        <div>

        </div>

        <div>
           <Link href="/Home">
                <a className="font-bold text-xl text-white">Home</a>
           </Link>

           <Link href="/Chez_moi">
                <a className="font-bold text-xl text-white ">Chez moi</a>
           </Link>

           <Link href="/Contact">
                <a className="font-bold text-xl text-white w">Contact</a>
           </Link>
        </div>

        <div>


        </div>

        <div>

        </div>

        </div>

         {/* fin haut */}
         {/* // bas de page */}
        <div>
        <div>

           </div>
           <div>

           </div>

           <div>

           </div>
           <div>

           </div>


        </div>

        {/* //fin bas */}
    </div>
  )
}
