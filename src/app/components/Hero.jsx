'use client';
function Hero() {
  return (
    <div className="w-full max-w-full sm:max-w-2xl flex flex-col gap-3 sm:gap-5 px-2 sm:px-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">
        Industrial Bolt Load Calculator{' '}
      </h1>
      <h3 className="text-base sm:text-lg md:text-xl">
        Enter parameters for your work to find the best suitable bolt for you
      </h3>
    </div>
  );
}

export default Hero;
