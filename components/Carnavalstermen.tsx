'use client'

import { useState } from 'react'
import Image from 'next/image'

const imgChevronDown = "https://www.figma.com/api/mcp/asset/146eae01-85f2-43ab-b544-7f0c55adb128"
const imgDivider = "https://www.figma.com/api/mcp/asset/086ed33b-9d15-4f89-aea2-4b07701c11e6"

const faqItems = [
  {
    id: 1,
    question: 'De elfde-van-de-elfde',
    answer: 'Op deze dag wordt het carnavalsseizoen geopend door het Hof Der Prinsen. Zij lanceren een carnavalspin en organiseren de zaterdag erop het Kapittel in zaal Ravelingen. Daarnaast start ook de kaartverkoop voor het Prinsenbal.'
  },
  {
    id: 2,
    question: 'Prins(es) carnaval',
    answer: 'Elk jaar wordt in Knokke-Heist een prins(es) carnaval verkozen. Deze vorst der zotten wordt verkozen op het prinsenbal en officieel aangesteld door het gemeentebestuur op de eerste dag van de carnaval 4-daagse.'
  },
  {
    id: 3,
    question: 'Gouden babelutte 🍬',
    answer: 'De babelutte is een soort caramelsnoep dat goed aan de tanden blijft plakken. Elk jaar worden tijdens de babeluttenworp 3 gouden stuks gegooid die recht geven op een verrassingspakket.'
  },
  {
    id: 4,
    question: 'Sprotjes 🐟',
    answer: 'Sprotjes zijn kleine haringen die gebakken worden in veel boter. Je eet ze \'uit het vuistje\' in vele cafés op maandag. Omdat de vissers van Heist vroeger niet gingen uitvaren tijdens carnaval, brachten ze vaak extra vis mee. Vanuit deze traditie is op maandag een bonte, gezellige avond met vele gratis vislekkernijen ontstaan.'
  },
  {
    id: 5,
    question: 'Klakker',
    answer: 'Een typisch Heists symbool van carnaval dat aan de pols van iedere carnavalist hoort te bengelen. Het is een klein, houten percussieinstrument waarmee je op het ritme van de muziek kan klakkeren.'
  },
  {
    id: 6,
    question: 'Alaaf!',
    answer: 'Dé carnavalsgroet ; een handgebaar dat eruit bestaat de vingertoppen van de linkerhand naar de rechterslaap te brengen.'
  }
]

export default function Carnavalstermen() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    )
  }

  return (
    <section id="carnavalstermen" className="bg-licht-groen flex flex-col items-start px-0 py-16 sm:py-24 md:py-32 relative w-full">
      <div className="flex gap-0 items-start overflow-hidden px-4 sm:px-8 md:px-16 py-0 relative w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start px-0 py-6 md:py-12 relative self-stretch shrink-0 w-full">
          <div className="flex flex-col gap-4 items-start relative shrink-0 whitespace-pre-wrap w-full md:w-[512px]">
            <h2 className="font-display text-fluid-display text-[#1b2128] tracking-[1.92px] uppercase w-full">
              Carnavalstermen
            </h2>
            <p className="font-decorative font-normal text-fluid-body-lg text-black w-full">
              Ken je de taal van carnaval?{' '}
              <br />
              Ontdek de belangrijkste begrippen en tradities.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-start relative">
            {faqItems.map((item) => {
              const isOpen = openItems.includes(item.id)
              return (
                <div key={item.id} className="border-t-2 border-[rgba(73,91,110,0.2)] w-full">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="flex gap-2 items-center justify-between w-full px-0 py-6 text-left hover:opacity-80 transition-opacity"
                  >
                    <p className="flex-1 font-body font-semibold leading-normal text-[#1b2128] text-fluid-body-lg">
                      {item.question}
                    </p>
                    <div className={`relative w-6 h-6 shrink-0 aspect-square transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <Image src={imgChevronDown} alt="" fill className="object-contain" unoptimized style={{ objectFit: 'contain' }} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-0 pb-6">
                      <p className="font-body font-normal text-fluid-body text-[#1b2128]">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <div className="absolute bottom-0 h-0 left-[-96px] right-[-96px]">
            <Image src={imgDivider} alt="" fill className="object-contain" unoptimized />
          </div>
        </div>
      </div>
    </section>
  )
}
