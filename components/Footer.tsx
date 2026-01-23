'use client'

import { Facebook } from 'lucide-react'
import { useCookieConsent } from './cookie-consent/cookie-context'

export default function Footer() {
  const { showPreferences } = useCookieConsent()
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
              <a href="https://www.facebook.com/heistcarnaval/" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center relative group">
                <div className="aspect-[20/19.879] relative w-5 shrink-0 text-black">
                  <Facebook className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </div>
                <p className="font-body font-normal leading-[1.5] text-fluid-body text-black underline group-hover:shadow-sm transition-shadow">
                  heistcarnaval
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-col items-center justify-center overflow-hidden px-4 sm:px-16 py-6 relative w-full gap-8">
        <div className="flex items-center justify-center w-full">
          <a 
            href="https://www.knokke-heist.be/" 
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-[200/17.637] relative w-[150px] sm:w-[200px] text-[#f6ebd7] hover:opacity-80 transition-opacity"
            aria-label="Ga naar website van Knokke-Heist"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 18"
              className="w-full h-full"
              aria-label="Knokke-Heist"
            >
              <path d="M15.1675 0.423285H10.4409L3.59788 7.5485V0.423285H0V17.284H3.59788V12.134L6.27866 9.38272L11.0053 17.284H15.1675L8.7478 6.91358L15.1675 0.423285Z" fill="currentColor" />
              <path d="M27.3016 10.9347L20.8113 0.423285H17.2134V17.284H20.8113V6.6314L27.231 17.284H30.8995V0.423285H27.3016V10.9347Z" fill="currentColor" />
              <path d="M41.9048 0C37.037 0 33.7213 3.52734 33.7213 8.81834C33.7919 14.1093 37.037 17.6367 41.9048 17.6367C46.843 17.6367 50.0882 14.1093 50.0882 8.81834C50.0882 3.52734 46.843 0 41.9048 0ZM41.9048 14.2504C39.0829 14.2504 37.3192 12.2046 37.3192 8.88889C37.3192 5.57319 39.0829 3.45679 41.9048 3.45679C44.7266 3.45679 46.4903 5.50265 46.4903 8.88889C46.4903 12.134 44.7266 14.2504 41.9048 14.2504Z" fill="currentColor" />
              <path d="M68.1481 0.423285H63.4215L56.5785 7.5485V0.423285H52.9806V17.284H56.5785V12.134L59.3298 9.38272L64.0564 17.284H68.1481L61.7284 6.91358L68.1481 0.423285Z" fill="currentColor" />
              <path d="M85.3615 0.423285H80.6349L73.7919 7.5485V0.423285H70.2645V17.284H73.7919V12.134L76.5432 9.38272L81.2698 17.284H85.4321L79.0123 6.91358L85.3615 0.423285Z" fill="currentColor" />
              <path d="M98.836 3.66843V0.423285H87.478V17.284H98.836V13.9683H91.0758V10.2293H98.3421V6.91358H91.0758V3.66843H98.836Z" fill="currentColor" />
              <path d="M120.494 13.9683L128.536 5.92593L126.208 3.52734L118.166 11.5697V0.423285H114.85V11.6402L106.808 3.52734L104.48 5.85538L112.522 13.8977H102.363V17.2134H113.228C113.228 15.3792 114.709 13.9683 116.543 13.9683C118.377 13.9683 119.788 15.4497 119.859 17.2134H130.723V13.8977H120.494V13.9683Z" fill="currentColor" />
              <path d="M144.409 6.91358H137.778V0.423285H134.18V17.284H137.778V10.2293H144.409V17.284H148.007V0.423285H144.409V6.91358Z" fill="currentColor" />
              <path d="M152.099 17.284H163.386V13.9683H155.626V10.2293H162.963V6.91358H155.626V3.66843H163.386V0.423285H152.099V17.284Z" fill="currentColor" />
              <path d="M170.511 0.423285H166.914V17.284H170.511V0.423285Z" fill="currentColor" />
              <path d="M180.811 7.05468C178.413 6.13757 177.707 5.5732 177.707 4.65609C177.707 3.80953 178.483 3.17461 179.471 3.17461C180.459 3.17461 181.376 3.80953 181.799 5.00882L181.869 5.14992L184.832 3.3157L184.762 3.24515C183.704 1.12875 181.87 0.070551 179.541 0.070551C176.367 0.070551 174.109 2.04586 174.109 4.79718C174.109 7.26632 175.309 8.60671 178.977 10.0882C181.235 11.0053 182.011 11.6402 182.011 12.4868C182.011 13.6861 181.093 14.4621 179.612 14.4621C177.778 14.4621 176.649 13.4039 176.437 11.5697V11.4286L172.91 12.3457V12.4162C173.404 15.5203 176.085 17.6367 179.541 17.6367C183.069 17.6367 185.538 15.3792 185.538 12.2046C185.608 9.73545 184.409 8.46561 180.811 7.05468Z" fill="currentColor" />
              <path d="M186.314 0.423285V3.66843H191.323V17.284H194.921V3.66843H200V0.423285H186.314Z" fill="currentColor" />
            </svg>
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="https://www.knokke-heist.be/gemeente-en-bestuur/over-knokke-heist/factuurvoorwaarden/privacybeleid-gemeente-knokke-heist" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-normal leading-[1.5] text-[#f6ebd7] text-[12px] underline hover:text-white transition-colors"
            aria-label="Privacybeleid van Gemeente Knokke-Heist (opent in nieuw tabblad)"
          >
            Privacybeleid
          </a>
          <a 
            href="/cookieverklaring" 
            className="font-body font-normal leading-[1.5] text-[#f6ebd7] text-[12px] underline hover:text-white transition-colors"
            aria-label="Cookieverklaring van deze website"
          >
            Cookieverklaring
          </a>
          <button
            type="button"
            onClick={showPreferences}
            className="border border-[#f6ebd7] flex items-center justify-center px-4 py-2 rounded hover:bg-[#f6ebd7]/10 transition-colors"
          >
            <p className="font-body font-normal leading-[1.5] text-[#f6ebd7] text-[12px]">
              Cookievoorkeuren
            </p>
          </button>
        </div>
      </div>
    </footer>
  )
}
