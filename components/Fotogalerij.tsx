import Image from 'next/image'

const imgDsc080813 = "https://www.figma.com/api/mcp/asset/d55918f0-92b7-41f5-b482-569cf863604c"

export default function Fotogalerij() {
  return (
    <section className="bg-licht-geel flex items-start px-4 sm:px-8 md:px-16 py-16 sm:py-24 md:py-32 relative w-full">
      <div className="flex flex-col items-start relative shrink-0 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-4 items-center relative shrink-0 w-full">
          <div className="flex gap-4 items-start justify-center relative shrink-0 w-full">
            <h2 className="font-display text-fluid-display text-black tracking-[1.92px] uppercase text-center">
              Fotogalerij
            </h2>
          </div>
          <p className="font-decorative font-normal text-fluid-body-lg text-black text-center w-full">
            Herbeleef hier de zotste momenten van Carnaval Heist , gegarandeerd glimlachen verzekerd!
          </p>
        </div>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-[repeat(1,_fit-content(100%))] relative shrink-0 w-full mt-8">
          <div className="col-[1] flex flex-col aspect-[4/3] items-start justify-self-stretch relative row-[1] shrink-0">
            <div className="flex-1 min-h-0 min-w-0 relative w-full overflow-hidden">
              <Image src={imgDsc080813} alt="" fill className="object-cover" unoptimized style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="col-[2] flex flex-col aspect-[4/3] items-start justify-self-stretch relative row-[1] shrink-0">
            <div className="flex-1 min-h-0 min-w-0 relative w-full overflow-hidden">
              <Image src={imgDsc080813} alt="" fill className="object-cover" unoptimized style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="col-[3] flex flex-col aspect-[4/3] items-start justify-self-stretch relative row-[1] shrink-0">
            <div className="flex-1 min-h-0 min-w-0 relative w-full overflow-hidden">
              <Image src={imgDsc080813} alt="" fill className="object-cover" unoptimized style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
