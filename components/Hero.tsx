



const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
           <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
                 <video className="h-full w-full object-cover"
                  muted autoPlay loop playsInline src='/hero.mp4' poster="/hero.jpeg"></video>
           </div>

           <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black">
           </div>

           <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
                  <img className="w-full p-4" src="/logo.png" alt="logo" />
                  <p className="p-4 text-lg tracking-tighter text-white"></p>
           </div>
    </section>
  )
}

export default Hero