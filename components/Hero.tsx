import Image from 'next/image'

const imgGroenePrins = "https://www.figma.com/api/mcp/asset/3a7c0494-0c2e-42a7-a09c-90bcd41ccba3"

export default function Hero() {
  return (
    <section className="bg-geel flex items-start px-4 sm:px-8 md:px-16 py-16 sm:py-24 md:py-32 relative w-full">
      <div className="flex flex-col lg:flex-row flex-1 gap-8 md:gap-16 items-center justify-center px-4 sm:px-8 md:px-16 py-0 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col gap-4 md:gap-8 items-start relative text-black w-full sm:min-w-[400px] max-w-[700px]">
          <h1 className="font-display text-fluid-h1 tracking-[1.92px] uppercase w-full">
            Heist viert Carnaval
          </h1>
          <p className="font-body font-normal text-fluid-body w-full">
            Heist is het kloppende carnavalscentrum van Knokke-Heist. Vier dagen lang wisselen kleurrijke stoeten, originele kostuums en sfeervolle evenementen elkaar in sneltempo af. De grote zondagstoet en de verlichte dinsdagavondstoet zijn de absolute hoogtepunten, waar talloze vrijwilligers hun passie tonen. Ook naast de stoeten bruist Heist in cafés en feestlocaties tot in de vroege uurtjes. Carnaval in Heist prikkel je zintuigen van begin tot eind.
          </p>
        </div>
        <div className="aspect-[263/500] relative w-full max-w-[263px] lg:w-[263.313px] shrink-0">
          <Image src={imgGroenePrins} alt="Groene Prins" fill className="object-contain" unoptimized style={{ objectFit: 'contain' }} />
        </div>
      </div>
    </section>
  )
}
