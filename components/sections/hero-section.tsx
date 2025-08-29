import Link from "next/link"
import HeroSlider from "@/components/hero-slider"

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="https://res.cloudinary.com/luxuryp/videos/f_mp4,vc_h264,q_auto/kx83xg3kdthbrhyejjy9/777-web-banner-30-sec.mp4" 
          type="video/mp4" 
        />
      </video>
      <div className="absolute inset-0 bg-black/40">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <div className="max-w-3xl">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  )
}
