import { Outlet } from 'react-router-dom';
import { TopNavBar } from './TopNavBar';
import { Footer } from './Footer';

export function AppLayout() {
  return (
    <div className="bg-[#10141a] text-[#dfe2eb] font-body min-h-screen">
      <TopNavBar />
      
      <main className="pt-10 min-h-screen relative overflow-hidden flex items-center justify-center pb-8">
        {/* Texture Overlays */}
        <div className="absolute inset-0 grid-overlay z-0 pointer-events-none"></div>
        <div className="absolute inset-0 scanline-overlay z-10 pointer-events-none"></div>
        
        {/* Route Content Area */}
        <section className="relative z-20 w-full max-w-5xl px-8 md:px-12 mt-12 mb-20 animate-fade-in">
          <Outlet />
        </section>

        {/* Global Background Image with Blend (Can be extracted if specific to pages, but looks global from design) */}
        <div className="fixed right-[-5%] top-[10%] w-1/3 h-2/3 opacity-10 pointer-events-none mix-blend-screen z-0 hidden md:block">
          <img 
            alt="Developer Environment" 
            className="w-full h-full object-cover grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv-MrEkrh_REhOj_ag0IMkLj6X4OjEulyPi7dXHfIS4zeWUIy37jJZa3wG-w-NiymxULaB3Yio99PLy7hmxqXxUz5G49PoQquECOvdUphE4aPXYR_YkmVmOM2i34x7Mt8H_RnXJ1E1MejrLqxfmfZ-0anFcePv6eBv--Rg5RXXjpdFgkdhj_uFvikCxnpv8khhpZvi3K-acJyqopWv9dzKLNsPTVRcCXVf68FsOk2vsBaVmtbeqwhG0YGc0UjxOyH8yCctZQxPBaFy"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
