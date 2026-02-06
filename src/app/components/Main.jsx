'use client';
function Main({ children }) {
  return (
    <div className="max-w-full self-center min-h-screen p-4 sm:p-5 py-6 sm:py-10 flex flex-col items-center gap-8 sm:gap-12 lg:gap-20">
      {children}
    </div>
  );
}

export default Main;
