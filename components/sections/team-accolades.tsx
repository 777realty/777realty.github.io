import Image from "next/image"
import CountUp from "@/components/count-up"

export default function TeamAccolades() {
  return (
    <section className="relative md:mt-0">
      <div className="relative">
        <Image
          src="/background.jpg"
          alt="Team achievements background"
          width={1200}
          height={800}
          className="w-full h-[800px] object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/75">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white py-20">
            <h2 className="text-2xl font-light mb-8 md:mb-12 tracking-widest">TEAM ACCOLADES</h2>

            <div className="bg-black/30 p-4 md:p-8 rounded-lg w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 gap-8 w-full">
                {/* Column 1 */}
                <div className="space-y-8">
                  <div className="text-center">
                    <CountUp end={45} duration={3000} />
                    <p className="text-xs tracking-wider">COMBINED YEARS IN BUSINESS</p>
                  </div>
                  <div className="text-center">
                    <CountUp end={1} suffix="B+" duration={3000} />
                    <p className="text-xs tracking-wider">OVER 1 BILLION IN TOTAL SALES</p>
                  </div>
                  <div className="text-center">
                    <CountUp end={3} suffix="%" duration={3000} />
                    <p className="text-xs tracking-wider">LIST TO SOLD AVERAGE</p>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-8 md:border-l mdl:border-l border-gray-500">
                  <div className="text-center">
                    <CountUp end={1.5} suffix="%" duration={3000} />
                    <p className="text-xs tracking-wider">TOP 1.5% OF TEAMS NATIONWIDE</p>
                  </div>
                  <div className="text-center">
                    <CountUp end={200} suffix="+M" duration={3000} />
                    <p className="text-xs tracking-wider">DEAL VOLUME IN THE PAST 12 MONTHS</p>
                  </div>
                  <div className="text-center">
                    <CountUp end={1000} suffix="+" duration={3000} />
                    <p className="text-xs tracking-wider">
                      # OF CHAMPAGNE BOTTLES
                      <br />
                      DELIVERED
                    </p>
                  </div>
                </div>

                {/* Column 3 - Empty for layout */}
                <div className="hidden mdl:block space-y-8 border-l border-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
