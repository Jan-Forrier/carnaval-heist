import Image from 'next/image'

const imgDsc080813 = "https://www.figma.com/api/mcp/asset/d55918f0-92b7-41f5-b482-569cf863604c"
const imgLucideBaby = "https://www.figma.com/api/mcp/asset/70bd3498-0590-41a3-9e91-b4b7c58a9064"

export default function Kinderen() {
  return (
    <section id="kinderen" className="bg-groen flex flex-col items-start px-0 py-16 sm:py-24 md:py-32 relative w-full">
      <div className="flex gap-0 items-start justify-center overflow-hidden px-4 sm:px-8 md:px-16 py-0 relative w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-8 md:gap-16 items-start relative w-full">
          <div className="flex flex-col gap-0 items-center relative w-full">
            <div className="flex flex-col gap-4 items-center relative">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center relative">
                <div className="bg-licht-geel flex items-center overflow-hidden p-2 relative rounded-[24px] shrink-0">
                  <div className="relative w-8 h-8 aspect-square">
                    <Image src={imgLucideBaby} alt="" fill className="object-contain" unoptimized style={{ objectFit: 'contain' }} />
                  </div>
                </div>
                <h2 className="font-display text-fluid-display text-black tracking-[1.92px] uppercase text-center">
                  Carnaval met kinderen
                </h2>
              </div>
              <p className="font-decorative font-normal text-fluid-body-lg text-black text-center">
                Carnaval heeft heel wat te bieden voor de allerkleinsten!
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-start relative w-full">
            {/* Zaterdag Card */}
            <div className="bg-licht-groen flex flex-1 flex-col items-start relative rounded-lg self-stretch">
              <div className="aspect-[4096/2731] relative rounded-tl-lg rounded-tr-lg shrink-0 w-full overflow-hidden">
                <Image src={imgDsc080813} alt="" fill className="object-cover rounded-tl-lg rounded-tr-lg" unoptimized style={{ objectFit: 'cover' }} />
              </div>
              <div className="flex flex-col gap-0 items-start p-4 sm:p-6 md:p-8 relative shrink-0 w-full">
                <div className="flex flex-col gap-3 items-start leading-normal relative text-black w-full">
                  <p className="font-body font-semibold text-fluid-body-lg uppercase w-full">
                    Zaterdag
                  </p>
                  <div className="font-body font-normal text-fluid-body w-full">
                    <p className="mb-0">
                      <span className="font-semibold">Voormiddag</span>
                      <br />
                      De Klasparade - een leuke wandeling met ongeveer 25 kleine praalwagens in de etalages van winkeliers
                    </p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">
                      <span className="font-semibold">14 uur</span>
                      <br />
                      Kindercarnavalbal in de tent op sfeerplein De Bolle 🎪
                    </p>
                    <p className="mb-0">&nbsp;</p>
                    <p>
                      <span className="font-semibold">Vanaf 14 uur</span>
                      <br />
                      Kermis op het Heldenplein met warme oliebollen
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Zondag Card */}
            <div className="bg-licht-groen flex flex-1 flex-col items-start relative rounded-lg self-stretch">
              <div className="aspect-[4096/2731] relative rounded-tl-lg rounded-tr-lg shrink-0 w-full overflow-hidden">
                <Image src={imgDsc080813} alt="" fill className="object-cover rounded-tl-lg rounded-tr-lg" unoptimized style={{ objectFit: 'cover' }} />
              </div>
              <div className="flex flex-col gap-0 items-start p-8 relative shrink-0 w-full">
                <div className="flex flex-col font-body font-semibold gap-3 items-start leading-normal relative text-black w-full">
                  <p className="text-[18px] uppercase w-full">
                    ZONDAG
                  </p>
                  <div className="text-fluid-body w-full">
                    <p className="mb-0">
                      <span>
                        14 uur
                        <br />
                      </span>
                      <span className="font-normal">De grote stoet - ook toeschouwers mogen verkleed zijn!</span>
                    </p>
                    <p className="mb-0">&nbsp;</p>
                    <p>
                      <span className="font-normal">Heel wat praalwagens gooien snoepgoed, dus neem een papieren of stoffen zakje mee. </span>🍬
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dinsdag Card */}
            <div className="bg-licht-groen flex flex-1 flex-col items-start relative rounded-lg self-stretch">
              <div className="aspect-[4096/2731] relative rounded-tl-lg rounded-tr-lg shrink-0 w-full overflow-hidden">
                <Image src={imgDsc080813} alt="" fill className="object-cover rounded-tl-lg rounded-tr-lg" unoptimized style={{ objectFit: 'cover' }} />
              </div>
              <div className="flex flex-col gap-0 items-start p-8 relative shrink-0 w-full">
                <div className="flex flex-col font-body font-semibold gap-3 items-start leading-normal relative text-black w-full">
                  <p className="text-[18px] uppercase w-full">
                    Dinsdag
                  </p>
                  <div className="text-fluid-body w-full">
                    <p className="mb-0">🌳 Wandeling</p>
                    <p className="font-normal mb-0">Een stevige wandeling in het natuurgebied van Heist</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">⚽ 15 - 16 uur</p>
                    <p className="font-normal mb-0">Knotsgekke voetbalwedstrijd tussen de plakkers en de vissers. Opwarmen met vissoep!</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">🍬18.30 uur</p>
                    <p>
                      <span className="font-normal">Babeluttenworp en popverbranding aan zaal Ravelingen</span>
                    </p>
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
