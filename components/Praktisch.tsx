import Image from 'next/image'
import { Bike, Bus, Car, ParkingCircle, Accessibility, Cross, Toilet, Scale, Leaf } from 'lucide-react'

export default function Praktisch() {
  return (
    <section id="praktisch" className="bg-geel flex flex-col items-start px-0 py-16 sm:py-24 md:py-32 relative w-full">
      <div className="flex gap-0 items-start overflow-hidden px-4 sm:px-8 md:px-16 py-0 relative w-full max-w-[1440px] mx-auto">
        <div className="flex flex-1 flex-col gap-8 md:gap-16 items-start relative w-full">
          <div className="flex flex-col gap-4 items-start relative text-black text-center w-full">
            <h2 className="font-display text-fluid-display tracking-[1.92px] uppercase w-full">
              Praktisch
            </h2>
            <p className="font-decorative font-normal text-fluid-body-lg w-full">
              Alles wat je moet weten voor een zorgeloze carnavalsviering.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-start relative w-full">
            {/* Left Column */}
            <div className="flex flex-1 flex-col gap-4 items-start relative w-full md:w-auto">
              {/* Transport */}
                  <div className="bg-licht-geel flex flex-col gap-0 items-start justify-center p-4 sm:p-6 md:p-8 relative rounded-lg w-full">
                <div className="flex flex-col gap-4 items-start relative w-full">
                      <p className="font-body font-semibold leading-normal text-fluid-h2 text-black">
                    Hoe geraak je er?
                  </p>
                  <div className="flex flex-col gap-4 items-start relative w-full">
                    <p className="font-body font-normal leading-normal text-[#281d1b] text-[16px] w-full">
                      Te voet, met de fiets of met het openbaar vervoer is carnaval het makkelijkst te bereiken.
                    </p>
                    <div className="flex gap-4 items-center justify-center relative w-full">
                      <div className="bg-licht-geel flex items-center overflow-hidden p-2 relative rounded-[24px] shrink-0">
                        <div className="relative w-8 h-8 aspect-square text-[#281d1b]">
                          <Bike className="w-8 h-8" strokeWidth={2} aria-hidden="true" />
                        </div>
                      </div>
                      <p className="flex-1 font-body font-normal leading-normal text-[#281d1b] text-[16px]">
                        Er is een grote fietsparking voorzien aan het station Heist waar de stoet begint.
                      </p>
                    </div>
                    <div className="flex gap-[10px] items-center justify-center relative w-full">
                      <div className="bg-licht-geel flex items-center justify-center relative rounded-[24px] shrink-0 w-12 h-12">
                        <div className="relative w-8 h-8 aspect-square text-[#281d1b]">
                          <Bus className="w-8 h-8" strokeWidth={2} aria-hidden="true" />
                        </div>
                      </div>
                      <p className="flex-1 font-body font-normal leading-normal text-[#281d1b] text-[16px]">
                        <span>Op de website van </span>
                        <a href="https://www.delijn.be" className="underline">De Lijn</a>
                        <span> en </span>
                        <a href="https://www.belgiantrain.be" className="underline">NMBS</a>
                        <span> kan je de uurregeling voor de Krokusvakantie raadplegen.</span>
                      </p>
                    </div>
                    <div className="flex gap-[10px] items-center justify-center relative w-full">
                      <div className="bg-licht-geel flex items-center justify-center relative rounded-[24px] shrink-0 w-12 h-12">
                        <div className="relative w-8 h-8 aspect-square text-[#281d1b]">
                          <Car className="w-8 h-8" strokeWidth={2} aria-hidden="true" />
                        </div>
                      </div>
                      <p className="flex-1 font-body font-normal leading-normal text-[#281d1b] text-[16px]">
                        Met de auto geraak je op de dagen van de stoet moeilijk in het centrum van Heist omdat er een doorgangs- en parkeerverbod geldt langs het parcours en in de feestzone.
                      </p>
                    </div>
                    <div className="flex gap-[10px] items-start relative w-full">
                      <div className="bg-licht-geel flex items-center justify-center relative rounded-[24px] shrink-0 w-12 h-12">
                        <div className="relative w-8 h-8 aspect-square text-[#281d1b]">
                          <ParkingCircle className="w-8 h-8" strokeWidth={2} aria-hidden="true" />
                        </div>
                      </div>
                      <div className="flex-1 font-body font-normal leading-normal text-[#281d1b] text-[16px]">
                        <p className="mb-0">Als je toch met de auto komt, parkeer je bij voorkeur op de Elizabetlaan of aan de rand van Knokke-Heist. Het parkeerplan vind je hier.</p>
                        <p className="mb-0">&nbsp;</p>
                        <p className="mb-0">Tijdens de carnavalsperiode zijn een aantal parkeerpleinen ingenomen door tijdelijke constructies: het Stationsplein, de parking in de Knokkestraat en een deel van parking 't Chouffke. Daarnaast zijn bepaalde straten tijdens de stoetdagen moeilijk of niet bereikbaar, of geldt er een parkeerverbod. Het is daarom sterk aangeraden om de feestzone niet met de auto te bezoeken tijdens evenementen.</p>
                        <p className="mb-0">&nbsp;</p>
                        <p>Ben je inwoner en moet je toch weg? Parkeer je auto dan vooraf buiten het parcours, zodat je niet vast komt te zitten wanneer je wil vertrekken. Er worden geen doorlaatbewijzen afgeleverd door de politiediensten; doorgang is uitsluitend voorzien voor hulpdiensten.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accessibility */}
                  <div className="bg-licht-geel flex flex-col gap-0 items-start justify-center p-4 sm:p-6 md:p-8 relative rounded-lg w-full">
                <div className="flex flex-col gap-4 items-start relative w-full">
                  <div className="flex gap-4 items-start relative w-full">
                    <div className="bg-licht-geel flex items-center overflow-hidden p-2 relative rounded-[24px] shrink-0">
                      <div className="relative w-8 h-8 aspect-square text-[#281d1b]">
                        <Accessibility className="w-8 h-8" strokeWidth={2} aria-hidden="true" />
                      </div>
                    </div>
                    <p className="flex-1 font-body font-semibold leading-normal text-fluid-h2 text-black">
                      Toegankelijkheid
                    </p>
                  </div>
                  <div className="flex items-start relative w-full">
                    <div className="flex-1 flex-col gap-0 items-start relative">
                      <p className="font-body font-normal text-fluid-body text-[#281d1b] w-full">
                        <span>De meeste evenementen van carnaval vinden plaats in de publieke ruimte en zijn daarom in grote lijnen toegankelijk voor rolstoelgebruikers. Rolstoelgebruikers raadplegen best het toiletpuntenplan om te checken waar de miva-toiletten staan en kunnen zo in alle vrijheid een plekje kiezen om de stoeten te bekijken. Tijdelijke inrichtingen en feesttenten zijn voorzien van doorgangen die breed genoeg zijn voor een rolstoelgebruiker. Specifieke vragen kunnen steeds gericht worden aan </span>
                        <a href="mailto:openluchtanimatie@knokke-heist.be" className="underline">openluchtanimatie@knokke-heist.be</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prevention */}
                  <div className="bg-licht-geel flex flex-col gap-0 items-start justify-center p-4 sm:p-6 md:p-8 relative rounded-lg w-full">
                <div className="flex flex-col gap-4 items-start relative w-full">
                  <div className="flex gap-4 items-start relative w-full">
                    <div className="bg-licht-geel flex items-center overflow-hidden p-2 relative rounded-[24px] shrink-0">
                      <div className="relative w-8 h-8 aspect-square text-[#281d1b]">
                        <Cross className="w-8 h-8" strokeWidth={2} aria-hidden="true" />
                      </div>
                    </div>
                    <p className="flex-1 font-body font-semibold leading-normal text-[#281d1b] text-fluid-h2">
                      Preventie & EHBO
                    </p>
                  </div>
                  <div className="flex items-start relative w-full">
                    <div className="flex-1 flex-col gap-0 items-start relative">
                      <p className="font-body font-normal text-fluid-body text-[#281d1b] w-full">
                        Tijdens de 4-daagse carnaval is er een preventiepunt van de politie op de parking bij het museum Hey / toerismekantoor Heist. Tijdens de stoeten vind je er ook een EHBO-post. Let op je oren: praalwagens bereiken gemiddeld 100 dB en cafés zijn soms luid. Gebruik oordoppen of een koptelefoon voor kinderen. Gratis oordopjes zijn beschikbaar in zaal Ravelingen op het Stationsplein.
                      </p>
                      <p>Gratis oordopjes zijn beschikbaar in zaal Ravelingen op het Stationsplein. <strong>Of scoor gratis oordopjes bij de stewards en stewardessen van Carnaval Earlines die vooraan in de stoet lopen.</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-1 flex-col gap-4 items-start relative w-full md:w-auto">
              {/* Toilets */}
                  <div className="bg-licht-geel flex flex-col gap-0 items-start justify-center p-4 sm:p-6 md:p-8 relative rounded-lg w-full">
                <div className="flex flex-col gap-4 items-start relative w-full">
                  <div className="flex gap-4 items-start relative w-full">
                    <div className="bg-licht-geel flex items-center overflow-hidden p-2 relative rounded-[24px] shrink-0">
                      <div className="relative w-8 h-8 aspect-square text-[#281d1b]">
                        <Toilet className="w-8 h-8" strokeWidth={2} aria-hidden="true" />
                      </div>
                    </div>
                    <p className="flex-1 font-body font-semibold leading-normal text-[#281d1b] text-fluid-h2">
                      Toiletpunten
                    </p>
                  </div>
                  <div className="flex items-start relative w-full">
                    <div className="flex-1 flex-col gap-0 items-start relative">
                      <div className="font-body font-normal text-fluid-body text-[#281d1b] w-full">
                        <p className="mb-0">
                          <span>Tijdens de carnaval 4-daagse zijn er heel wat extra gratis toiletpunten voorzien in het centrum van Heist. Je kan ze op de </span>
                          <a href="https://www.google.com/maps/d/u/1/edit?hl=nl&mid=10d99canM10G_xwi2DzQYYSx7wQi5pho&ll=51.33686227836303%2C3.2393624027767043&z=16" className="underline">
                            kaart
                          </a>
                          {' '}raadplegen of op onderstaande lijst.
                        </p>
                        <p className="mb-0">&nbsp;</p>
                        <ul className="list-disc ml-6">
                          <li>Toiletpunt Startzone Stoeten 1 (hoek Eieburg - Blauwvoetlaan)</li>
                          <li>Toiletpunt Startzone Stoeten 2 (kruispunt Evendijk - Marktstraat)</li>
                          <li>Toiletpunt zaal Ravelingen (binnen + betalend) (+ miva-toilet + babyverzorgingstafel)</li>
                          <li>Toiletpunt Stationsplein (naast publiekstribune)</li>
                          <li>Toiletpunt parking 't Chouffke (+ miva-toilet)</li>
                          <li>Toiletpunt Sfeerplein De Bolle (toiletcontainer - betalend)</li>
                          <li>Toiletpunt Feestboulevard Knokkestraat aan 't Volkshuis (toiletcontainer - betalend)</li>
                          <li>Toiletpunt Feestboulevard Knokkestraat aan de Skihut (toiletcontainer - betalend)</li>
                          <li>Toiletpunt Knokkestraat - Polderstraat (+mivatoilet)</li>
                          <li>Toiletpunt voetbalstadion De Taeye</li>
                          <li>Toiletpunt eretribune museum Hey</li>
                          <li>Toiletpunt Noordstraat</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regulations */}
                  <div className="bg-licht-geel flex flex-col gap-0 items-start justify-center p-4 sm:p-6 md:p-8 relative rounded-lg w-full">
                <div className="flex flex-col gap-4 items-start relative w-full">
                  <div className="flex gap-4 items-start relative w-full">
                    <div className="bg-licht-geel flex items-center overflow-hidden p-2 relative rounded-[24px] shrink-0">
                      <div className="relative w-8 h-8 aspect-square text-[#281d1b]">
                        <Scale className="w-8 h-8" strokeWidth={2} aria-hidden="true" />
                      </div>
                    </div>
                    <p className="flex-1 font-body font-semibold leading-normal text-[#281d1b] text-fluid-h2">
                      Reglementen / wetten
                    </p>
                  </div>
                  <div className="flex items-start relative w-full">
                    <div className="flex-1 flex-col gap-0 items-start relative">
                      <p className="font-body font-normal text-fluid-body text-[#281d1b] w-full">
                        Tijdens carnaval geldt een tijdelijke politieverordening in de feestzone. Zo mag je enkel op bepaalde uren elektronische muziek spelen, geldt er een algemeen verbod op glas en sterke dranken en is confetti/serpentines voor zowel bezoekers als deelnemers verboden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Duurzaamheid */}
                  <div className="bg-licht-geel flex flex-col gap-0 items-start justify-center p-4 sm:p-6 md:p-8 relative rounded-lg w-full">
                <div className="flex flex-col gap-4 items-start relative w-full">
                  <div className="flex gap-4 items-start relative w-full">
                    <div className="bg-licht-geel flex items-center overflow-hidden p-2 relative rounded-[24px] shrink-0">
                      <div className="relative w-8 h-8 aspect-square text-[#281d1b]">
                        <Leaf className="w-8 h-8" strokeWidth={2} aria-hidden="true" />
                      </div>
                    </div>
                    <p className="flex-1 font-body font-semibold leading-normal text-[#281d1b] text-fluid-h2">
                      Duurzaamheid
                    </p>
                  </div>
                  <div className="flex items-start relative w-full">
                    <div className="flex-1 flex-col gap-0 items-start relative">
                      <div className="font-body font-normal text-fluid-body text-[#281d1b] w-full">
                        <p className="leading-[28px] mb-0">Ons 4-daags carnaval streeft naar duurzaamheid. We zetten in op:</p>
                        <ul className="list-disc ml-6">
                          <li className="mb-0 leading-[28px]">Fiets, carpool en taxi, vermijden van extra parkings</li>
                          <li className="mb-0 leading-[28px]">Direct opruimen van afval en hergebruik van materialen</li>
                          <li className="mb-0 leading-[28px]">Lokale, korte keten en veggie-opties bij foodstands</li>
                          <li className="mb-0 leading-[28px]">Herbruikbaar cateringmateriaal en CO₂-neutraal drukwerk</li>
                          <li className="mb-0 leading-[28px]">Digitale communicatie via app, website en socials</li>
                          <li className="mb-0 leading-[28px]">Gescheiden afvalcontainers voor praalwagens</li>
                          <li className="mb-0 leading-[28px]">Verbod op confetti, serpentines en sprays</li>
                          <li className="leading-[28px]">Waar mogelijk groene stroom</li>
                        </ul>
                      </div>
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
