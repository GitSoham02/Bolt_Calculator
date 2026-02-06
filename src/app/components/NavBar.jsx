'use client';

import Image from 'next/image';

function NavBar() {
  return (
    <div className="p-3 sm:p-5 flex h-auto gap-3 sm:gap-5 justify-start items-center bg-bg-nav shadow-xl">
      <Image
        src="/logo2.png"
        alt="Logo image"
        width={40}
        height={40}
        className="sm:w-[50px] sm:h-[50px]"
      />
      <h1 className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-roboto">
        Bolt calculator
      </h1>
    </div>
  );
}

export default NavBar;
