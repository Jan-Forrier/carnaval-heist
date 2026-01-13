import EventCard from './EventCard'

export default function Programma() {
  return (
    <section id="programma" className="bg-groen flex flex-col items-start px-0 py-16 sm:py-24 md:py-32 relative w-full">
      <div className="flex gap-0 items-start overflow-hidden px-4 sm:px-8 md:px-16 py-0 relative w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-8 md:gap-16 items-start relative w-full">
          <div className="flex flex-col gap-4 items-start justify-center relative text-black text-center w-full">
            <h2 className="font-display text-fluid-display tracking-[1.92px] uppercase w-full">
              Programma
            </h2>
            <p className="font-decorative font-normal text-fluid-body-lg w-full">
              14 - 18 Februari
            </p>
          </div>

          {/* Zaterdag 14/2 */}
          <div className="flex flex-col gap-4 md:gap-8 items-start justify-center relative w-full">
            <p className="font-body font-semibold leading-normal text-fluid-h2 text-black text-center uppercase">
              Zaterdag 14/2
            </p>
            <div className="flex flex-col gap-4 items-start relative w-full">
              <EventCard
                time="12 - 13 uur"
                title="Aanstelling van prins(es) carnaval"
                description="De verkozen prins(es) krijgt het officieel ornaat en het gemeentebestuur overhandigt de sleutel van de gemeente."
                location="Sfeertent op Sfeerplein De Bolle"
              />
              <EventCard
                time="14 - 16.30 uur"
                title="Kindercarnavalbal met liveshow"
                description="Kinderen kunnen met hun ouders gratis genieten van een verkleed carnavalsfeest."
                location="Sfeertent op Sfeerplein De Bolle"
              />
              <EventCard
                time="17 - 3 uur"
                title="Feestavond"
                description="Kinderen kunnen met hun ouders gratis genieten van een verkleed carnavalsfeest."
                location="diverse cafés en feesttenten"
              />
            </div>
          </div>

          {/* Zondag 15/2 */}
          <div className="flex flex-col gap-8 items-start justify-center relative w-full">
            <p className="font-body font-semibold leading-normal text-fluid-h2 text-black text-center uppercase">
              Zondag 15/2
            </p>
            <div className="flex flex-col gap-4 items-start relative w-full">
              <EventCard
                time="10 - 11.30 uur"
                title="Vissersmis & Bloemenhulde"
                description="Carnaval en visserij gaan hand in hand samen. Daarom is er een eerbetoon aan de vissers van Heist in de Sint-Antoniuskerk met aansluitend Bloemenhulde op het Vissershuldeplein."
                location="Sint-Antoniuskerk"
              />
              <EventCard
                time="14 uur"
                title="Grote Zondagstoet"
                description={
                  <>
                    <p className="mb-0">
                      Kleine en grote wagens trekken doorheen de straten van Heist in een kleurrijke en creatieve parade. Bekijk via{' '}
                      <a href="https://www.google.com/maps/d/u/1/edit?hl=nl&mid=10d99canM10G_xwi2DzQYYSx7wQi5pho&ll=51.33686204167316%2C3.2393624027767043&z=16" className="underline">
                        deze link
                      </a>{' '}
                      het parcours.
                    </p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">Vermoedelijke tijden passage van de stoet:</p>
                    <ul className="list-disc ml-6">
                      <li>14:00 Stationsplein</li>
                      <li>14:25 Rotonde Chouffke - Bondgenotenlaan - Westkapellestraat</li>
                      <li>14:50 Feestboulevard Knokkestraat</li>
                      <li>15:30 Voetbalstadion De Taeye</li>
                      <li>16:00 Eretribune aan HEY museum</li>
                    </ul>
                  </>
                }
                location="centrum van Heist"
                locationLink="https://www.google.com/maps/d/u/1/edit?hl=nl&mid=10d99canM10G_xwi2DzQYYSx7wQi5pho&ll=51.33686204167316%2C3.2393624027767043&z=16"
              />
              <EventCard
                time="19.30 uur"
                title="Proclamatie Stoet"
                description="De winnende praalwagens worden bekendgemaakt."
                location="Sfeertent op Sfeerplein De Bolle"
              />
              <EventCard
                time="vanaf 20 uur"
                title="Verklede zotte zondag"
                description="In heel wat cafés in Heist is er feest tot in de vroege uurtjes."
                location="cafés in Heist"
              />
            </div>
          </div>

          {/* Maandag 16/2 */}
          <div className="flex flex-col gap-8 items-start justify-center relative w-full">
            <p className="font-body font-semibold leading-normal text-fluid-h2 text-black text-center uppercase">
              Maandag 16/2
            </p>
            <div className="flex flex-col gap-4 items-start relative w-full">
              <EventCard
                time="vanaf 16 uur"
                title="Sprotjesavond"
                description={
                  <>
                    <span>In heel wat cafés in Heist worden sprot en andere vishapjes gebakken. Bekijk op de{' '}</span>
                    <a href="https://www.google.com/maps/d/u/1/edit?hl=nl&mid=10d99canM10G_xwi2DzQYYSx7wQi5pho&ll=51.33849619343107%2C3.2406284054317336&z=17" className="underline">
                      kaart
                    </a>
                    {' '}welke cafés dit jaar meedoen.
                  </>
                }
                location="Bekijk op de kaart"
                locationLink="https://www.google.com/maps/d/u/1/edit?hl=nl&mid=10d99canM10G_xwi2DzQYYSx7wQi5pho&ll=51.33849619343107%2C3.2406284054317336&z=17"
              />
              <EventCard
                time="vanaf 17 uur"
                title="Bal Van De Zeemeermin"
                description="Een gezellig bal georganiseerd door de Vissers"
                location="Sfeertent op Sfeerplein De Bolle"
              />
            </div>
          </div>

          {/* Dinsdag 17/2 */}
          <div className="flex flex-col gap-8 items-start justify-center relative w-full">
            <p className="font-body font-semibold leading-normal text-fluid-h2 text-black text-center uppercase">
              Dinsdag 17/2
            </p>
            <div className="flex flex-col gap-4 items-start relative w-full">
              <EventCard
                time="15 -16 uur"
                title="Gemaskerde voetbalwedstrijd"
                description="Sinds 1928 is er een knotsgekke voetbalwedstrijd tussen de vissers en de plakkers. Het Hof Der Prinsen deelt langs de zijlijn vissoep uit, alle giften zijn voor een goed doel."
                location="Voetbalstadion De Taeye"
              />
              <EventCard
                time="18.30 uur"
                title="Babeluttenworp"
                description="Op het voorplein van zaal Ravelingen gooit prins(es) carnaval babelutten en snoepgoed voor de kinderen. De gouden babelutte geeft recht op een verrassingspakket."
                location="Stationsplein"
              />
              <EventCard
                time="18.45 uur"
                title="Popverbranding"
                description="Op het voorplein van zaal Ravelingen wordt een pop verbrand als teken van het naderend einde van de festiviteiten."
                location="Stationsplein"
              />
              <EventCard
                time="19 uur"
                title="Verlichte Avondstoet"
                description={
                  <>
                    <span>Op de tonen van stevige carnavalsmuziek trekt een uniek verlichte stoet doorheen de straten van Heist. Bekijk via{' '}</span>
                    <a href="https://www.google.com/maps/d/u/1/edit?hl=nl&mid=10d99canM10G_xwi2DzQYYSx7wQi5pho&ll=51.33686204167316%2C3.2393624027767043&z=16" className="underline">
                      deze link
                    </a>
                    {' '}het parcours.
                  </>
                }
                location="Bekijk op de kaart"
                locationLink="https://www.google.com/maps/d/u/1/edit?hl=nl&mid=10d99canM10G_xwi2DzQYYSx7wQi5pho&ll=51.33849619343107%2C3.2406284054317336&z=17"
              />
              <EventCard
                time="vanaf 21 uur"
                title="Vette dinsdag"
                description="In tal van Heistse cafés is er feest tot in de vroege uurtjes."
                location="Heistse cafés"
              />
            </div>
          </div>

          {/* Woensdag 18/2 */}
          <div className="flex flex-col gap-8 items-start justify-center relative w-full">
            <p className="font-body font-semibold leading-normal text-fluid-h2 text-black text-center uppercase">
              Woensdag 18/2
            </p>
            <div className="flex flex-col gap-4 items-start relative w-full">
              <EventCard
                time="vanaf 17 uur"
                title="Kazakken met haring"
                description=""
                location="Heistse cafés"
              />
            </div>
          </div>

          {/* Doorlopend */}
          <div className="flex flex-col gap-8 items-start justify-center relative w-full">
            <p className="font-body font-semibold leading-normal text-fluid-h2 text-black text-center uppercase">
              Doorlopend
            </p>
            <div className="flex flex-col gap-4 items-start relative w-full">
              <EventCard
                time=""
                title="De Klasparade"
                description="In tal van Heistse cafés is er feest tot in de vroege uurtjes."
                location="Heistse cafés"
              />
              <EventCard
                time="dagelijks vanaf 14 uur"
                title="Kermis"
                description=""
                location="Heldenplein"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
