import React from 'react';


const Footer = () => {
  return(
    <div className="fixed w-screen h-screen flex justify-center z-10">
      <div className="footer-bar grid grid-cols-4 text-white xl:w-1440px pb-8 place-content-end">
        <div className="px-8">
          <div className="px-4">
            GROS NEGRO
          </div>
        </div>
        <div>
          <div className="font-bold text-lg">
            Based in Biarritz
          </div>
          <div className="font-medium opacity-50">
            Grew up in La Reunion
          </div>
        </div>
        <div>
          <div className="font-bold text-lg">
            Student and surfer
          </div>
          <div className="font-medium opacity-50">
            Nerd and skater
          </div>
        </div>
        <div>
          <div className="font-bold text-lg">
            C++ lover
          </div>
          <div className="font-medium opacity-50">
            and Cum eater
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;