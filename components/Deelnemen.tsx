import Image from 'next/image'

const imgLucideSquareArrowUpRight = "https://www.figma.com/api/mcp/asset/14206227-79b9-420e-9ba3-76ebc425a602"
const imgLucideDownload = "https://www.figma.com/api/mcp/asset/66cb1b8e-a262-4862-854c-5d794c591cc8"

export default function Deelnemen() {
  return (
    <section id="deelnemen" className="flex flex-col items-start px-0 py-16 sm:py-24 md:py-32 relative w-full">
      <div className="flex gap-0 items-start justify-center overflow-hidden px-4 sm:px-8 md:px-16 py-0 relative w-full max-w-[1440px] mx-auto">
        <div className="flex flex-1 flex-col gap-8 items-center relative w-full">
          <div className="flex flex-col gap-4 items-center relative w-full">
            <div className="flex gap-4 items-start justify-center relative w-full">
              <h2 className="font-display text-fluid-display text-black tracking-[1.92px] uppercase text-center">
                Deelnemen aan carnaval
              </h2>
            </div>
            <p className="font-decorative font-normal text-fluid-body-lg text-black text-center w-full">
              Wil je zelf deel uitmaken van het carnavalsfeest? Hier vind je alle informatie!
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start relative w-full">
            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-4 items-start relative w-full">
              {/* Item 1 */}
              <div className="bg-licht-geel flex flex-1 flex-col gap-4 items-start p-4 sm:p-6 md:p-8 relative rounded-lg self-stretch w-full">
                <p className="font-body font-semibold leading-normal text-fluid-h2 text-black text-center w-full">
                  Inschrijven voor de stoeten
                </p>
                <p className="font-body font-normal text-fluid-body text-black w-full">
                  <span>
                    Iedereen kan deelnemen aan de stoeten mits aan de bepalingen van het karrenreglement en de tijdelijke politieverordening wordt voldaan.
                    <br />
                    <br />
                  </span>
                  <span>📅 Inschrijvingen starten op 11 november via het online formulier</span>.
                </p>
                <div className="bg-white flex gap-0 items-center justify-center overflow-hidden p-4 relative rounded-full shrink-0 w-full">
                  <div className="flex flex-row items-center self-stretch">
                    <div className="flex gap-4 h-full items-center justify-center relative shrink-0">
                      <p className="font-body font-semibold leading-normal text-[18px] text-black">
                        Schrijf je in
                      </p>
                      <div className="relative w-[18px] h-[18px] shrink-0 aspect-square">
                        <Image src={imgLucideSquareArrowUpRight} alt="" fill className="object-contain" unoptimized style={{ objectFit: 'contain' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center justify-center relative shrink-0">
                  <a href="https://www.knokke-heist.be/sites/default/files/paragraph-file/Karrenreglement_4.pdf" className="font-body font-normal leading-normal text-[16px] text-black underline">
                    Karrenreglement 2026
                  </a>
                  <div className="relative w-4 h-4 shrink-0 aspect-square">
                    <Image src={imgLucideDownload} alt="" fill className="object-contain" unoptimized style={{ objectFit: 'contain' }} />
                  </div>
                </div>
                <div className="flex gap-4 items-center justify-center relative shrink-0">
                  <a href="https://www.knokke-heist.be/sites/default/files/paragraph-file/TPVO2025.pdf" className="font-body font-normal leading-normal text-[16px] text-black underline">
                    Tijdelijke Politieverordening
                  </a>
                  <div className="relative w-4 h-4 shrink-0 aspect-square">
                    <Image src={imgLucideDownload} alt="" fill className="object-contain" unoptimized style={{ objectFit: 'contain' }} />
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-licht-geel flex flex-1 flex-col gap-4 items-start p-4 sm:p-6 md:p-8 relative rounded-lg self-stretch w-full">
                <p className="font-body font-semibold leading-normal text-fluid-h2 text-black text-center w-full">
                  Prins(es) carnaval worden
                </p>
                <div className="font-body font-normal leading-normal text-[16px] text-black w-full">
                  <p className="mb-0">Gekroond worden tot prins(es) carnaval Heist is onvergetelijk en draag je met fierheid mee voor de rest van je leven.</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">📅 Deadline voor kandidaten is 11 november.</p>
                  <p className="mb-0">&nbsp;</p>
                  <p>Raadpleeg het handige draaiboek voor meer info:</p>
                </div>
                <div className="flex gap-4 items-center justify-center relative shrink-0">
                  <p className="font-body font-normal leading-normal text-[16px] text-black underline">
                    Draaiboek kandidaten Prins(es) Carnaval
                  </p>
                  <div className="relative w-4 h-4 shrink-0 aspect-square">
                    <Image src={imgLucideDownload} alt="" fill className="object-contain" unoptimized style={{ objectFit: 'contain' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row gap-4 items-start relative w-full">
              {/* Item 3 */}
              <div className="bg-licht-geel flex flex-1 flex-col gap-4 items-start p-4 sm:p-6 md:p-8 relative rounded-lg self-stretch w-full">
                <p className="font-body font-semibold leading-normal text-fluid-h2 text-black text-center w-full">
                  Eet- en drankstanden
                </p>
                <p className="font-body font-normal text-fluid-body text-black w-full">
                  <span>Professionele initiatiefnemers die graag een eet- of drankstand langs het parcours willen organiseren kunnen contact opnemen via </span>
                  <a href="mailto:openluchtanimatie@knokke-heist.be" className="underline">openluchtanimatie@knokke-heist.be</a>
                  <span> .</span>
                </p>
                <div className="bg-white flex gap-0 items-center justify-center overflow-hidden p-4 relative rounded-full shrink-0 w-full">
                  <div className="flex flex-row items-center self-stretch">
                    <div className="flex gap-4 h-full items-center justify-center relative shrink-0">
                      <p className="font-body font-semibold leading-normal text-[18px] text-black">
                        Mail ons
                      </p>
                      <div className="relative w-[18px] h-[18px] shrink-0 aspect-square">
                        <Image src={imgLucideSquareArrowUpRight} alt="" fill className="object-contain" unoptimized style={{ objectFit: 'contain' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-0 items-start relative w-full">
                  <div className="flex flex-1 flex-col items-start justify-center relative">
                    <div className="flex gap-4 items-center justify-center relative shrink-0">
                      <a href="https://www.knokke-heist.be/sites/default/files/paragraph-file/mobieledrankeetstanden.pdf" className="font-body font-normal leading-normal text-[16px] text-black underline">
                        Afsprakennota mobiele drank- en eetstanden
                      </a>
                      <div className="relative w-4 h-4 shrink-0">
                        <Image src={imgLucideDownload} alt="" fill className="object-contain" unoptimized />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-licht-geel flex flex-1 flex-col gap-4 items-start p-4 sm:p-6 md:p-8 relative rounded-lg self-stretch w-full">
                <p className="font-body font-semibold leading-normal text-fluid-h2 text-black text-center w-full">
                  Kleur Heist geel en groen!
                </p>
                <p className="font-body font-normal leading-normal max-w-[700px] text-[16px] text-black text-center w-full">
                  Zet jij Carnaval graag mee in de kijker?! Download een van de leuke, door jullie ontworpen, affiches, print hem af en hang hem op aan je raam.
                </p>
                <div className="flex flex-col gap-4 items-start relative shrink-0">
                  <div className="flex gap-4 items-center justify-center relative shrink-0">
                    <p className="font-body font-normal leading-normal text-[16px] text-black underline">
                      Dansen, springen, zingen doen we met z'n al, 't is were carnaval
                    </p>
                    <div className="relative w-4 h-4 shrink-0">
                      <Image src={imgLucideDownload} alt="" fill className="object-contain" unoptimized />
                    </div>
                  </div>
                  <div className="flex gap-4 items-center justify-center relative shrink-0">
                    <a href="https://www.knokke-heist.be/sites/default/files/inline-files/carnaval_geweld.pdf" className="font-body font-normal leading-normal text-[16px] text-black underline">
                      Een geweldig carnaval is een carnaval zonder geweld
                    </a>
                    <div className="relative w-4 h-4 shrink-0">
                      <Image src={imgLucideDownload} alt="" fill className="object-contain" unoptimized />
                    </div>
                  </div>
                  <div className="flex gap-4 items-center justify-center relative shrink-0">
                    <a href="https://www.knokke-heist.be/sites/default/files/inline-files/carnaval_sprot.pdf" className="font-body font-normal leading-normal text-[16px] text-black underline">
                      Eet sprot! Da's voor de rest van de avond genot!
                    </a>
                    <div className="relative w-4 h-4 shrink-0">
                      <Image src={imgLucideDownload} alt="" fill className="object-contain" unoptimized />
                    </div>
                  </div>
                  <div className="flex gap-4 items-center justify-center relative shrink-0">
                    <a href="https://www.knokke-heist.be/sites/default/files/inline-files/carnaval_val.pdf" className="font-body font-normal leading-normal text-[16px] text-black underline">
                      De beste val is carnaval
                    </a>
                    <div className="relative w-4 h-4 shrink-0">
                      <Image src={imgLucideDownload} alt="" fill className="object-contain" unoptimized />
                    </div>
                  </div>
                  <div className="flex gap-4 items-center justify-center relative shrink-0">
                    <a href="https://www.knokke-heist.be/sites/default/files/inline-files/carnaval_vechten.pdf" className="font-body font-normal leading-normal text-[16px] text-black underline">
                      O je moe vechten met carnaval, vecht tegen de vaak
                    </a>
                    <div className="relative w-4 h-4 shrink-0">
                      <Image src={imgLucideDownload} alt="" fill className="object-contain" unoptimized />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
