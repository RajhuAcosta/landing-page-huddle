import { useState,useEffect } from 'react';
import './App.css'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <main className='bg-[hsl(257,40%,49%)] min-h-screen lg:flex md:bg-[url(/bg-desktop.svg)] lg:bg-cover lg:bg-center lg:px-16 lg:gap-14'>
      <section className='bg-[url(/bg-mobile.svg)] md:bg-[url(none)] bg-cover flex flex-col justify-evenly h-[320px] max-h-[373px] xs:h-[373px] lg:h-screen lg:min-h-screen px-6 xs:px-8 lg:px-0 lg:py-10 1.5xl:p-0 lg:min-w-[490px] lg:max-w-[709px] lg:flex-1'>
        <i><img className='w-32 md:w-40' src="/logo.svg" alt="" /></i>
        <picture className='lg:max-w-[709px]'><img className='xs:max-w-[310px] md:max-w-[350px] lg:min-w-[490px] lg:max-w-full block mx-auto lg:mx-0' src="/illustration-mockups.svg" alt="" /></picture>
      </section>
      {/* <section className='bg-[url(/bg-mobile.svg)] lg:bg-[url(none)] w-auto bg-cover max-h-[420px] lg:w-auto lg:h-auto px-10 lg:px-0'>
        <i><img className='w-32 pt-8 pb-14' src="/logo.svg" alt="" /></i>
        <picture><img className='pb-12 max-w-[290px] block mx-auto xs:pb-10' src="/illustration-mockups.svg" alt="" /></picture>
      </section> */}
      <section className='lg:grid lg:grid-rows-[1fr_auto]'>
        <div className='lg:flex lg:flex-col lg:items-start lg:justify-center'>
          <h1 className='text-white font-["Poppins"] font-semibold text-2xl lg:text-4xl text-center lg:text-start px-10 mt-6 mb-4 leading-10 lg:px-0 lg:w-[400px] lg:h-[108px] lg:leading-normal'>Build The Community Your Fans Will Love</h1>
          <p className='text-white/75 lg:text-white/90 font-["Open_Sans"] font-normal text-center lg:text-lg lg:text-start block mx-auto lg:mx-0 w-[280px] xs:w-[305px] lg:w-[37vw] 1.5xl:w-[36vw] mb-8'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
          <button className='bg-white text-[hsl(257,40%,49%)] font-["Poppins"] hover:bg-[hsl(300,69%,71%)] hover:text-white block mx-auto lg:m-0 px-24 py-3 rounded-full shadow-lg lg:text-lg lg:px-16 lg:py-3.5' style={{boxShadow: windowWidth>=1024?("1px 3px 18px -6px #000"):("")}}>Register</button>
        </div>
        <nav className='flex gap-3 place-content-center text-white pt-8 pb-6 lg:justify-end'>
          {
            windowWidth>=768?(
              <>
                <i className='bx bxl-facebook rounded-full border hover:text-[hsl(300,69%,71%)] hover:border-[hsl(300,69%,71%)] px-2 py-2 bx-sm' style={{borderWidth: windowWidth>=1024?("1.7px"):("1px")}}></i>
                <i className='bx bxl-twitter rounded-full border hover:text-[hsl(300,69%,71%)] hover:border-[hsl(300,69%,71%)] px-2 py-2 bx-sm' style={{borderWidth: windowWidth>=1024?("1.7px"):("1px")}}></i>
                <i className='bx bxl-instagram rounded-full border hover:text-[hsl(300,69%,71%)] hover:border-[hsl(300,69%,71%)] px-2 py-2 bx-sm' style={{borderWidth: windowWidth>=1024?("1.7px"):("1px")}}></i>
              </>
            ):(
              <>
                <i className='bx bxl-facebook rounded-full border hover:text-[hsl(300,69%,71%)] hover:border-[hsl(300,69%,71%)] px-1.5 py-1.5 bx-xs'></i>
                <i className='bx bxl-twitter rounded-full border hover:text-[hsl(300,69%,71%)] hover:border-[hsl(300,69%,71%)] px-1.5 py-1.5 bx-xs '></i>
                <i className='bx bxl-instagram rounded-full border hover:text-[hsl(300,69%,71%)] hover:border-[hsl(300,69%,71%)] px-1.5 py-1.5 bx-xs'></i>
              </>
            )
          }
        </nav>
      </section>
    </main>
  )
}

export default App
