import Image from 'next/image'
import { MapPin } from 'lucide-react'

const imgDsc080813 = "https://www.figma.com/api/mcp/asset/d55918f0-92b7-41f5-b482-569cf863604c"

interface EventCardProps {
  time: string
  title: string
  description: string | React.ReactNode
  location: string
  locationLink?: string
  image?: string
}

export default function EventCard({ time, title, description, location, locationLink, image }: EventCardProps) {
  const imageSrc = image || imgDsc080813
  
  return (
    <div className="bg-licht-groen flex flex-col items-start px-4 sm:px-8 md:px-16 py-6 md:py-8 relative rounded-lg w-full gap-4">
      {time && (
        <p className="font-body font-semibold leading-normal text-fluid-body-lg text-black w-full">
          {time}
        </p>
      )}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
        <div className="aspect-[200/133] w-full md:w-[200px] relative rounded-lg shrink-0">
          <Image src={imageSrc} alt="" fill className="object-cover rounded-lg" unoptimized />
        </div>
        <div className="flex flex-col gap-3 items-start relative text-black w-full flex-1">
          <p className="font-body font-semibold text-fluid-body-lg w-full">
            {title}
          </p>
          <div className="font-body font-normal text-fluid-body w-full">
            {typeof description === 'string' ? <p>{description}</p> : description}
          </div>
          <div className="flex gap-2 items-start md:items-center relative w-full">
            <div className="relative w-4 h-4 shrink-0 aspect-square text-black">
              <MapPin className="w-4 h-4" aria-hidden="true" />
            </div>
            {locationLink ? (
              <a 
                href={locationLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-body font-normal leading-normal text-fluid-body text-black underline break-words"
              >
                {location}
              </a>
            ) : (
              <p className="font-body font-normal leading-normal text-fluid-body text-black break-words">
                {location}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
