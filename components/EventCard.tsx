import Image from 'next/image'

const imgDsc080813 = "https://www.figma.com/api/mcp/asset/d55918f0-92b7-41f5-b482-569cf863604c"
const imgLucideMapPin = "https://www.figma.com/api/mcp/asset/471a3051-e1d8-4473-9590-b0479624e2d2"

interface EventCardProps {
  time: string
  title: string
  description: string | React.ReactNode
  location: string
  locationLink?: string
}

export default function EventCard({ time, title, description, location, locationLink }: EventCardProps) {
  return (
    <div className="bg-licht-groen flex flex-col md:flex-row items-start md:items-center justify-between px-4 sm:px-8 md:px-16 py-6 md:py-8 relative rounded-lg w-full gap-4">
      <p className="font-body font-semibold leading-normal text-fluid-body-lg text-black w-full md:w-[160px] shrink-0">
        {time}
      </p>
      <div className="aspect-[200/133] w-full md:w-[200px] relative rounded-lg shrink-0">
        <Image src={imgDsc080813} alt="" fill className="object-cover rounded-lg" unoptimized />
      </div>
      <div className="flex flex-col gap-3 items-start relative text-black w-full md:max-w-[600px] md:w-[500px] flex-1">
        <p className="font-body font-semibold text-fluid-body-lg w-full">
          {title}
        </p>
        <div className="font-body font-normal text-fluid-body w-full">
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>
      </div>
      <div className="flex flex-row items-center shrink-0 w-full md:w-auto">
        <div className="flex gap-2 h-full items-center justify-start md:justify-center relative w-full md:w-[230px]">
          <div className="relative w-4 h-4 shrink-0 aspect-square">
            <Image src={imgLucideMapPin} alt="" fill className="object-contain" unoptimized style={{ objectFit: 'contain' }} />
          </div>
          {locationLink ? (
            <a href={locationLink} className="font-body font-normal leading-normal text-fluid-body text-black underline break-words">
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
  )
}
