import Image from 'next/image'

const imgFacbookLogo = "https://www.figma.com/api/mcp/asset/d8a3ffab-9826-48cb-b212-41ceb79b193b"
const imgKnokkeHeist = "https://www.figma.com/api/mcp/asset/5946d65c-7caa-4a7a-aa57-2cf81e02bfb2"

export default function Footer() {
  return (
    <footer className="bg-groen flex flex-col items-center justify-center overflow-hidden relative w-full">
      <div className="bg-groen border-t border-white flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden px-4 sm:px-8 md:px-16 py-8 md:py-16 relative w-full max-w-[1440px] mx-auto gap-8 md:gap-0">
        <div className="flex flex-col gap-4 items-start justify-center relative text-fluid-body-lg text-black">
          <a href="#programma" className="font-body font-normal leading-normal">Programma</a>
          <a href="#praktisch" className="font-body font-normal leading-normal">Praktisch</a>
          <a href="#kinderen" className="font-body font-normal leading-normal">Kinderen</a>
          <a href="#carnavalstermen" className="font-body font-normal leading-normal">Carnavalstermen</a>
          <a href="#deelnemen" className="font-body font-normal leading-normal">Deelnemen</a>
        </div>
        <div className="flex flex-col gap-0 h-full items-center justify-center pb-8 md:pb-16 pt-0 md:pt-8 px-0 md:px-16 relative">
          <div className="font-decorative font-normal text-fluid-body text-black text-center">
            <p className="mb-0">Alaaf! 👋</p>
            <p>Tot op het carnaval!</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-full items-start relative">
          <div className="flex flex-col gap-1 items-start relative text-fluid-body text-black">
            <p className="font-body font-bold leading-[1.5] uppercase w-full md:w-[259px]">
              Contact
            </p>
            <a href="mailto:openluchtanimatie@knokke-heist.be" className="block font-body font-normal leading-[1.5] w-full md:w-[259px] break-words">
              <p className="underline">openluchtanimatie@knokke-heist.be</p>
            </a>
          </div>
          <div className="flex flex-col gap-1 items-start relative">
            <p className="font-body font-bold leading-[1.5] text-fluid-body text-black uppercase">
              Volg ons op
            </p>
            <div className="flex flex-col items-start relative w-full md:w-[259px]">
              <div className="flex gap-2 items-center relative">
                <div className="aspect-[20/19.879] relative w-5 shrink-0">
                  <Image src={imgFacbookLogo} alt="" fill className="object-contain" unoptimized style={{ objectFit: 'contain' }} />
                </div>
                <p className="font-body font-normal leading-[1.5] text-fluid-body text-black">
                  heistcarnaval
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-col sm:flex-row items-center justify-center overflow-hidden px-4 sm:px-0 py-6 relative w-full gap-4 sm:gap-0">
        <div className="aspect-[200/17.637] relative w-[150px] sm:w-[200px]">
          <Image src={imgKnokkeHeist} alt="Knokke-Heist" fill className="object-contain" unoptimized style={{ objectFit: 'contain' }} />
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 items-center justify-center sm:absolute sm:right-[45px] sm:top-[0.47px]">
          <a href="#" className="font-body font-normal leading-[1.5] text-[#f6ebd7] text-fluid-body underline">
            Privacybeleid
          </a>
          <a href="#" className="font-body font-normal leading-[1.5] text-[#f6ebd7] text-fluid-body underline">
            Cookieverklaring
          </a>
          <div className="border border-[#f6ebd7] flex items-center justify-center px-4 py-2 relative rounded">
            <p className="font-body font-normal leading-[1.5] text-[#f6ebd7] text-fluid-body">
              Cookievoorkeuren
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
