import Image from "next/image"

export default function OffMarketSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-light tracking-widest mb-6">
              GET ACCESS TO OFF-MARKET LISTINGS
            </h2>
            <p className="text-sm mb-8">
              Tired of dealing with outrageous bidding wars? Get in line real time! Beat your competition by subscribing to our off-market property list.
            </p>
            
            <div className="space-y-4">
              <button className="w-full bg-white border shadow px-6 py-3 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                <Image
                  src="/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
                <span>Sign in with Google</span>
              </button>
              
              <button className="w-full bg-[#1877F2] text-white px-6 py-3 flex items-center justify-center space-x-2 hover:bg-[#1864D9] transition-colors">
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
                <span>Continue with Facebook</span>
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                </div>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input
                  type="email"
                  placeholder="Email address*"
                  className="w-full px-4 py-3 border focus:ring-2 focus:ring-black focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-3 text-xs tracking-widest hover:bg-gray-800 transition-colors"
                >
                  CONTINUE WITH EMAIL
                </button>
              </form>
            </div>
          </div>

          <div className="relative h-[600px]">
            <Image
              src="/offmarket.jpg"
              alt="Off-market luxury property"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
