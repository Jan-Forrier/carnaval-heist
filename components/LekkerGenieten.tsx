import Image from 'next/image'

const imgDsc080813 = "https://www.figma.com/api/mcp/asset/d55918f0-92b7-41f5-b482-569cf863604c"
const imgLucideUtensilsCrossed = "https://www.figma.com/api/mcp/asset/391fac41-bae1-4f4f-aea4-59664dad8b6c"

export default function LekkerGenieten() {
  return (
    <section className="flex flex-col items-start px-0 py-16 sm:py-24 md:py-32 relative w-full">
      <div className="flex gap-0 items-start justify-center overflow-hidden px-4 sm:px-8 md:px-16 py-0 relative w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row flex-1 gap-8 items-center justify-center relative w-full">
          <div className="flex flex-1 flex-col gap-4 md:gap-8 items-center relative w-full md:w-auto">
            <div className="flex flex-col gap-4 items-center relative">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center relative">
                <div className="bg-licht-geel flex items-center overflow-hidden p-2 relative rounded-[24px] shrink-0">
                  <div className="relative w-8 h-8 aspect-square">
                    <Image src={imgLucideUtensilsCrossed} alt="" fill className="object-contain" unoptimized style={{ objectFit: 'contain' }} />
                  </div>
                </div>
                <h2 className="font-display text-fluid-display text-black tracking-[1.92px] uppercase text-center">
                  Lekker Genieten
                </h2>
              </div>
              <p className="font-decorative font-normal text-fluid-body-lg text-black text-center">
                Vette Dinsdag Verwennerij
              </p>
            </div>
            <p className="font-body font-normal text-fluid-body text-black text-center w-full md:max-w-[700px]">
              Op dinsdag mag je jezelf verwennen met heel wat lekkers. Het is dan namelijk de laatste dag voor de vastenperiode en daarom is het traditie om oliebollen te bakken of heerlijke lekkernijen te kopen. Je kan het hele jaar door voor de beste patisserie terecht bij de bakkers in Knokke-Heist.
            </p>
          </div>
          <div className="aspect-[600/400] relative shrink-0 w-full md:w-[600px] overflow-hidden">
            <Image src={imgDsc080813} alt="" fill className="object-cover" unoptimized style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
